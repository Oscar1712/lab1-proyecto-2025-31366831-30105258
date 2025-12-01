// src/services/auth.service.ts
import prisma from '../config/database'; // ⬅️ Importamos la instancia sin .ts
import * as PrismaTypes from '@prisma/client'; // ⬅️ Importamos el bundle SÓLO para tipos
// Asegúrarse de que las rutas locales no tengan .ts
import { generateToken } from '../utils/jwt.util'; 
import { hashPassword, comparePassword } from '../utils/bcrypt.util'; 

// Definición de tipos
type Usuario = PrismaTypes.Usuario;

export type LoginResult = {
    user: Omit<Usuario, 'password'>;
    token: string;
};

// **Definición del Servicio Centralizado**
export const authService = {

    /**
     * Registra un nuevo usuario en la base de datos.
     * @param data Datos del usuario (email, password, role, etc.).
     * @returns El nuevo objeto Usuario (sin la contraseña).
     */
    async register(data: any): Promise<Omit<Usuario, 'password'>> {
        
        // Asumiendo que 'data' ya está validado y tiene los campos necesarios
        const hashedPassword = await hashPassword(data.password);
        
        const newUser = await prisma.usuario.create({
            data: {
                ...data,
                password: hashedPassword,
            },
            select: {
                id: true,
                email: true,
                role: true,
                // Añade aquí cualquier otro campo que debas retornar
            },
        });

        console.log(`[AUTH SERVICE] Usuario registrado con ID: ${newUser.id}`);
        return newUser;
    },

    /**
     * Verifica credenciales y genera un token de acceso.
     */
    async login(email: string, plainPassword: string): Promise<LoginResult> {
        
        const user = await prisma.usuario.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                password: true, // Necesario para la comparación
                role: true,
            }
        });

        if (!user) {
            // Usar una clase de error HTTP en una API real. Aquí usamos Error genérico.
            throw new Error('AUTH_INVALID_CREDENTIALS'); 
        }

        const passwordMatch = await comparePassword(plainPassword, user.password);

        if (!passwordMatch) {
            throw new Error('AUTH_INVALID_CREDENTIALS');
        }

        const token = generateToken({ 
            id: user.id, 
            email: user.email, 
            role: user.role 
        });
        
        // Excluir la contraseña del objeto retornado
        const { password, ...userWithoutPassword } = user;
        
        return {
            user: userWithoutPassword,
            token,
        };
    },
};