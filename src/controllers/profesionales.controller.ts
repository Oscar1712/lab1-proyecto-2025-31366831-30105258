// src/controllers/profesionales.controller.ts

import { Request, Response } from 'express';
import { profesionalService } from '../services/profesionales.service'; 

class ProfesionalesController {
    
    // ... (Mantener otros métodos como getAllProfesionales, createProfesional)
    
    async getProfesionalById(req: Request, res: Response) {
        const { id } = req.params; 

        // Puedes usar Number() para asegurar el tipo si tu servicio espera un número
        const numId = Number(id);

        if (!id || isNaN(numId)) {
            return res.status(400).send({ message: 'ERROR: El ID del profesional debe ser un número válido.' });
        }
        
        try {
            // Pasar el ID como número (si el servicio lo espera) o como string validado
            const profesional = await profesionalesService.getProfesionalById(numId); 
            
            if (!profesional) {
                return res.status(404).send({ message: 'ERROR: Profesional no encontrado.' });
            }
            
            res.status(200).json(profesional);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_OBTENER_PROFESIONAL', error });
        }
    }
    
    async updateProfesional(req: Request, res: Response) {
        const { id } = req.params; 
        const numId = Number(id);

        if (!id || isNaN(numId)) {
            return res.status(400).send({ message: 'ERROR: El ID del profesional debe ser un número válido.' });
        }
        
        try {
            const data = req.body;
            const updatedProfesional = await profesionalesService.updateProfesional(numId, data);
            
            if (!updatedProfesional) {
                return res.status(404).send({ message: 'ERROR: Profesional no encontrado para actualizar.' });
            }
            
            res.status(200).json(updatedProfesional);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_ACTUALIZAR_PROFESIONAL', error });
        }
    }
}

export const profesionalesController = new ProfesionalesController();