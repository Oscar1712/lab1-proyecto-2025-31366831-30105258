// ============================================
// ARCHIVO: src/routes/personasAtendidas.routes.ts
// ============================================
/**
 * @swagger
 * tags:
 *   name: Personas Atendidas
 */
import { Router } from 'express';
import { PersonasAtendidasController } from '../controllers/personasAtendidas.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();
const controller = new PersonasAtendidasController();

router.use(authMiddleware);

/**
 * @swagger
 * /api/personas-atendidas:
 *   get:
 *     tags: [Personas Atendidas]
 *     security:
 *       - bearerAuth: []
 */
router.get('/', (req, res) => controller.getAll(req, res));
router.get('/:id', (req, res) => controller.getById(req, res));
router.post('/', (req, res) => controller.create(req, res));
router.put('/:id', (req, res) => controller.update(req, res));
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router;