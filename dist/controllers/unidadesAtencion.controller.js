import { UnidadesAtencionService } from '../services/unidadesAtencion.service.js';
const service = new UnidadesAtencionService();
export class UnidadesAtencionController {
    // Obtener todas las unidades de atención con filtros y paginación
    async getAll(req, res) {
        try {
            const filters = {
                tipo: req.query.tipo,
                estado: req.query.estado,
                page: req.query.page ? parseInt(req.query.page, 10) : 1,
                limit: req.query.limit ? parseInt(req.query.limit, 10) : 10,
            };
            const result = await service.getAll(filters);
            res.json({
                success: true,
                data: result.data,
                pagination: result.pagination,
            });
        }
        catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }
    // Obtener una unidad de atención por ID
    async getById(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id) || id <= 0) {
                return res.status(400).json({ success: false, error: 'ID de unidad inválido' });
            }
            const data = await service.update(id, req.body);
            res.json({
                success: true,
                message: 'Unidad de atención actualizada exitosamente',
                data,
            });
        }
        catch (error) {
            if (error.message === 'Unidad no encontrada') {
                res.status(404).json({ success: false, error: error.message });
            }
            else if (error.message.includes('Ya existe')) {
                res.status(409).json({ success: false, error: error.message });
            }
            else {
                res.status(400).json({ success: false, error: 'Error al actualizar unidad de atención' });
            }
        }
    }
    // Crear una unidad de atención
    async create(req, res) {
        try {
            const data = await service.create(req.body);
            res.status(201).json({
                success: true,
                message: 'Unidad de atención creada exitosamente',
                data,
            });
        }
        catch (error) {
            if (error.message.includes('Ya existe')) {
                res.status(409).json({ success: false, error: error.message });
            }
            else {
                res.status(400).json({ success: false, error: 'Error al crear unidad de atención' });
            }
        }
    }
    // Actualizar una unidad de atención
    async update(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id) || id <= 0) {
                return res.status(400).json({ success: false, error: 'ID de unidad inválido' });
            }
            const data = await service.update(id, req.body);
            res.json({
                success: true,
                message: 'Unidad de atención actualizada exitosamente',
                data,
            });
        }
        catch (error) {
            if (error.message === 'Unidad no encontrada') {
                res.status(404).json({ success: false, error: error.message });
            }
            else if (error.message.includes('Ya existe')) {
                res.status(409).json({ success: false, error: error.message });
            }
            else {
                res.status(400).json({ success: false, error: 'Error al actualizar unidad de atención' });
            }
        }
    }
    // Eliminar (desactivar) una unidad de atención
    async delete(req, res) {
        try {
            const id = parseInt(req.params.id, 10);
            if (isNaN(id) || id <= 0) {
                return res.status(400).json({ success: false, error: 'ID de unidad inválido' });
            }
            const data = await service.delete(id);
            res.json({
                success: true,
                message: 'Unidad de atención desactivada exitosamente',
                data,
            });
        }
        catch (error) {
            if (error.message === 'Unidad no encontrada') {
                res.status(404).json({ success: false, error: error.message });
            }
            else if (error.message.includes('No se puede desactivar')) {
                res.status(400).json({ success: false, error: error.message });
            }
            else {
                res.status(500).json({ success: false, error: 'Error al desactivar unidad de atención' });
            }
        }
    }
}
//# sourceMappingURL=unidadesAtencion.controller.js.map