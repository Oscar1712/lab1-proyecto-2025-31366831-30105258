// routes/auth.routes.ts

import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
// import { validateLogin, validateRegister } from '../middleware/validation.middleware'; // Middlewares de validación

const router = Router();

// POST /api/auth/login
// Esta ruta es pública (no requiere token previo)
router.post('/login', /* validateLogin, */ authController.loginUser);

// POST /api/auth/register
// Podría ser pública o solo accesible con un token de 'ADMIN'
router.post('/register', /* validateRegister, */ authController.registerUser);

export default router;