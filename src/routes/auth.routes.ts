// ============================================
// ARCHIVO: src/routes/auth.routes.ts
// ============================================
/**
 * @swagger
 * tags:
 *   name: Autenticación
 *   description: Endpoints de autenticación y autorización
 */
import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const router = Router();
const controller = new AuthController();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags: [Autenticación]
 *     summary: Registrar nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               rol:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado
 */
router.post('/register', (req, res) => controller.register(req, res));

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [Autenticación]
 *     summary: Iniciar sesión
 */
router.post('/login', (req, res) => controller.login(req, res));

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     tags: [Autenticación]
 *     summary: Obtener usuario actual
 *     security:
 *       - bearerAuth: []
 */
router.get('/me', authMiddleware, (req, res) => controller.me(req, res));

export default router;