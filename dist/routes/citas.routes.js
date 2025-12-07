import { Router } from 'express';
// ⚠️ Nota: Si tu controlador está bien, no necesitas importar CitasService aquí.
// Pero como tienes la lógica en el router, la mantendremos por ahora.
import { CitasService } from '../services/citas.service.js';
import { validate } from '../middlewares/validator.middleware.js';
import { createCitaSchema, updateCitaSchema, confirmarCitaSchema, cancelarCitaSchema, reprogramarCitaSchema, } from '../schemas/cita.schema.js';
// *******************************************************************
// 💡 RECOMENDACIÓN: DEBERÍAS IMPORTAR LA CLASE CONTROLLER AQUÍ
// import { CitasController } from '../controllers/citas.controller.js';
// const controller = new CitasController();
// *******************************************************************
const router = Router();
const service = new CitasService(); // Solo si la lógica se queda en el router
// ----------------------------------------------------------------------
// RUTAS
// ----------------------------------------------------------------------
// Crear cita
router.post('/', 
// Aquí debería ir tu middleware de autenticación: authMiddleware,
validate(createCitaSchema), async (req, res) => {
    try {
        // ⚠️ Usamos req.user?.id que ahora es válido
        const userId = req.user?.id ?? 0;
        const cita = await service.createCita(req.body, userId);
        res.status(201).json({ success: true, data: cita });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
// Actualizar cita
router.put('/:id', 
// Aquí debería ir tu middleware de autenticación: authMiddleware,
validate(updateCitaSchema), async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const userId = req.user?.id ?? 0;
        const cita = await service.updateCita(id, req.body, userId);
        res.json({ success: true, data: cita });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
// Obtener citas por profesional en una fecha (No requiere autenticación de usuario)
router.get('/profesional/:profesionalId/:fecha', async (req, res) => {
    try {
        const profesionalId = parseInt(req.params.profesionalId, 10);
        const fecha = new Date(req.params.fecha);
        const citas = await service.getCitasPorProfesional(profesionalId, fecha);
        res.json({ success: true, data: citas });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
// Confirmar cita
router.post('/:id/confirmar', 
// Aquí debería ir tu middleware de autenticación: authMiddleware,
validate(confirmarCitaSchema), async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const userId = req.user?.id ?? 0;
        const { observaciones } = req.body;
        const cita = await service.confirmarCita(id, userId, observaciones);
        res.json({ success: true, message: 'Cita confirmada', data: cita });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
// Cancelar cita
router.post('/:id/cancelar', 
// Aquí debería ir tu middleware de autenticación: authMiddleware,
validate(cancelarCitaSchema), async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const userId = req.user?.id ?? 0;
        const { observaciones } = req.body;
        const cita = await service.cancelarCita(id, userId, observaciones);
        res.json({ success: true, message: 'Cita cancelada', data: cita });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
// Reprogramar cita
router.post('/:id/reprogramar', 
// Aquí debería ir tu middleware de autenticación: authMiddleware,
validate(reprogramarCitaSchema), async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const userId = req.user?.id ?? 0;
        const { inicio, fin } = req.body;
        // Convertimos a Date antes de llamar al servicio
        const cita = await service.reprogramarCita(id, new Date(inicio), new Date(fin), userId);
        res.json({ success: true, message: 'Cita reprogramada', data: cita });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});
export default router;
//# sourceMappingURL=citas.routes.js.map