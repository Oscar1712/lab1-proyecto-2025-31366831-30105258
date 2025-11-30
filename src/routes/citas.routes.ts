// routes/citas.routes.ts

import { Router } from 'express';
import { citasController } from '../controllers/citas.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';

const router = Router();

// --- Rutas Protegidas por Autenticación (Consulta/Creación por Paciente o Asistente) ---

router.use(authMiddleware);

// GET /api/citas: Obtener citas del usuario autenticado o usar filtros si es ADMIN/ASISTENTE
router.get('/', citasController.getCitas);

// POST /api/citas: Crear una nueva cita
// Aquí se puede usar un middleware adicional para verificar que el usuario autenticado
// solo pueda crear citas para sí mismo (o un ADMIN para cualquiera).
router.post('/', citasController.createCita);

// routes/citas.routes.ts (Ejemplo de uso)

router.post(
    '/',
    authMiddleware,                         // 1. Verifica el Token
    roleMiddleware(['ADMIN', 'ASISTENTE']), // 2. Verifica el Rol
    citasController.createCita
);

// --- Rutas para Operaciones Específicas ---

// PUT /api/citas/:id/cancelar: Cambia el estado a "cancelada"
router.put('/:id/cancelar', citasController.cancelCita);

// PUT /api/citas/:id/reprogramar: Actualiza la cita a un nuevo bloque (requiere lógica transaccional)
router.put('/:id/reprogramar', citasController.rescheduleCita);

// PUT /api/citas/:id/confirmar: Confirmación (usualmente por el paciente o asistente)
router.put('/:id/confirmar', citasController.confirmCita);

// PUT /api/citas/:id/cumplir (Solo para PROFESIONAL): Marca como cumplida y abre el Episodio de Atención
router.put('/:id/cumplir', roleMiddleware(['PROFESIONAL']), citasController.completeCita);


export default router;