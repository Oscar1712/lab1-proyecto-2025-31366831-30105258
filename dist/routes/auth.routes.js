import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
const router = Router();
const authController = new AuthController();
// Rutas públicas
router.post('/register', authController.register.bind(authController));
router.post('/login', authController.login.bind(authController));
// Rutas protegidas (requieren token válido)
router.get('/me', authMiddleware, authController.me.bind(authController));
router.post('/refresh', authMiddleware, authController.refreshToken.bind(authController));
router.post('/logout', authMiddleware, authController.logout.bind(authController));
export default router;
//# sourceMappingURL=auth.routes.js.map