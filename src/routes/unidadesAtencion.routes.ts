// routes/unidades.routes.ts
import { Router } from 'express';
import { unidadesController } from '../controllers/unidades.controller';
// ... Middlewares

const router = Router();
// CRUD protegido
router.get('/', unidadesController.getAllUnidades);
router.post('/', unidadesController.createUnidad);

export default router;


// routes/agenda.routes.ts
import { Router } from 'express';
import { agendaController } from '../controllers/agenda.controller';

const router = Router();
// Consulta pública (para que el paciente vea disponibilidad)
router.get('/disponibilidad', agendaController.getAvailability);

// CRUD de bloques para el ADMIN/PROFESIONAL
// router.post('/bloques', authMiddleware, roleMiddleware(['ADMIN', 'PROFESIONAL']), agendaController.createAgendaBlock); 

export default router;