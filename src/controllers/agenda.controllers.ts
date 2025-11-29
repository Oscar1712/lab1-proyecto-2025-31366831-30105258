// controllers/agenda.controller.ts
import { Request, Response, NextFunction } from 'express';
import { agendaService, AgendaCreateData } from '../services/agenda.service';

export const agendaController = {

    // Endpoint para que los pacientes o asistentes consulten la disponibilidad
    async getAvailability(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { profesionalId, unidadId, fechaInicio, fechaFin } = req.query;

            // Validar y convertir tipos
            if (!profesionalId || !fechaInicio || !fechaFin) {
                res.status(400).json({ message: 'Faltan parámetros requeridos (profesionalId, fechaInicio, fechaFin)' });
                return;
            }

            const bloques = await agendaService.findAvailability(
                parseInt(profesionalId as string),
                parseInt(unidadId as string),
                new Date(fechaInicio as string),
                new Date(fechaFin as string)
            );

            res.status(200).json(bloques);
        } catch (error) {
            next(error);
        }
    },

    // Endpoint para que el ADMIN/PROFESIONAL cree un bloque
    async createAgendaBlock(req: Request, res: Response, next: NextFunction): Promise<void> {
        const data: AgendaCreateData = req.body;
        try {
            const nuevoBloque = await agendaService.createBlock(data);
            res.status(201).json(nuevoBloque);
        } catch (error) {
            // Manejar error de solapamiento (conflict)
            res.status(409).json({ message: 'El bloque de agenda se solapa con uno existente.' });
            next(error);
        }
    },
};