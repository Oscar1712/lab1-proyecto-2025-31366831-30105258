import { Router } from 'express';
import {
    getAllEpisodios,
    getEpisodioById,
    createEpisodio,
    updateEpisodio,
    cerrarEpisodio
} from '../controllers/episodio.controller.js';

// 🟢 Importamos el middleware de validación unificado
import { validate } from '../middlewares/validator.middleware.js'; 

// Importamos los esquemas de validación
import {
    createEpisodioSchema,
    updateEpisodioSchema,
    cerrarEpisodioSchema,
    searchEpisodiosSchema // Asumiendo que ya has creado este esquema de búsqueda
} from '../schemas/episodio.schema.js';

const router = Router();

/**
 * Rutas para la gestión de Episodios de Atención
 * Base: /api/episodios
 */

// GET /api/episodios?filtros...
router.get(
    '/', 
    validate(searchEpisodiosSchema), // Validamos Query Params
    getAllEpisodios
); 

// GET /api/episodios/:id
router.get('/:id', getEpisodioById);

// POST /api/episodios
router.post(
    '/',
    validate(createEpisodioSchema), // Validamos Body
    createEpisodio
);

// PUT /api/episodios/:id
router.put(
    '/:id',
    validate(updateEpisodioSchema), // Validamos Params y Body
    updateEpisodio
);

// PATCH /api/episodios/:id/cerrar (Acción de negocio específica)
router.patch(
    '/:id/cerrar',
    validate(cerrarEpisodioSchema), // Validamos Params y Body de cierre
    cerrarEpisodio
);


export default router;