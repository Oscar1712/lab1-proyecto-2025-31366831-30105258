// routes/personas.routes.ts
import { Router } from 'express';
import { personasController } from '../controllers/personas.controller';
import { authMiddleware } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';
// import { validatePersona } from '../middleware/validation.middleware'; // Asumimos un validador

const router = Router();

// CRUD solo para personal autorizado (ADMIN, ASISTENTE)
router.use(authMiddleware);
router.use(roleMiddleware(['ADMIN', 'ASISTENTE']));

router.get('/', personasController.getAllPersonas);
router.get('/:id', personasController.getPersonaById);
router.post('/', personasController.createPersona); // Añadir validatePersona
router.put('/:id', personasController.updatePersona); // Añadir validatePersona
router.delete('/:id', personasController.deletePersona);

export default router;