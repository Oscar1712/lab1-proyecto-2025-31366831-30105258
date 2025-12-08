// src/routes/consentimientos.routes.ts
import { Router } from 'express';
import { z } from 'zod';
import { createConsentimiento, deleteConsentimiento, getAllConsentimientosByPersona, getConsentimientoById, updateConsentimiento, } from '../controllers/consentimientos.controller.js';
import { createConsentimientoSchema, updateConsentimientoSchema } from '../schemas/consentimiento.schema.js';
import { idParamSchema } from '../schemas/base.schema.js';
// Importaciones de Middlewares
import { authMiddleware as checkAuth } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validator.middleware.js';
const router = Router();
// ----------------------------------------------------------------------
// RUTAS DE CONSENTIMIENTOS: /api/consentimientos
// ----------------------------------------------------------------------
// 1. Obtener todos los consentimientos de una persona específica
// RUTA: GET /api/consentimientos/persona/:personaId
router.get('/persona/:personaId', checkAuth, 
// Validamos que el ID de la persona sea un número positivo
validate(z.object({ params: z.object({ personaId: idParamSchema }) })), getAllConsentimientosByPersona);
// 2. Crear nuevo consentimiento
// RUTA: POST /api/consentimientos
router.post('/', checkAuth, validate(createConsentimientoSchema), createConsentimiento);
// 3. Obtener consentimiento por ID
// RUTA: GET /api/consentimientos/:id
router.get('/:id', checkAuth, validate(z.object({ params: z.object({ id: idParamSchema }) })), getConsentimientoById);
// 4. Actualizar consentimiento por ID
// RUTA: PUT /api/consentimientos/:id
router.put('/:id', checkAuth, validate(updateConsentimientoSchema), // Valida el ID y el cuerpo parcial
updateConsentimiento);
// 5. Eliminar consentimiento por ID
// RUTA: DELETE /api/consentimientos/:id
router.delete('/:id', checkAuth, validate(z.object({ params: z.object({ id: idParamSchema }) })), deleteConsentimiento);
export default router;
