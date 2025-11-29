// controllers/notasClinicas.controller.ts

import { Request, Response } from 'express';
import { notasClinicasService } from '../services/notasClinicas.service';

class NotasClinicasController {
    async createNota(req: Request, res: Response) {
        try {
            const nota = await notasClinicasService.createNota(req.body);
            res.status(201).json(nota);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_CREAR_NOTA', error });
        }
    }

    async getNotaById(req: Request, res: Response) {
        try {
            const nota = await notasClinicasService.getNotaById(req.params.id);
            res.status(200).json(nota);
        } catch (error) {
            res.status(404).send({ message: 'ERROR_OBTENER_NOTA' });
        }
    }

    async getNotasByEpisodio(req: Request, res: Response) {
        try {
            const notas = await notasClinicasService.getNotasByEpisodio(req.params.episodioId);
            res.status(200).json(notas);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_OBTENER_NOTAS', error });
        }
    }

    async updateNota(req: Request, res: Response) {
        try {
            const nota = await notasClinicasService.updateNota(req.params.id, req.body);
            res.status(200).json(nota);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_ACTUALIZAR_NOTA', error });
        }
    }
}

export const notasClinicasController = new NotasClinicasController();