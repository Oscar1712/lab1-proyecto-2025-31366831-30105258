// routes/consentimientos.routes.ts

import { Router } from 'express';
import { consentimientosController } from '../controllers/consentimientos.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';

const router = Router();

router.use(authMiddleware);
router.use(roleMiddleware(['ADMIN', 'PROFESIONAL'])); // Solo estos roles acceden

// GET /api/consentimientos/episodio/:episodioId
router.get('/episodio/:episodioId', consentimientosController.getConsentimientosByEpisodio);

// GET /api/consentimientos/:id
router.get('/:id', consentimientosController.getConsentimientoById);

// POST /api/consentimientos: Registrar nuevo consentimiento firmado
router.post('/', consentimientosController.createConsentimiento);

// PUT /api/consentimientos/:id/anular: Anular un consentimiento
router.put('/:id/anular', consentimientosController.invalidateConsentimiento);

export default router;