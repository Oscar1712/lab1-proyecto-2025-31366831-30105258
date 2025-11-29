// controllers/episodios.controller.ts

import { Request, Response } from 'express';
import { episodiosService } from '../services/episodios.service';
// import { handleHttpError } from '../utils/error.handler'; // Asumir un gestor

class EpisodiosController {
    async createEpisodio(req: Request, res: Response) {
        try {
            const episodio = await episodiosService.createEpisodio(req.body);
            res.status(201).json(episodio);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_CREAR_EPISODIO', error });
        }
    }

    async getEpisodioById(req: Request, res: Response) {
        try {
            const episodio = await episodiosService.getEpisodioById(req.params.id);
            res.status(200).json(episodio);
        } catch (error) {
            res.status(404).send({ message: 'ERROR_OBTENER_EPISODIO' });
        }
    }

    async getAllEpisodios(req: Request, res: Response) {
        try {
            const episodios = await episodiosService.getAllEpisodios(req.query);
            res.status(200).json(episodios);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_OBTENER_EPISODIOS', error });
        }
    }

    async closeEpisodio(req: Request, res: Response) {
        try {
            const episodio = await episodiosService.closeEpisodio(req.params.id);
            res.status(200).json({ message: 'Episodio cerrado exitosamente', episodio });
        } catch (error) {
            res.status(500).send({ message: 'ERROR_CERRAR_EPISODIO', error });
        }
    }
}

export const episodiosController = new EpisodiosController();