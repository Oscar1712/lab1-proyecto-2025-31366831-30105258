// src/routes/agenda.routes.ts
import { Router } from 'express';
import { agendaController } from '../controllers/agenda.controller'; 
import { authMiddleware } from '../middlewares/auth.middleware';
import { roleMiddleware } from '../middlewares/role.middleware';

const router = Router();

// Consulta pública (para que el paciente vea disponibilidad)
router.get('/disponibilidad', agendaController.getAvailability);

// CRUD de bloques para el ADMIN/PROFESIONAL
router.post(
    '/bloques', 
    authMiddleware, 
    roleMiddleware(['ADMIN', 'PROFESIONAL']), 
    agendaController.createBloque
);

export default router;