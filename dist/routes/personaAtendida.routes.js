import { Router } from 'express';
import { PersonasAtendidasController } from '../controllers/personasAtendidas.controller.js';
import { validate } from '../middlewares/validator.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { createPersonaAtendidaSchema, updatePersonaAtendidaSchema, getByIdSchema } from '../schemas/personasAtendidas.schema.js';
const router = Router();
const controller = new PersonasAtendidasController();
// Obtener todas las personas atendidas (con filtros opcionales)
router.get('/', authMiddleware, controller.getAll);
// Obtener una persona atendida por ID
router.get('/:id', authMiddleware, validate(getByIdSchema), controller.getById);
// Crear nueva persona atendida
router.post('/', authMiddleware, validate(createPersonaAtendidaSchema), controller.create);
// Actualizar persona atendida
router.put('/:id', authMiddleware, validate(updatePersonaAtendidaSchema), controller.update);
// Eliminar (desactivar) persona atendida
router.delete('/:id', authMiddleware, validate(getByIdSchema), controller.delete);
// Endpoint extra: estadísticas de una persona atendida
router.get('/:id/estadisticas', authMiddleware, validate(getByIdSchema), controller.getEstadisticas);
export default router;
//# sourceMappingURL=personaAtendida.routes.js.map