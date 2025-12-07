// src/services/auth.service.ts
import prisma from '../config/database.js';
import { hashPassword, comparePassword } from '../utils/bcrypt.util.js';
import { generateToken } from '../utils/jwt.util.js';
import type { RegisterInput } from '../schemas/auth.schema.js'; // ajusta la ruta si hace falta

type RegisterInputWithOptionalProfessional = RegisterInput & {
  profesional?: {
    nombres: string;
    apellidos: string;
    registroProfesional: string;
    especialidad: string;
    correo?: string;
    telefono?: string;
  };
};

export class AuthService {
  async register(data: RegisterInputWithOptionalProfessional) {
    // validar existencia
    const existingUser = await prisma.usuario.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error('El usuario ya existe');
    }

    const hashedPassword = await hashPassword(data.password);

    // usar typeof prisma para tipar tx (compatible y práctico)
    const result = await prisma.$transaction(async (tx: typeof prisma) => {
      const user = await tx.usuario.create({
        data: {
          email: data.email,
          password: hashedPassword,
          rol: data.rol ?? 'user',
          activo: data.activo ?? true,
        },
        select: { id: true, email: true, rol: true, activo: true },
      });

      // Si quieres crear también un profesional al registrar un "medico",
      // asegúrate primero de que tu schema.prisma tenga la relación adecuada.
      if (data.rol === 'medico' && data.profesional) {
        // <-- IMPORTANTE: si tu modelo Profesional no tiene usuarioId, esto fallará.
        // Por ahora creamos profesional SIN referencia a usuario.
        await tx.profesional.create({
          data: {
            nombres: data.profesional.nombres,
            apellidos: data.profesional.apellidos,
            registroProfesional: data.profesional.registroProfesional,
            especialidad: data.profesional.especialidad,
            correo: data.profesional.correo ?? null,
            telefono: data.profesional.telefono ?? null,
            estado: 'activo',
            // Si agregas la FK usuarioId en el schema, pon: usuarioId: user.id
          },
        });
      }

      return user;
    });

    const token = generateToken({
      id: result.id,
      email: result.email,
      rol: result.rol,
    });

    return { token, user: result };
  }

  async login(email: string, password: string) {
    // no incluimos 'profesional' por compatibilidad con schema si no existe la relación
    const user = await prisma.usuario.findUnique({
      where: { email },
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
      rol: user.rol,
    });

    // devolver usuario sin password
    const safeUser = {
      id: user.id,
      email: user.email,
      rol: user.rol,
      activo: user.activo,
    };

    return { token, user: safeUser };
  }
}