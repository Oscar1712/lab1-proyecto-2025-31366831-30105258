// controllers/citas.controller.ts
import { Request, Response, NextFunction } from 'express';
import { citasService, CitaCreateData } from '../services/citas.service';

export const citasController = {

    async getCitas(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            // Filtrar por ID de usuario autenticado o por filtros de ADMIN
            const { personaId, profesionalId } = req.query;

            const citas = await citasService.findByFilter(
                personaId ? parseInt(personaId as string) : undefined,
                profesionalId ? parseInt(profesionalId as string) : undefined
            );

            res.status(200).json(citas);
        } catch (error) {
            next(error);
        }
    },

    async createCita(req: Request, res: Response, next: NextFunction): Promise<void> {
        const data: CitaCreateData = req.body;
        try {
            const nuevaCita = await citasService.create(data);
            res.status(201).json(nuevaCita);
        } catch (error) {
            // Manejar errores de transacción (p. ej., el bloque no estaba abierto)
            res.status(400).json({ message: 'No se pudo crear la cita. Verifique la disponibilidad del bloque de agenda.' });
            next(error);
        }
    },

    // ... Implementar métodos para reprogramar, cancelar y actualizar estado
};