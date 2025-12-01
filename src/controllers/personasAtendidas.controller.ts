// src/controllers/personasAtendidas.controller.ts

import { Request, Response } from 'express';
import { personasService } from '../services/personasAtendidas.service'; 

class PersonasAtendidasController {
    async createPersona(req: Request, res: Response) {
        try {
            const persona = await personasService.createPersona(req.body);
            res.status(201).json(persona);
        } catch (error) {
            res.status(400).send({ message: 'ERROR_CREAR_PERSONA', error });
        }
    }

    async getPersonaById(req: Request, res: Response) {
        const { id } = req.params; 
        const numId = Number(id); // Convertir a número si el servicio espera un number

        if (!id || isNaN(numId)) {
            return res.status(400).send({ message: 'ERROR: El ID de la persona debe ser un número válido.' });
        }
        
        try {
            const persona = await personasService.getPersonaById(numId);
            
            if (!persona) {
                return res.status(404).send({ message: 'ERROR: Persona no encontrada.' });
            }
            
            res.status(200).json(persona);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_OBTENER_PERSONA', error });
        }
    }

    async updatePersona(req: Request, res: Response) {
        const { id } = req.params; 
        const numId = Number(id);

        if (!id || isNaN(numId)) {
            return res.status(400).send({ message: 'ERROR: El ID de la persona debe ser un número válido para actualizar.' });
        }

        try {
            const updatedPersona = await personasService.updatePersona(numId, req.body);
            
            if (!updatedPersona) {
                return res.status(404).send({ message: 'ERROR: Persona no encontrada para actualizar.' });
            }
            
            res.status(200).json(updatedPersona);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_ACTUALIZAR_PERSONA', error });
        }
    }
}

export const personasAtendidasController = new PersonasAtendidasController();