// controllers/consentimientos.controller.ts

import { Request, Response } from 'express';
import { consentimientosService } from '../services/consentimientos.service';

class ConsentimientosController {
    async createConsentimiento(req: Request, res: Response) {
        try {
            const consentimiento = await consentimientosService.createConsentimiento(req.body);
            res.status(201).json(consentimiento);
        } catch (error) {
            res.status(400).send({ message: 'ERROR_CREAR_CONSENTIMIENTO', error });
        }
    }

    async getConsentimientoById(req: Request, res: Response) {
        try {
            const consentimiento = await consentimientosService.getConsentimientoById(req.params.id);
            res.status(200).json(consentimiento);
        } catch (error) {
            res.status(404).send({ message: 'ERROR_OBTENER_CONSENTIMIENTO' });
        }
    }

    async getConsentimientosByEpisodio(req: Request, res: Response) {
        try {
            const consentimientos = await consentimientosService.getConsentimientosByEpisodio(req.params.episodioId);
            res.status(200).json(consentimientos);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_OBTENER_CONSENTIMIENTOS', error });
        }
    }

    async invalidateConsentimiento(req: Request, res: Response) {
        try {
            const { motivo } = req.body;
            const consentimiento = await consentimientosService.invalidateConsentimiento(req.params.id, motivo);
            res.status(200).json({ message: 'Consentimiento anulado exitosamente', consentimiento });
        } catch (error) {
            res.status(500).send({ message: 'ERROR_ANULAR_CONSENTIMIENTO', error });
        }
    }
}

export const consentimientosController = new ConsentimientosController();