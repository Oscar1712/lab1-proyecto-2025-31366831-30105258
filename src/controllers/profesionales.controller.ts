// ============================================
// ARCHIVO: src/controllers/profesionales.controller.ts
// ============================================
import { Request, Response } from 'express';
import { ProfesionalesService } from '../services/profesionales.service';

const service = new ProfesionalesService();

export class ProfesionalesController {
  async getAll(req: Request, res: Response) {
    try {
      const data = await service.getAll();
      res.json({ data });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const data = await service.getById(id);
      res.json({ data });
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = await service.create(req.body);
      res.status(201).json({ message: 'Profesional creado exitosamente', data });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const data = await service.update(id, req.body);
      res.json({ message: 'Profesional actualizado exitosamente', data });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await service.delete(id);
      res.json({ message: 'Profesional eliminado exitosamente' });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
