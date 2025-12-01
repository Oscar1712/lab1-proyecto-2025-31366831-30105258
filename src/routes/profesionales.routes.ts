// routes/profesionales.routes.ts

import { Router } from 'express';
import { profesionalController } from '../controllers/profesionales.controller';
import { authMiddleware } from '../middleware/auth.middleware'; // Middleware para verificar JWT
import { roleMiddleware } from '../middleware/role.middleware'; // Middleware de control de roles
import { validateProfesional } from '../middleware/validation.middleware'; // Middlewares de Express Validator

const router = Router();

// Rutas públicas (ej. ver listado de profesionales para reservar cita)
router.get('/', profesionalController.getAllProfesionales);
router.get('/:id', profesionalController.getProfesionalById);


// Rutas protegidas (ej. solo accesibles por un administrador)
router.post(
    '/',
    authMiddleware, // 1. Verificar si hay un token válido
    roleMiddleware(['ADMIN']), // 2. Verificar si el usuario es ADMINISTRADOR
    validateProfesional, // 3. Validar y sanear el body de la petición
    profesionalController.createProfesional
);

router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware(['ADMIN']),
    profesionalController.deleteProfesional
);

export default router;