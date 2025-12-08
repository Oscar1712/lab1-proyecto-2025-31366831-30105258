import { Router } from 'express';
// 🟢 NECESITAS ESTA IMPORTACIÓN PARA EL PUNTO 2
import { z } from 'zod';
import { createNotaClinica, deleteNotaClinica, getAllNotasClinicas, getNotaClinicaById, updateNotaClinica, } from '../controllers/notasClinicas.controller.js';
import { createNotaClinicaSchema, updateNotaClinicaSchema, searchNotasClinicasSchema } from '../schemas/notaClinica.schema.js';
import { idParamSchema } from '../schemas/base.schema.js';
// Asumiendo que tienes middlewares para autenticación y validación
// 🟢 CORRECCIÓN 1: Importar el nombre de la función REALMENTE exportada
import { authMiddleware as checkAuth } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validator.middleware.js';
const router = Router();
// ----------------------------------------------------------------------
// RUTAS DE NOTAS CLÍNICAS: /api/notas-clinicas
// ----------------------------------------------------------------------
// 1. Obtener todas las notas (con filtros de búsqueda y paginación)
router.get('/', checkAuth, validate(searchNotasClinicasSchema), getAllNotasClinicas);
// 2. Crear nueva nota clínica
router.post('/', checkAuth, validate(createNotaClinicaSchema), createNotaClinica);
// 3. Obtener nota por ID
router.get('/:id', checkAuth, 
// 🟢 CORRECCIÓN 2: Usar z.object({}) para crear el esquema Zod que 'validate' espera
validate(z.object({ params: z.object({ id: idParamSchema }) })), getNotaClinicaById);
// 4. Actualizar nota por ID
router.put('/:id', checkAuth, validate(updateNotaClinicaSchema), updateNotaClinica);
// 5. Eliminar nota por ID
// 🟢 CORRECCIÓN 3 y CORRECCIÓN 2: Sintaxis de Zod y cierre de la función router.delete()
router.delete('/:id', checkAuth, validate(z.object({ params: z.object({ id: idParamSchema }) })), deleteNotaClinica);
export default router;
//# sourceMappingURL=notasClinicas.routes.js.map