// ============================================
// ARCHIVO: src/routes/consentimientos.routes.ts
// ============================================
/**
 * @swagger
 * tags:
 *   name: Consentimientos
 */
import { Router } from 'express';
import { ConsentimientosController } from '../controllers/consentimientos.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();
const controller = new ConsentimientosController();

router.use(authMiddleware);

router.get('/', (req, res) => controller.getAll(req, res));
router.get('/:id', (req, res) => controller.getById(req, res));
router.post('/', (req, res) => controller.create(req, res));
router.put('/:id', (req, res) => controller.update(req, res));
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router;