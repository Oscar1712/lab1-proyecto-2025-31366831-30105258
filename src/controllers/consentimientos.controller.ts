// src/controllers/consentimientos.controller.ts

import { Request, Response } from 'express';
// ⚠️ Asegúrate de que no tenga la extensión .ts
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
        // 🛑 CORRECCIÓN DE TIPADO TS2345 (Línea 18 en tu error)
        const { id } = req.params; 

        if (!id) {
            return res.status(400).send({ message: 'ERROR: El ID del consentimiento es requerido en la ruta.' });
        }
        
        try {
            // TypeScript ahora sabe que 'id' es definitivamente 'string'
            const consentimiento = await consentimientosService.getConsentimientoById(id);
            
            if (!consentimiento) {
                return res.status(404).send({ message: 'ERROR: Consentimiento no encontrado.' });
            }
            
            res.status(200).json(consentimiento);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_OBTENER_CONSENTIMIENTO', error });
        }
    }

    async getConsentimientosByEpisodio(req: Request, res: Response) {
        // 🛑 CORRECCIÓN DE TIPADO TS2345 (Línea 27 en tu error)
        const { episodioId } = req.params;

        if (!episodioId) {
            return res.status(400).send({ message: 'ERROR: El ID del episodio es requerido en la ruta.' });
        }
        
        try {
            // TypeScript ahora sabe que 'episodioId' es definitivamente 'string'
            const consentimientos = await consentimientosService.getConsentimientosByEpisodio(episodioId);
            res.status(200).json(consentimientos);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_OBTENER_CONSENTIMIENTOS', error });
        }
    }

    async invalidateConsentimiento(req: Request, res: Response) {
        // 🛑 CORRECCIÓN DE TIPADO TS2345 (Línea 37 en tu error)
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({ message: 'ERROR: El ID del consentimiento es requerido en la ruta.' });
        }

        try {
            const { motivo } = req.body;
            // TypeScript ahora sabe que 'id' es definitivamente 'string'
            const consentimiento = await consentimientosService.invalidateConsentimiento(id, motivo);
            res.status(200).json({ message: 'Consentimiento anulado exitosamente', consentimiento });
        } catch (error) {
            res.status(500).send({ message: 'ERROR_ANULAR_CONSENTIMIENTO', error });
        }
    }
}

export const consentimientosController = new ConsentimientosController();