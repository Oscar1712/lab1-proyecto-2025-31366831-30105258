// controllers/personas.controller.ts
import { Request, Response, NextFunction } from 'express';
import { personasService, PersonaCreateData } from '../services/personas.service';

export const personasController = {

    async getAllPersonas(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const personas = await personasService.findAllActive();
            res.status(200).json(personas);
        } catch (error) {
            next(error);
        }
    },

    async getPersonaById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const persona = await personasService.findById(id);

            if (!persona) {
                res.status(404).json({ message: 'Paciente no encontrado' });
                return;
            }
            res.status(200).json(persona);
        } catch (error) {
            next(error);
        }
    },

    async createPersona(req: Request, res: Response, next: NextFunction): Promise<void> {
        const data: PersonaCreateData = req.body;
        try {
            const nuevaPersona = await personasService.create(data);
            res.status(201).json(nuevaPersona);
        } catch (error) {
            // Manejo de error de Prisma (ej. DNI/Documento duplicado)
            next(error);
        }
    },

    async updatePersona(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const data: Partial<PersonaCreateData> = req.body;
            const personaActualizada = await personasService.update(id, data);
            res.status(200).json(personaActualizada);
        } catch (error) {
            next(error);
        }
    },

    async deletePersona(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            await personasService.softDelete(id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    },
};