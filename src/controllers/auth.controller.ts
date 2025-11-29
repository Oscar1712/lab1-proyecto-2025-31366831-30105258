// controllers/auth.controller.ts (Ejemplo de login)

import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/auth.service';

export const authController = {

    async loginUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            // El middleware de validación ya verificó que email y password existen
            const { email, password } = req.body;

            // 1. Llama al servicio para verificar credenciales y generar el token
            const { user, token } = await authService.login(email, password);

            // 2. Respuesta HTTP: Envía el token y datos del usuario
            res.status(200).json({
                message: 'Login exitoso',
                user: { id: user.id, email: user.email, role: user.role },
                token // EL JWT que se usará para futuras peticiones
            });

        } catch (error) {
            // Si hay un error de credenciales inválidas, lo captura aquí
            // y envía un error 401 (Unauthorized) o pasa el error a next()
            res.status(401).json({ message: 'Credenciales inválidas' }); 
        }
    },
    // Implementar registerUser de forma similar...
};