// src/controllers/episodios.controller.ts

import { Request, Response } from 'express';
// ⚠️ SIN .ts al final
import { episodiosService } from '../services/episodios.service'; 

class EpisodiosController {
    async createEpisodio(req: Request, res: Response) {
        try {
            const episodio = await episodiosService.createEpisodio(req.body);
            res.status(201).json(episodio);
        } catch (error) {
            res.status(400).send({ message: 'ERROR_CREAR_EPISODIO', error });
        }
    }

    async getEpisodioById(req: Request, res: Response) {
        // 🛑 CORRECCIÓN DE TIPADO TS2345 (Ejemplo para línea 19)
        const { id } = req.params; 

        if (!id) {
            return res.status(400).send({ message: 'ERROR: El ID del episodio es requerido.' });
        }
        
        try {
            const episodio = await episodiosService.getEpisodioById(id);
            
            if (!episodio) {
                return res.status(404).send({ message: 'ERROR: Episodio no encontrado.' });
            }
            
            res.status(200).json(episodio);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_OBTENER_EPISODIO', error });
        }
    }
    
    // ... otros métodos del controlador de episodios
}

export const episodiosController = new EpisodiosController();