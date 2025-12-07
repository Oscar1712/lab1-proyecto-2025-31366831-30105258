import { Request, Response } from 'express';
import { NotaClinicaService } from '../services/notasClinicas.service.js';
import { 
    createNotaClinicaSchema, 
    updateNotaClinicaSchema, 
    searchNotasClinicasSchema 
} from '../schemas/notaClinica.schema.js';
import { idParamSchema } from '../schemas/base.schema.js'; // Para la validación del ID
import { handleHttp } from '../utils/error.handle.js'; // Asumiendo que tienes una utilidad de manejo de errores

// Instancia del servicio
const notaClinicaService = new NotaClinicaService();

/**
 * Obtiene todas las notas clínicas con filtros y paginación
 * RUTA: GET /api/notas-clinicas
 */
export async function getAllNotasClinicas(req: Request, res: Response): Promise<void> {
    try {
        // Validación de los parámetros de búsqueda (query)
        const validatedQuery = searchNotasClinicasSchema.parse({ query: req.query });
        
        // El query validado es opcional, por eso usamos '|| {}'
        const filters = validatedQuery.query || {}; 

        const result = await notaClinicaService.getAll(filters);
        res.status(200).json(result);
    } catch (error) {
        handleHttp(res, 'ERROR_GETTING_NOTAS_CLINICAS', error);
    }
}

/**
 * Obtiene una nota clínica por ID
 * RUTA: GET /api/notas-clinicas/:id
 */
export async function getNotaClinicaById(req: Request, res: Response): Promise<void> {
    try {
        // Validación del parámetro ID (params)
        const id = idParamSchema.parse(req.params.id);
        
        const nota = await notaClinicaService.getById(id);
        res.status(200).json(nota);
    } catch (error) {
        handleHttp(res, 'ERROR_GETTING_NOTA_CLINICA', error);
    }
}

/**
 * Crea una nueva nota clínica
 * RUTA: POST /api/notas-clinicas
 */
export async function createNotaClinica(req: Request, res: Response): Promise<void> {
    try {
        // Validación del cuerpo (body)
        const validatedBody = createNotaClinicaSchema.parse({ body: req.body });
        
        const nuevaNota = await notaClinicaService.create(validatedBody.body);
        res.status(201).json(nuevaNota);
    } catch (error) {
        handleHttp(res, 'ERROR_CREATING_NOTA_CLINICA', error);
    }
}

/**
 * Actualiza una nota clínica existente
 * RUTA: PUT /api/notas-clinicas/:id
 */
export async function updateNotaClinica(req: Request, res: Response): Promise<void> {
    try {
        // Validación de params y body
        const validated = updateNotaClinicaSchema.parse({ 
            params: req.params, 
            body: req.body 
        });
        
        const id = validated.params.id;
        const data = validated.body;

        const notaActualizada = await notaClinicaService.update(id, data);
        res.status(200).json(notaActualizada);
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATING_NOTA_CLINICA', error);
    }
}

/**
 * Elimina una nota clínica
 * RUTA: DELETE /api/notas-clinicas/:id
 */
export async function deleteNotaClinica(req: Request, res: Response): Promise<void> {
    try {
        // Validación del parámetro ID (params)
        const id = idParamSchema.parse(req.params.id);
        
        const notaEliminada = await notaClinicaService.delete(id);
        res.status(200).json({ message: `Nota clínica ID ${id} eliminada`, data: notaEliminada });
    } catch (error) {
        handleHttp(res, 'ERROR_DELETING_NOTA_CLINICA', error);
    }
}