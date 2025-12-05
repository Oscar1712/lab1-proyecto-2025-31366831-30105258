import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service.js';
import { RegisterInput, LoginInput } from '../schemas/auth.schema.js';

const authService = new AuthService();

export class AuthController {
  async register(
    req: Request<{}, {}, RegisterInput>,
    res: Response
  ) {
    try {
      const result = await authService.register(req.body);
      
      res.status(201).json({
        success: true,
        message: 'Usuario creado exitosamente',
        data: {
          user: result.user,
          token: result.token,
        },
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        error: error.message,
        code: error.message.includes('ya existe') ? 'USER_EXISTS' : 'VALIDATION_ERROR',
      });
    }
  }

  async login(
    req: Request<{}, {}, LoginInput>,
    res: Response
  ) {
    try {
      const result = await authService.login(req.body.email, req.body.password);
      
      res.json({
        success: true,
        message: 'Inicio de sesión exitoso',
        data: result,
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        error: 'Credenciales inválidas',
        code: 'INVALID_CREDENTIALS',
      });
    }
  }

  async me(req: Request, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'Usuario no autenticado',
        });
      }

      res.json({
        success: true,
        data: {
          id: req.user.id,
          email: req.user.email,
          rol: req.user.rol,
        },
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: 'Error al obtener información del usuario',
      });
    }
  }

  async refreshToken(req: Request, res: Response) {
    try {
      // Implementar lógica de refresh token
      res.json({
        success: true,
        message: 'Token refrescado exitosamente',
      });
    } catch (error: any) {
      res.status(401).json({
        success: false,
        error: 'Token inválido o expirado',
      });
    }
  }

  async logout(req: Request, res: Response) {
    try {
      // Implementar lógica de logout (invalidar token si es necesario)
      res.json({
        success: true,
        message: 'Sesión cerrada exitosamente',
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: 'Error al cerrar sesión',
      });
    }
  }
}