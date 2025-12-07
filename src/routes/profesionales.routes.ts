// src/routes/profesionales.routes.ts
import { Router } from 'express';
import { ProfesionalesController } from '../controllers/profesionales.controller.js';
import { validate } from '../middlewares/validator.middleware.js';
import { createProfesionalSchema, updateProfesionalSchema } from '../schemas/profesional.schema.js';
// import { authMiddleware } from '../middlewares/auth.middleware'; // si lo usas

const router = Router();
const controller = new ProfesionalesController();

router.get('/', controller.getAll.bind(controller));
router.get('/:id', controller.getById.bind(controller));

// si no tienes authMiddleware quitalo temporalmente.
// validate espera schemas con { body, query, params } (por eso envolvimos los schemas)
router.post('/', validate(createProfesionalSchema), /*authMiddleware,*/ controller.create.bind(controller));
router.put('/:id', validate(updateProfesionalSchema), /*authMiddleware,*/ controller.update.bind(controller));
router.delete('/:id', /*authMiddleware,*/ controller.delete.bind(controller));

export default router;