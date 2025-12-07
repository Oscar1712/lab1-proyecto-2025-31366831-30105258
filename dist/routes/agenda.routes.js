import { Router } from 'express';
import { getAllBloques, getBloqueById, createBloque, updateBloque, deleteBloque } from '../controllers/agenda.controller.js';
// ⚠️ PLACEHOLDERS: Reemplaza estos imports con tus funciones reales de middleware de validación ⚠️
// Asumimos que tienes archivos de validación (ej: schemas/bloqueAgenda.validation.ts)
// y funciones de middleware (ej: validateSchema)
const validateSchema = (schema) => (req, res, next) => next(); // Reemplazar con lógica de validación real
const BloqueAgendaInput = {}; // Reemplazar con tu esquema de creación
const BloqueAgendaUpdateInput = {}; // Reemplazar con tu esquema de actualización
// ------------------------------------------------------------------------------------------
const router = Router();
/**
 * Rutas para la gestión de Bloques de Agenda
 * Base: /api/agenda
 */
// GET /api/agenda?profesionalId=X&fechaInicio=Y
router.get('/', getAllBloques);
// GET /api/agenda/:id
router.get('/:id', getBloqueById);
// POST /api/agenda
router.post('/', validateSchema(BloqueAgendaInput), // Middleware de validación para la creación
createBloque);
// PUT /api/agenda/:id
router.put('/:id', validateSchema(BloqueAgendaUpdateInput), // Middleware de validación para la actualización
updateBloque);
// DELETE /api/agenda/:id
router.delete('/:id', deleteBloque);
export default router;
//# sourceMappingURL=agenda.routes.js.map