// middlewares/role.middleware.ts

import { Response, NextFunction } from 'express';
import { AuthRequest } from '../types/express.d';

// Definimos el tipo de roles permitidos
type AllowedRoles = ('ADMIN' | 'PROFESIONAL' | 'ASISTENTE' | 'PACIENTE')[];

/**
 * Función que retorna un middleware para verificar si el usuario tiene un rol permitido.
 * @param allowedRoles Array de strings con los roles que pueden acceder.
 */
export const roleMiddleware = (allowedRoles: AllowedRoles) => {
    
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        
        const userRole = req.userRole; // Rol obtenido de auth.middleware.ts

        // 1. Verificar si el rol existe (debería existir si pasó authMiddleware)
        if (!userRole) {
            // Esto solo debería pasar si se llama roleMiddleware sin authMiddleware
            return res.status(500).json({ message: 'Error de servidor: No se encontró el rol del usuario.' });
        }

        // 2. Verificar si el rol del usuario está incluido en la lista de roles permitidos
        if (allowedRoles.includes(userRole as any)) {
            // El usuario tiene el rol permitido
            next();
        } else {
            // El usuario no tiene el rol necesario
            return res.status(403).json({ message: 'Acceso prohibido. No tiene permisos suficientes.' });
        }
    };
};