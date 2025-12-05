import { Router } from 'express';
import { CitasController } from '../controllers/citas.controller.js';
import { validate } from '../middlewares/validator.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { 
  createCitaSchema, 
  updateCitaSchema,
  agendaProfesionalSchema,
  confirmarCitaSchema 
} from '../schemas/cita.schema.js';

const router = Router();
const controller = new CitasController();

router.post(
  '/',
  authMiddleware,
  validate(createCitaSchema),
  controller.create
);

router.put(
  '/:id',
  authMiddleware,
  validate(updateCitaSchema),
  controller.update
);

/**
 * @swagger
 * /api/citas/profesional/{profesionalId}:
 *   get:
 *     summary: Obtener citas por profesional
 *     tags: [Citas]
 */
router.get(
  '/profesional/:profesionalId',
  validate(agendaProfesionalSchema),
  controller.getByProfesional
);

export default router;