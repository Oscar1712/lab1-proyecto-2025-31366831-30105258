// src/controllers/consentimientos.controller.ts
import { ConsentimientoService } from '../services/consentimientos.service.js';
import { createConsentimientoSchema, updateConsentimientoSchema } from '../schemas/consentimiento.schema.js';
import { idParamSchema } from '../schemas/base.schema.js';
import { handleHttp } from '../utils/error.handle.js';
const consentimientoService = new ConsentimientoService();
/**
 * Obtiene todos los consentimientos asociados a una Persona.
 * RUTA: GET /api/consentimientos/persona/:personaId
 */
export async function getAllConsentimientosByPersona(req, res) {
    try {
        // Validación del ID de la persona desde los parámetros de la ruta
        const personaId = idParamSchema.parse(req.params.personaId);
        const result = await consentimientoService.getAllByPersona(personaId);
        res.status(200).json(result);
    }
    catch (error) {
        handleHttp(res, 'ERROR_GETTING_CONSENTIMIENTOS_BY_PERSONA', error);
    }
}
/**
 * Obtiene un consentimiento específico por su ID.
 * RUTA: GET /api/consentimientos/:id
 */
export async function getConsentimientoById(req, res) {
    try {
        // Validación del ID del consentimiento
        const id = idParamSchema.parse(req.params.id);
        const consentimiento = await consentimientoService.getById(id);
        res.status(200).json(consentimiento);
    }
    catch (error) {
        handleHttp(res, 'ERROR_GETTING_CONSENTIMIENTO', error);
    }
}
/**
 * Crea un nuevo consentimiento.
 * RUTA: POST /api/consentimientos
 */
export async function createConsentimiento(req, res) {
    try {
        // Validación del cuerpo (body)
        const validatedBody = createConsentimientoSchema.parse({ body: req.body });
        const nuevoConsentimiento = await consentimientoService.create(validatedBody.body);
        res.status(201).json(nuevoConsentimiento);
    }
    catch (error) {
        handleHttp(res, 'ERROR_CREATING_CONSENTIMIENTO', error);
    }
}
/**
 * Actualiza un consentimiento existente.
 * RUTA: PUT /api/consentimientos/:id
 */
export async function updateConsentimiento(req, res) {
    try {
        // Validación de params y body
        const validated = updateConsentimientoSchema.parse({
            params: req.params,
            body: req.body
        });
        const id = validated.params.id;
        const data = validated.body;
        const consentimientoActualizado = await consentimientoService.update(id, data);
        res.status(200).json(consentimientoActualizado);
    }
    catch (error) {
        handleHttp(res, 'ERROR_UPDATING_CONSENTIMIENTO', error);
    }
}
/**
 * Elimina un consentimiento.
 * RUTA: DELETE /api/consentimientos/:id
 */
export async function deleteConsentimiento(req, res) {
    try {
        // Validación del ID del consentimiento
        const id = idParamSchema.parse(req.params.id);
        const consentimientoEliminado = await consentimientoService.delete(id);
        res.status(200).json({ message: `Consentimiento ID ${id} eliminado`, data: consentimientoEliminado });
    }
    catch (error) {
        handleHttp(res, 'ERROR_DELETING_CONSENTIMIENTO', error);
    }
}
