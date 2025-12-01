// services/auth.service.ts

// Usar la importación nombrada estándar (que espera la documentación de Prisma)
import PrismaClient, { Prisma } from '@prisma/client'; // Importación mixta
// import { PrismaClient, Prisma } from '@prisma/client';

// 1. Definir el tipo Usuario
type Usuario = Prisma.Usuario; 

// 2. Inicialización del cliente
const prisma = new PrismaClient();

import bcrypt from 'bcrypt';
import { generateToken } from '../utils/jwt.util'; // Utilidad para crear JWT
import { hashPassword, comparePassword } from '../utils/bcrypt.util'; // Utilidades de bcrypt

// Definición de tipos para la respuesta de login
export type LoginResult = {
    user: Omit<Usuario, 'password'>;
    token: string;
};

/**
 * Servicio centralizado para la lógica de autenticación (registro, login).
 */
export const authService = {

    /**
     * Registra un nuevo usuario en la base de datos.
     * @param data Datos del usuario (email, password, role, etc.).
     * @returns El nuevo objeto Usuario (sin la contraseña).
     */
    async register(data: any): Promise<Omit<Usuario, 'password'>> {
        // 1. **Hashing de la Contraseña**
        const hashedPassword = await hashPassword(data.password);
        
        // 2. **Creación del Usuario en DB (Prisma)**
        const newUser = await prisma.usuario.create({
            data: {
                ...data,
                password: hashedPassword,
                // Asumiendo que el modelo Usuario está ligado a Persona/Profesional
                // y tiene campos como email, role, etc.
            },
            select: {
                id: true,
                email: true,
                role: true,
                // Excluye la contraseña de la respuesta por seguridad
            },
        });

        console.log(`[AUTH SERVICE] Usuario registrado con ID: ${newUser.id}`);
        return newUser;
    },

    /**
     * Verifica credenciales y genera un token de acceso.
     * @param email Email del usuario.
     * @param plainPassword Contraseña sin hashear.
     * @returns Objeto con el usuario y el JWT, o lanza un error si falla.
     */
    async login(email: string, plainPassword: string): Promise<LoginResult> {
        
        // 1. **Buscar Usuario por Email (Prisma)**
        const user = await prisma.usuario.findUnique({
            where: { email },
            // Seleccionamos la contraseña *hash* para la verificación
            select: {
                id: true,
                email: true,
                password: true,
                role: true,
            }
        });

        // Verificación de existencia
        if (!user) {
            throw new Error('AUTH_INVALID_CREDENTIALS');
        }

        // 2. **Comparar Contraseña (bcrypt)**
        const passwordMatch = await comparePassword(plainPassword, user.password);

        if (!passwordMatch) {
            throw new Error('AUTH_INVALID_CREDENTIALS');
        }

        // 3. **Generar JWT**
        // Payload del token: Información mínima para identificar y autorizar al usuario
        const token = generateToken({ 
            id: user.id, 
            email: user.email, 
            role: user.role 
        });

        console.log(`[AUTH SERVICE] Login exitoso para usuario ID: ${user.id}`);
        
        // Retornar el resultado, excluyendo explícitamente la contraseña
        const { password, ...userWithoutPassword } = user;
        
        return {
            user: userWithoutPassword,
            token,
        };
    },
};