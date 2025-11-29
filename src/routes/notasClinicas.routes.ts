// routes/notasClinicas.routes.ts

import { Router } from 'express';
import { notasClinicasController } from '../controllers/notasClinicas.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';

const router = Router();

router.use(authMiddleware);
router.use(roleMiddleware(['ADMIN', 'PROFESIONAL'])); // Solo estos roles acceden

// GET /api/notas/episodio/:episodioId: Obtener todas las notas de un episodio
router.get('/episodio/:episodioId', notasClinicasController.getNotasByEpisodio);

// GET /api/notas/:id: Obtener una nota específica
router.get('/:id', notasClinicasController.getNotaById);

// POST /api/notas: Crear una nueva nota
router.post('/', notasClinicasController.createNota);

// PUT /api/notas/:id: Actualizar una nota
router.put('/:id', notasClinicasController.updateNota);

export default router;