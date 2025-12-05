import { Request, Response } from 'express';
import { ProfesionalesService } from '../services/profesionales.service';
import { CreateProfesionalInput, UpdateProfesionalInput } from '../schemas/profesional.schema';

const service = new ProfesionalesService();

export class ProfesionalesController {
  async getAll(
    req: Request<{}, {}, {}, {
      especialidad?: string;
      estado?: string;
      page?: string;
      limit?: string;
    }>,
    res: Response
  ) {
    try {
      const filters = {
        especialidad: req.query.especialidad,
        estado: req.query.estado,
        page: req.query.page ? parseInt(req.query.page) : 1,
        limit: req.query.limit ? parseInt(req.query.limit) : 10,
      };

      const result = await service.getAll(filters);
      
      res.json({
        success: true,
        data: result.data,
        pagination: result.pagination,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }

  async getById(
    req: Request<{ id: string }>,
    res: Response
  ) {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)|| id <= 0) {
        return res.status(400).json({
          success: false,
          error: 'ID de profesional inválido',
        });
      }

      const data = await service.update(id, req.body);
      
      res.json({
        success: true,
        message: 'Profesional actualizado exitosamente',
        data,
      });
    } catch (error: any) {
      if (error.message === 'Profesional no encontrado') {
        res.status(404).json({
          success: false,
          error: error.message,
        });
      } else if (error.message.includes('Ya existe')) {
        res.status(409).json({
          success: false,
          error: error.message,
        });
      } else {
        res.status(400).json({
          success: false,
          error: 'Error al actualizar profesional',
        });
      }
    }
  }

  async delete(
    req: Request<{ id: string }>,
    res: Response
  ) {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({
          success: false,
          error: 'ID de profesional inválido',
        });
      }

const data = await service.delete(id);
      
      res.json({
        success: true,
        message: 'Profesional desactivado exitosamente',
        data,
      });
    } catch (error: any) {
      if (error.message === 'Profesional no encontrado') {
        res.status(404).json({
          success: false,
          error: error.message,
        });
      } else if (error.message.includes('No se puede desactivar')) {
        res.status(400).json({
          success: false,
          error: error.message,
        });
      } else {
        res.status(500).json({
          success: false,
          error: 'Error al desactivar profesional',
        });
      }
    }
  }
}
