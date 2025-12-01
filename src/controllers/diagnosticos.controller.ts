// src/controllers/diagnosticos.controller.ts

import { Request, Response } from 'express';
// ⚠️ SIN .ts al final
import { diagnosticosService } from '../services/diagnosticos.service'; 

class DiagnosticosController {
    async createDiagnostico(req: Request, res: Response) {
        try {
            const diagnostico = await diagnosticosService.createDiagnostico(req.body);
            res.status(201).json(diagnostico);
        } catch (error) {
            res.status(400).send({ message: 'ERROR_CREAR_DIAGNOSTICO', error });
        }
    }

    async getDiagnosticoById(req: Request, res: Response) {
        // 🛑 CORRECCIÓN DE TIPADO TS2345 (Ejemplo para línea 18)
        const { id } = req.params; 

        if (!id) {
            return res.status(400).send({ message: 'ERROR: El ID del diagnóstico es requerido.' });
        }
        
        try {
            const diagnostico = await diagnosticosService.getDiagnosticoById(id);
            
            if (!diagnostico) {
                return res.status(404).send({ message: 'ERROR: Diagnóstico no encontrado.' });
            }
            
            res.status(200).json(diagnostico);
        } catch (error) {
            res.status(500).send({ message: 'ERROR_OBTENER_DIAGNOSTICO', error });
        }
    }
    
    // ... otros métodos del controlador de diagnósticos
}

export const diagnosticosController = new DiagnosticosController();