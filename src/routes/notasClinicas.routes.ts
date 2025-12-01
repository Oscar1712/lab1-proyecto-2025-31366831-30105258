// ============================================
// ARCHIVO: src/routes/notasClinicas.routes.ts
// ============================================
/**
 * @swagger
 * tags:
 *   name: Notas Clínicas
 */
import { Router } from 'express';
import { NotasClinicasController } from '../controllers/notasClinicas.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();
const controller = new NotasClinicasController();

router.use(authMiddleware);

router.get('/', (req, res) => controller.getAll(req, res));
router.get('/:id', (req, res) => controller.getById(req, res));
router.post('/', (req, res) => controller.create(req, res));
router.put('/:id', (req, res) => controller.update(req, res));
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router;

