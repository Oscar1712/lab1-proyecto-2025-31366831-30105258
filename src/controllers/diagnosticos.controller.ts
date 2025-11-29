// controllers/diagnosticos.controller.ts

import { Request, Response } from 'express';
import { diagnosticosService } from '../services/diagnosticos.service';

class DiagnosticosController {
    async createDiagnostico(req: Request, res: Response) {
        try {
            const diagnostico = await diagnosticosService.createDiagnostico(req.body);
            res.status(201).json(diagnostico);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_CREAR_DIAGNOSTICO', error });
        }
    }

    async getDiagnosticoById(req: Request, res: Response) {
        try {
            const diagnostico = await diagnosticosService.getDiagnosticoById(req.params.id);
            res.status(200).json(diagnostico);
        } catch (error) {
            res.status(404).send({ message: 'ERROR_OBTENER_DIAGNOSTICO' });
        }
    }

    async getDiagnosticosByEpisodio(req: Request, res: Response) {
        try {
            const diagnosticos = await diagnosticosService.getDiagnosticosByEpisodio(req.params.episodioId);
            res.status(200).json(diagnosticos);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_OBTENER_DIAGNOSTICOS', error });
        }
    }

    async deleteDiagnostico(req: Request, res: Response) {
        try {
            const diagnostico = await diagnosticosService.deleteDiagnostico(req.params.id);
            res.status(200).json({ message: 'Diagnóstico inactivo', diagnostico });
        } catch (error) {
            res.status(500).send({ message: 'ERROR_ELIMINAR_DIAGNOSTICO', error });
        }
    }
}

export const diagnosticosController = new DiagnosticosController();