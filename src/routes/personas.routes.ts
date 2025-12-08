import { Router } from 'express';
import { PersonasAtendidasController } from '../controllers/personasAtendidas.controller.js';
import { validate } from '../middlewares/validator.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js'; // Falta
import { 
  createPersonaSchema, 
  updatePersonaSchema,
  getPersonaSchema,
  searchPersonasSchema 
} from '../schemas/persona.schema.js';

const router = Router();
const controller = new PersonasAtendidasController();

router.get(
  '/',
  authMiddleware,
  validate(searchPersonasSchema),
  controller.getAll
);

router.get(
  '/:id',
  authMiddleware,
  validate(getPersonaSchema),
  controller.getById
);

router.post(
  '/',
  authMiddleware,
  validate(createPersonaSchema),
  controller.create
);

router.put(
  '/:id',
  authMiddleware,
  validate(updatePersonaSchema),
  controller.update
);

router.delete(
  '/:id',
  authMiddleware,
  validate(getPersonaSchema),
  controller.delete
);

router.get(
  '/:id/estadisticas',
  authMiddleware,
  validate(getPersonaSchema),
  controller.getEstadisticas
);

export default router;