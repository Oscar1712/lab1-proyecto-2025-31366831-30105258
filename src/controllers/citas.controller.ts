import { Request, Response } from 'express';
import { CitasService } from '../services/citas.service.js';
import { CreateCitaInput, UpdateCitaInput } from '../schemas/cita.schema.js';

export class CitasController {
  private service = new CitasService();

  create = async (
    req: Request<{}, {}, CreateCitaInput>,
    res: Response
  ) => {
    try {
      if (!req.user) { // Falta carpeta
        return res.status(401).json({
          success: false,
          error: 'Usuario no autenticado',
        });
      }

      const result = await this.service.createCita(req.body, req.user.id);
      
      res.status(201).json({
        success: true,
        data: result,
        message: 'Cita creada exitosamente',
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };

  update = async (
    req: Request<{ id: string }, {}, UpdateCitaInput>,
    res: Response
  ) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: 'Usuario no autenticado',
        });
      }

      const result = await this.service.updateCita(
        req.params.id,
        req.body,
        req.user.id
      );
      
      res.json({
        success: true,
        data: result,
        message: 'Cita actualizada exitosamente',
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };

  getByProfesional = async (
    req: Request<{ profesionalId: string }, {}, {}, { fecha: string }>,
    res: Response
  ) => {
    try {
      const fecha = new Date(req.query.fecha || Date.now());
      const result = await this.service.getCitasPorProfesional(
        req.params.profesionalId,
        fecha
      );
      
      res.json({
        success: true,
        data: result,
        count: result.length,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };
}