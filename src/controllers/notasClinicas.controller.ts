// src/controllers/notasClinicas.controller.ts

import { Request, Response } from 'express';
// ⚠️ SIN .ts al final
import { notasClinicasService } from '../services/notasClinicas.service'; 

class NotasClinicasController {
    async createNota(req: Request, res: Response) {
        try {
            const nota = await notasClinicasService.createNota(req.body);
            res.status(201).json(nota);
        } catch (error) {
            res.status(400).send({ message: 'ERROR_CREAR_NOTA', error });
        }
    }

    async getNotaById(req: Request, res: Response) {
        // 🛑 CORRECCIÓN DE TIPADO TS2345
        const { id } = req.params; 
        const numId = Number(id); // Convertir a número si el servicio espera un number

        if (!id || isNaN(numId)) {
            return res.status(400).send({ message: 'ERROR: El ID de la nota debe ser un número válido.' });
        }
        
        try {
            const nota = await notasClinicasService.getNotaById(numId);
            
            if (!nota) {
                return res.status(404).send({ message: 'ERROR: Nota no encontrada.' });
            }
            
            res.status(200).json(nota);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_OBTENER_NOTA', error });
        }
    }

    async getNotasByEpisodio(req: Request, res: Response) {
        // 🛑 CORRECCIÓN DE TIPADO TS2345
        const { episodioId } = req.params; 
        const numEpisodioId = Number(episodioId);

        if (!episodioId || isNaN(numEpisodioId)) {
            return res.status(400).send({ message: 'ERROR: El ID del episodio debe ser un número válido.' });
        }
        
        try {
            const notas = await notasClinicasService.getNotasByEpisodio(numEpisodioId);
            res.status(200).json(notas);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_OBTENER_NOTAS_EPISODIO', error });
        }
    }

    async updateNota(req: Request, res: Response) {
        // 🛑 CORRECCIÓN DE TIPADO TS2345
        const { id } = req.params;
        const numId = Number(id);

        if (!id || isNaN(numId)) {
            return res.status(400).send({ message: 'ERROR: El ID de la nota debe ser un número válido para actualizar.' });
        }

        try {
            const updatedNota = await notasClinicasService.updateNota(numId, req.body);
            
            if (!updatedNota) {
                return res.status(404).send({ message: 'ERROR: Nota no encontrada para actualizar.' });
            }
            
            res.status(200).json(updatedNota);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_ACTUALIZAR_NOTA', error });
        }
    }
}

export const notasClinicasController = new NotasClinicasController();