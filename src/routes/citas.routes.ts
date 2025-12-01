// src/routes/citas.routes.ts

import { Router } from 'express';
import { citasController } from '../controllers/citas.controller'; 
import { authMiddleware } from '../middlewares/auth.middleware'; 
import { roleMiddleware } from '../middlewares/role.middleware'; 

const router = Router();

// 1. Aplica el authMiddleware a todas las rutas que siguen
router.use(authMiddleware);

// GET /api/citas: Obtener citas del usuario autenticado o usar filtros
router.get('/', citasController.getCitas);

// POST /api/citas: Crear una nueva cita
router.post(
    '/',
    // Usar roleMiddleware aquí es buena práctica si solo ciertos roles pueden crear citas
    roleMiddleware(['ADMIN', 'ASISTENTE']), 
    citasController.createCita
);

// --- Rutas para Operaciones Específicas ---

// PUT /api/citas/:id/cancelar: Cambia el estado a "cancelada"
router.put('/:id/cancelar', citasController.cancelCita);

// PUT /api/citas/:id/reprogramar: Actualiza la cita
router.put('/:id/reprogramar', citasController.rescheduleCita);

// PUT /api/citas/:id/confirmar: Confirmación
router.put('/:id/confirmar', citasController.confirmCita);

// PUT /api/citas/:id/cumplir (Solo para PROFESIONAL): Marca como cumplida
router.put('/:id/cumplir', roleMiddleware(['PROFESIONAL']), citasController.completeCita);


export default router;