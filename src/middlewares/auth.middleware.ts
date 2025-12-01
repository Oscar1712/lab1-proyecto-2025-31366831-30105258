// src/middlewares/auth.middleware.ts

import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    // Aquí iría la lógica para verificar el token JWT.
    
    // Por ahora, solo llama a next() para que la API avance a la siguiente función.
    next(); 
};

// Si tienes un middleware de rol, su estructura es similar:
export const roleMiddleware = (allowedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        // Lógica para verificar el rol del usuario (req.user.role)
        next();
    };
};