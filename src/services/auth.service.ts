import prisma from '../config/database'; //
import { Prisma } from '@prisma/client'; // 👈 importa los tipos
import { hashPassword, comparePassword } from '../utils/bcrypt.util'; //Arreglar
import { generateToken } from '../utils/jwt.util'; // Arreglar
import { RegisterInput } from '../schemas/auth.schema.js';

export class AuthService {
  async register(data: RegisterInput) {
    const existingUser = await prisma.usuario.findUnique({ 
      where: { email: data.email } 
    });
    
    if (existingUser) {
      throw new Error('El usuario ya existe');
    }

    const hashedPassword = await hashPassword(data.password);
    
    // Crear transacción para usuario y profesional si corresponde
    const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const user = await tx.usuario.create({
        data: {
          email: data.email,
          password: hashedPassword,
          rol: data.rol,
          activo: data.activo,
        },
        select: { id: true, email: true, rol: true, activo: true },
      });

      // Si es médico, crear registro en profesionales
      if (data.rol === 'MEDICO' && data.profesional) {
        await tx.profesional.create({
          data: {
            usuarioId: user.id,
            ...data.profesional,
            estado: 'ACTIVO',
          },
        });
      }

      return user;
    });

    const token = generateToken({ 
      id: result.id, 
      email: result.email, 
      rol: result.rol 
    });

    return { token, user: result };
  }

  async login(email: string, password: string) {
    const user = await prisma.usuario.findUnique({ 
      where: { email },
      include: { profesional: true }
    });
    
    if (!user || !user.activo) {
      throw new Error('Credenciales inválidas');
    }

    const isValidPassword = await comparePassword(password, user.password);
    if (!isValidPassword) {
      throw new Error('Credenciales inválidas');
    }

    const token = generateToken({ 
      id: user.id, 
      email: user.email, 
      rol: user.rol 
    });

    return { 
      token, 
      user: { 
        id: user.id, 
        email: user.email, 
        rol: user.rol,
        profesional: user.profesional
      } 
    };
  }
}