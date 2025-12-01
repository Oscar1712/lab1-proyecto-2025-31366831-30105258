// ============================================
// ARCHIVO: src/services/auth.service.ts
// ============================================
import prisma from '../config/database';
import { hashPassword, comparePassword } from '../utils/bcrypt.util';
import { generateToken } from '../utils/jwt.util';
import { sendEmail } from '../config/email';

export class AuthService {
  async register(email: string, password: string, rol: string) {
    const existingUser = await prisma.usuario.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error('El usuario ya existe');
    }

    const hashedPassword = await hashPassword(password);
    const user = await prisma.usuario.create({
      data: { email, password: hashedPassword, rol },
      select: { id: true, email: true, rol: true, activo: true },
    });

    await sendEmail(
      email,
      'Bienvenido a la Plataforma Médica',
      `Tu cuenta ha sido creada exitosamente.`,
      `<h1>Bienvenido</h1><p>Tu cuenta ha sido creada con rol: ${rol}</p>`
    );

    return user;
  }

  async login(email: string, password: string) {
    const user = await prisma.usuario.findUnique({ where: { email } });
    if (!user || !user.activo) {
      throw new Error('Credenciales inválidas');
    }

    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      throw new Error('Credenciales inválidas');
    }

    const token = generateToken({ id: user.id, email: user.email, rol: user.rol });
    return { token, user: { id: user.id, email: user.email, rol: user.rol } };
  }
}