// ============================================
// ARCHIVO: src/routes/profesionales.routes.ts
// ============================================
/**
 * @swagger
 * tags:
 *   name: Profesionales
 */
import { Router } from 'express';
import { ProfesionalesController } from '../controllers/profesionales.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();
const controller = new ProfesionalesController();

router.use(authMiddleware);

router.get('/', (req, res) => controller.getAll(req, res));
router.get('/:id', (req, res) => controller.getById(req, res));
router.post('/', (req, res) => controller.create(req, res));
router.put('/:id', (req, res) => controller.update(req, res));
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router;
