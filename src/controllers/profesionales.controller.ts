// controllers/profesionales.controller.ts

import { Request, Response, NextFunction } from 'express';
import { profesionalService, ProfesionalCreateData } from '../services/profesionales.service';
import { Prisma } from '@prisma/client'; // Importamos Prisma para manejar errores específicos

/**
 * Controladores de endpoints para la gestión de Profesionales.
 */
export const profesionalController = {

    /**
     * GET /api/profesionales
     * Obtiene la lista de profesionales.
     */
    async getAllProfesionales(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            // 1. Llamada al servicio
            const profesionales = await profesionalService.findAllActive();
            // 2. Respuesta HTTP
            res.status(200).json(profesionales);
        } catch (error) {
            // Pasa el error al middleware de manejo de errores
            next(error);
        }
    },

    /**
     * GET /api/profesionales/:id
     * Obtiene un profesional por ID.
     */
    async getProfesionalById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            // 1. Parseo de la entrada (el middleware de validación debería asegurar que sea un número)
            const id = parseInt(req.params.id);

            // 2. Llamada al servicio
            const profesional = await profesionalService.findById(id);

            // 3. Respuesta HTTP (Manejo de caso "No encontrado")
            if (!profesional) {
                // Genera un error 404
                res.status(404).json({ message: 'Profesional no encontrado' });
                return;
            }

            res.status(200).json(profesional);
        } catch (error) {
            next(error);
        }
    },

    /**
     * POST /api/profesionales
     * Crea un nuevo profesional.
     */
    async createProfesional(req: Request, res: Response, next: NextFunction): Promise<void> {
        // El middleware de validación (Express Validator) ya ejecutó la limpieza y chequeo del body
        const data: ProfesionalCreateData = req.body;

        try {
            const nuevoProfesional = await profesionalService.create(data);
            res.status(201).json(nuevoProfesional); // 201 Created
        } catch (error) {
            // Manejar errores de unicidad de MySQL/Prisma (p. ej., licencia o email duplicado)
            if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
                res.status(409).json({ message: 'Error de conflicto: El email o la licencia ya existe.' });
            } else {
                next(error);
            }
        }
    },

    /**
     * DELETE /api/profesionales/:id
     * Desactiva (soft delete) un profesional.
     */
    async deleteProfesional(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            await profesionalService.softDelete(id);
            res.status(204).send(); // 204 No Content
        } catch (error) {
            // Puedes añadir aquí la comprobación de errores de "registro no encontrado para borrar"
            next(error);
        }
    },
};