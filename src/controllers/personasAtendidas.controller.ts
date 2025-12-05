import { Request, Response } from 'express';
import { PersonasAtendidasService } from '../services/personasAtendidas.service.js';
import { CreatePersonaInput, UpdatePersonaInput } from '../schemas/persona.schema.js';

export class PersonasAtendidasController {
  private service = new PersonasAtendidasService();

  getAll = async (
    req: Request<{}, {}, {}, {
      documento?: string;
      nombres?: string;
      apellidos?: string;
      estado?: string;
      page?: string;
      limit?: string;
    }>,
    res: Response
  ) => {
    try {
      const filters = {
        documento: req.query.documento,
        nombres: req.query.nombres,
        apellidos: req.query.apellidos,
        estado: req.query.estado,
        page: req.query.page ? parseInt(req.query.page) : undefined,
        limit: req.query.limit ? parseInt(req.query.limit) : undefined,
      };

      const result = await this.service.getAll(filters);

      res.json({
        success: true,
        ...result,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  };

  getById = async (
    req: Request<{ id: string }>,
    res: Response
  ) => {
    try {
      const id = parseInt(req.params.id);
      const result = await this.service.getById(id);

      res.json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      if (error.message === 'Persona no encontrada') {
        res.status(404).json({
          success: false,
          error: error.message,
        });
      } else {
        res.status(500).json({
          success: false,
          error: error.message,
        });
      }
    }
  };

  create = async (
    req: Request<{}, {}, CreatePersonaInput>,
    res: Response
  ) => {
    try {
      const result = await this.service.create(req.body);

      res.status(201).json({
        success: true,
        data: result,
        message: 'Persona creada exitosamente',
      });
    } catch (error: any) {
      if (error.message.includes('Ya existe')) {
        res.status(409).json({
          success: false,
          error: error.message,
        });
      } else {
        res.status(400).json({
          success: false,
          error: error.message,
        });
      }
    }
  };

  update = async (
    req: Request<{ id: string }, {}, UpdatePersonaInput>,
    res: Response
  ) => {
    try {
      const id = parseInt(req.params.id);
      const result = await this.service.update(id, req.body);

      res.json({
        success: true,
        data: result,
        message: 'Persona actualizada exitosamente',
      });
    } catch (error: any) {
      if (error.message === 'Persona no encontrada') {
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
          error: error.message,
        });
      }
    }
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response
  ) => {
    try {
      const id = parseInt(req.params.id);
      const result = await this.service.delete(id);

      res.json({
        success: true,
        data: result,
        message: 'Persona desactivada exitosamente',
      });
    } catch (error: any) {
      if (error.message === 'Persona no encontrada') {
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
          error: error.message,
        });
      }
    }
  };

getEstadisticas = async (
    req: Request<{ id: string }>,
    res: Response
  ) => {
    try {
      const id = parseInt(req.params.id);
      const result = await this.service.getEstadisticas(id);

      res.json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      if (error.message === 'Persona no encontrada') {
        res.status(404).json({
          success: false,
          error: error.message,
        });
      } else {
        res.status(500).json({
          success: false,
          error: error.message,
        });
      }
    }
  };
}
