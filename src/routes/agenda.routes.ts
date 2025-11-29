// routes/agenda.routes.ts

import { Router } from 'express';
import { agendaController } from '../controllers/agenda.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';

const router = Router();

// --- Rutas de Consulta de Disponibilidad (Públicas o con autenticación simple) ---

// GET /api/agenda/disponibilidad: Consultar bloques abiertos por profesional/unidad/rango (esencial para la reserva de citas)
router.get('/disponibilidad', agendaController.getAvailability); 


// --- Rutas de Gestión de Bloques (Protegidas) ---

router.use(authMiddleware);
router.use(roleMiddleware(['ADMIN', 'PROFESIONAL']));

// POST /api/agenda/bloques: Crear un nuevo bloque de agenda
router.post('/bloques', agendaController.createAgendaBlock); 

// PUT /api/agenda/bloques/:id/status: Actualizar el estado de un bloque (cerrar, abrir)
// Se podría implementar una ruta más específica para actualizar el estado, ya que es la operación más común.
router.put('/bloques/:id', agendaController.updateAgendaBlock); 

// DELETE /api/agenda/bloques/:id: Eliminar/cerrar un bloque permanentemente
router.delete('/bloques/:id', agendaController.deleteAgendaBlock); 

export default router;