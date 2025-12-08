import { AgendaService } from '../services/agenda.service.js';
// Instanciamos el servicio
const agendaService = new AgendaService();
/**
 * @route GET /api/agenda
 * @description Obtiene todos los bloques de agenda con filtros y paginación.
 */
export async function getAllBloques(req, res, next) {
    try {
        // Los datos de req.query ya han sido validados y transformados por el middleware Zod
        // y coinciden con el tipo SearchBloquesQuery.
        const filters = req.query;
        // El servicio maneja directamente los filtros sin necesidad de re-parsear
        const result = await agendaService.getAll(filters);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
}
/**
 * @route GET /api/agenda/:id
 * @description Obtiene un bloque de agenda por ID.
 */
export async function getBloqueById(req, res, next) {
    try {
        // Asumimos que el ID ya fue validado en las rutas, pero siempre es bueno parsearlo
        const id = parseInt(req.params.id, 10);
        // Si la validación de la ruta falla, este if podría ser redundante si el middleware es estricto
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID de bloque no válido' });
        }
        const bloque = await agendaService.getById(id);
        res.status(200).json(bloque);
    }
    catch (error) {
        next(error);
    }
}
/**
 * @route POST /api/agenda
 * @description Crea un nuevo bloque de agenda.
 */
export async function createBloque(req, res, next) {
    try {
        // Los datos de req.body ya fueron validados por el middleware Zod
        const data = req.body;
        const nuevoBloque = await agendaService.create(data);
        res.status(201).json(nuevoBloque);
    }
    catch (error) {
        // El servicio lanza errores si hay solapamiento o datos inválidos, 
        // y NextFunction los pasará al manejador global de errores.
        next(error);
    }
}
/**
 * @route PUT /api/agenda/:id
 * @description Actualiza un bloque de agenda existente.
 */
export async function updateBloque(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID de bloque no válido' });
        }
        // El body ya fue validado por Zod y es un Partial<BloqueAgendaInput>
        const data = req.body;
        const bloqueActualizado = await agendaService.update(id, data);
        res.status(200).json(bloqueActualizado);
    }
    catch (error) {
        next(error);
    }
}
/**
 * @route DELETE /api/agenda/:id
 * @description Elimina un bloque de agenda.
 */
export async function deleteBloque(req, res, next) {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID de bloque no válido' });
        }
        await agendaService.delete(id);
        res.status(204).send(); // 204 No Content para eliminación exitosa
    }
    catch (error) {
        next(error);
    }
}
//# sourceMappingURL=agenda.controller.js.map