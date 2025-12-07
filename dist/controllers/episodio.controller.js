// src/controllers/episodio.controller.ts
import { EpisodioService } from '../services/episodio.service.js';
// Instanciamos el servicio
const episodioService = new EpisodioService();
/**
 * @route GET /api/episodios
 * @description Obtiene todos los episodios con filtros y paginación.
 */
export async function getAllEpisodios(req, res, next) {
    try {
        // Asumimos que req.query ya fue validado y tipado por el middleware Zod
        const filters = req.query; // Usamos 'any' hasta definir SearchEpisodiosQuery
        const result = await episodioService.getAll(filters);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
}
/**
 * @route GET /api/episodios/:id
 * @description Obtiene un episodio por ID.
 */
export async function getEpisodioById(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id))
            return res.status(400).json({ message: 'ID de episodio no válido' });
        const episodio = await episodioService.getById(id);
        res.status(200).json(episodio);
    }
    catch (error) {
        next(error);
    }
}
/**
 * @route POST /api/episodios
 * @description Crea un nuevo episodio.
 */
export async function createEpisodio(req, res, next) {
    try {
        const data = req.body;
        const nuevoEpisodio = await episodioService.create(data);
        res.status(201).json(nuevoEpisodio);
    }
    catch (error) {
        next(error);
    }
}
/**
 * @route PUT /api/episodios/:id
 * @description Actualiza un episodio existente.
 */
export async function updateEpisodio(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id))
            return res.status(400).json({ message: 'ID de episodio no válido' });
        const data = req.body;
        const episodioActualizado = await episodioService.update(id, data);
        res.status(200).json(episodioActualizado);
    }
    catch (error) {
        next(error);
    }
}
/**
 * @route PATCH /api/episodios/:id/cerrar
 * @description Cierra un episodio de atención.
 */
export async function cerrarEpisodio(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id))
            return res.status(400).json({ message: 'ID de episodio no válido' });
        // El body ya fue validado por Zod (solo contiene observacionesCierre opcional)
        const { observacionesCierre } = req.body;
        const episodioCerrado = await episodioService.cerrar(id, observacionesCierre);
        res.status(200).json(episodioCerrado);
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=episodio.controller.js.map