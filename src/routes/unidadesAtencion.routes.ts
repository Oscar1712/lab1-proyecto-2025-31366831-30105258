import { Router } from 'express';
import { UnidadesAtencionController } from '../controllers/unidadesAtencion.controller.js';
import { validate } from '../middlewares/validator.middleware.js';
import {
  createUnidadSchema,
  updateUnidadSchema,
} from '../schemas/unidadesAtencion.schema.js';

const router = Router();
const controller = new UnidadesAtencionController();

// Obtener todas las unidades de atención
router.get('/', (req, res) => controller.getAll(req, res));

// Obtener una unidad de atención por ID
router.get('/:id', (req, res) => controller.getById(req, res));

// Crear una unidad de atención
router.post('/', validate(createUnidadSchema), (req, res) => controller.create(req, res));

// Actualizar una unidad de atención
router.put('/:id', validate(updateUnidadSchema), (req, res) => controller.update(req, res));

// Eliminar (desactivar) una unidad de atención
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router;