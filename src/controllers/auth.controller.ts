// ============================================
// ARCHIVO: src/controllers/auth.controller.ts
// ============================================
import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { email, password, rol } = req.body;
      const user = await authService.register(email, password, rol);
      res.status(201).json({ message: 'Usuario creado exitosamente', data: user });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      res.json({ message: 'Inicio de sesión exitoso', data: result });
    } catch (error: any) {
      res.status(401).json({ error: error.message });
    }
  }

  async me(req: Request, res: Response) {
    res.json({ data: req.user });
  }
}
