// utils/jwt.util.ts

import jwt from 'jsonwebtoken';

// Asegúrate de que esta clave se carga desde .env (process.env.JWT_SECRET)
const JWT_SECRET = 'TU_CLAVE_SECRETA_SUPER_SEGURA'; 
const JWT_EXPIRATION = '7d';

export const generateToken = (payload: object): string => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

// Esta función es usada por el auth.middleware.ts
export const verifyToken = (token: string): any => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        throw new Error('Invalid or expired token');
    }
};