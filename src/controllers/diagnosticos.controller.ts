import { Request, Response } from 'express';
import { DiagnosticoService } from '../services/diagnosticos.service.js';
import { createDiagnosticoSchema, updateDiagnosticoSchema } from '../schemas/diagnostico.schema.js';
import { idParamSchema } from '../schemas/base.schema.js';
import { handleHttp } from '../utils/error.handle.js';

// Instancia del servicio
const diagnosticoService = new DiagnosticoService();

/**
 * Obtiene todos los diagnósticos asociados a un Episodio de Atención.
 * RUTA: GET /api/diagnosticos/episodio/:episodioId
 */
export async function getAllDiagnosticosByEpisodio(req: Request, res: Response): Promise<void> {
    try {
        // Validación del ID del episodio desde los parámetros de la ruta
        const episodioId = idParamSchema.parse(req.params.episodioId);
        
        const result = await diagnosticoService.getAllByEpisode(episodioId);
        res.status(200).json(result);
    } catch (error) {
        handleHttp(res, 'ERROR_GETTING_DIAGNOSTICOS_BY_EPISODE', error);
    }
}

/**
 * Obtiene un diagnóstico específico por su ID.
 * RUTA: GET /api/diagnosticos/:id
 */
export async function getDiagnosticoById(req: Request, res: Response): Promise<void> {
    try {
        // Validación del ID del diagnóstico
        const id = idParamSchema.parse(req.params.id);
        
        const diagnostico = await diagnosticoService.getById(id);
        res.status(200).json(diagnostico);
    } catch (error) {
        handleHttp(res, 'ERROR_GETTING_DIAGNOSTICO', error);
    }
}

/**
 * Crea un nuevo diagnóstico.
 * RUTA: POST /api/diagnosticos
 */
export async function createDiagnostico(req: Request, res: Response): Promise<void> {
    try {
        // Validación del cuerpo (body)
        const validatedBody = createDiagnosticoSchema.parse({ body: req.body });
        
        const nuevoDiagnostico = await diagnosticoService.create(validatedBody.body);
        res.status(201).json(nuevoDiagnostico);
    } catch (error) {
        handleHttp(res, 'ERROR_CREATING_DIAGNOSTICO', error);
    }
}

/**
 * Actualiza un diagnóstico existente.
 * RUTA: PUT /api/diagnosticos/:id
 */
export async function updateDiagnostico(req: Request, res: Response): Promise<void> {
    try {
        // Validación de params y body
        const validated = updateDiagnosticoSchema.parse({ 
            params: req.params, 
            body: req.body 
        });
        
        const id = validated.params.id;
        const data = validated.body;

        const diagnosticoActualizado = await diagnosticoService.update(id, data);
        res.status(200).json(diagnosticoActualizado);
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATING_DIAGNOSTICO', error);
    }
}

/**
 * Elimina un diagnóstico.
 * RUTA: DELETE /api/diagnosticos/:id
 */
export async function deleteDiagnostico(req: Request, res: Response): Promise<void> {
    try {
        // Validación del ID del diagnóstico
        const id = idParamSchema.parse(req.params.id);
        
        const diagnosticoEliminado = await diagnosticoService.delete(id);
        res.status(200).json({ message: `Diagnóstico ID ${id} eliminado`, data: diagnosticoEliminado });
    } catch (error) {
        handleHttp(res, 'ERROR_DELETING_DIAGNOSTICO', error);
    }
}