// src/routes/personasAtendidas.routes.ts
import { Router } from 'express';
import { PersonasAtendidasController } from '../controllers/personasAtendidas.controller.js';
import { validate } from '../middlewares/validator.middleware.js';
import { createPersonaAtendidaSchema, updatePersonaAtendidaSchema, getByIdSchema } from '../schemas/personaAtendida.schema.js';

const router = Router();
const controller = new PersonasAtendidasController();

router.get('/', controller.getAll);
router.get('/:id', validate(getByIdSchema), controller.getById);
router.post('/', validate(createPersonaAtendidaSchema), controller.create);
router.put('/:id', validate(updatePersonaAtendidaSchema), controller.update);
router.delete('/:id', validate(getByIdSchema), controller.delete);

export default router;