import { Router } from 'express';
import { z } from 'zod';
import { createDiagnostico, deleteDiagnostico, getAllDiagnosticosByEpisodio, getDiagnosticoById, updateDiagnostico, } from '../controllers/diagnosticos.controller.js';
import { createDiagnosticoSchema, updateDiagnosticoSchema } from '../schemas/diagnostico.schema.js';
import { idParamSchema } from '../schemas/base.schema.js';
// Importaciones de Middlewares
import { authMiddleware as checkAuth } from '../middlewares/auth.middleware.js'; // Importación ajustada
import { validate } from '../middlewares/validator.middleware.js';
const router = Router();
// ----------------------------------------------------------------------
// RUTAS DE DIAGNÓSTICOS: /api/diagnosticos
// ----------------------------------------------------------------------
// 1. Obtener todos los diagnósticos de un episodio específico
// RUTA: GET /api/diagnosticos/episodio/:episodioId
router.get('/episodio/:episodioId', checkAuth, 
// Validamos que el ID del episodio sea un número positivo
validate(z.object({ params: z.object({ episodioId: idParamSchema }) })), getAllDiagnosticosByEpisodio);
// 2. Crear nuevo diagnóstico
// RUTA: POST /api/diagnosticos
router.post('/', checkAuth, validate(createDiagnosticoSchema), // Valida el cuerpo (body) que incluye episodioId, codigo, etc.
createDiagnostico);
// 3. Obtener diagnóstico por ID
// RUTA: GET /api/diagnosticos/:id
router.get('/:id', checkAuth, validate(z.object({ params: z.object({ id: idParamSchema }) })), getDiagnosticoById);
// 4. Actualizar diagnóstico por ID
// RUTA: PUT /api/diagnosticos/:id
router.put('/:id', checkAuth, validate(updateDiagnosticoSchema), // Valida tanto el ID del parámetro como el cuerpo parcial
updateDiagnostico);
// 5. Eliminar diagnóstico por ID
// RUTA: DELETE /api/diagnosticos/:id
router.delete('/:id', checkAuth, validate(z.object({ params: z.object({ id: idParamSchema }) })), deleteDiagnostico);
export default router;
