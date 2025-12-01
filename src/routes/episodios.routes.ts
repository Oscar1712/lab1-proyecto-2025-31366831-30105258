// routes/episodios.routes.ts

import { Router } from 'express';
import { episodiosController } from '../controllers/episodios.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { roleMiddleware } from '../middlewares/role.middleware';

const router = Router();

router.use(authMiddleware);

// GET /api/episodios: Listar todos (Admin/Profesional)
router.get('/', roleMiddleware(['ADMIN', 'PROFESIONAL']), episodiosController.getAllEpisodios); 

// GET /api/episodios/:id: Ver un episodio completo
router.get('/:id', roleMiddleware(['ADMIN', 'PROFESIONAL']), episodiosController.getEpisodioById);

// POST /api/episodios: Abrir un nuevo episodio
router.post('/', roleMiddleware(['ADMIN', 'PROFESIONAL']), episodiosController.createEpisodio);

// PUT /api/episodios/:id/close: Cerrar el episodio
router.put('/:id/close', roleMiddleware(['PROFESIONAL']), episodiosController.closeEpisodio);

export default router;