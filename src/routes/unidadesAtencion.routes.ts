// ============================================
// ARCHIVO: src/routes/unidadesAtencion.routes.ts
// ============================================
/**
 * @swagger
 * tags:
 *   name: Unidades de Atención
 */
import { Router } from 'express';
import { UnidadesAtencionController } from '../controllers/unidadesAtencion.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();
const controller = new UnidadesAtencionController();

router.use(authMiddleware);

router.get('/', (req, res) => controller.getAll(req, res));
router.get('/:id', (req, res) => controller.getById(req, res));
router.post('/', (req, res) => controller.create(req, res));
router.put('/:id', (req, res) => controller.update(req, res));
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router;
