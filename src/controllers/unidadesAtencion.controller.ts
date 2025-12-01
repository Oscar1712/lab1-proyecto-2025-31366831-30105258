// controllers/unidades.controller.ts
import { Request, Response, NextFunction } from 'express';
import { unidadesService, UnidadCreateData } from '../services/unidadesAtencion.service';

export const unidadesController = {

    async getAllUnidades(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const unidades = await unidadesService.findAllActive();
            res.status(200).json(unidades);
        } catch (error) {
            next(error);
        }
    },

    async createUnidad(req: Request, res: Response, next: NextFunction): Promise<void> {
        const data: UnidadCreateData = req.body;
        try {
            const nuevaUnidad = await unidadesService.create(data);
            res.status(201).json(nuevaUnidad);
        } catch (error) {
            next(error);
        }
    },
    // ... Implementar getById, update, delete de forma similar a Personas
};