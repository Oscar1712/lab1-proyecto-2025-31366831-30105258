// ============================================
// ARCHIVO: src/controllers/unidadesAtencion.controller.ts
// ============================================
import { Request, Response } from 'express';
import { UnidadesAtencionService } from '../services/unidadesAtencion.service';

const service = new UnidadesAtencionService();

export class UnidadesAtencionController {
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
      res.status(201).json({ message: 'Unidad creada exitosamente', data });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const data = await service.update(id, req.body);
      res.json({ message: 'Unidad actualizada exitosamente', data });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await service.delete(id);
      res.json({ message: 'Unidad eliminada exitosamente' });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

