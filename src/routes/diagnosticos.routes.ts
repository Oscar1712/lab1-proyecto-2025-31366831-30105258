// routes/diagnosticos.routes.ts

import { Router } from 'express';
import { diagnosticosController } from '../controllers/diagnosticos.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';

const router = Router();

router.use(authMiddleware);
router.use(roleMiddleware(['ADMIN', 'PROFESIONAL'])); // Solo estos roles acceden

// GET /api/diagnosticos/episodio/:episodioId
router.get('/episodio/:episodioId', diagnosticosController.getDiagnosticosByEpisodio);

// GET /api/diagnosticos/:id
router.get('/:id', diagnosticosController.getDiagnosticoById);

// POST /api/diagnosticos: Crear nuevo
router.post('/', diagnosticosController.createDiagnostico);

// DELETE /api/diagnosticos/:id: Desactivar (soft delete)
router.delete('/:id', diagnosticosController.deleteDiagnostico);

export default router;