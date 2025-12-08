import { Router, Request, Response } from 'express';
import { CitasService } from '../services/citas.service.js';
import { validate } from '../middlewares/validator.middleware.js';
import {
  createCitaSchema,
  updateCitaSchema,
  confirmarCitaSchema,
  cancelarCitaSchema,
  reprogramarCitaSchema,
} from '../schemas/cita.schema.js';

const router = Router();
const service = new CitasService(); // Solo si la lógica se queda en el router

// ----------------------------------------------------------------------
// RUTAS
// ----------------------------------------------------------------------

// Crear cita
router.post(
  '/',
  // Aquí debería ir tu middleware de autenticación: authMiddleware,
  validate(createCitaSchema),
  async (req: Request, res: Response) => { // El error de 'req.user' se resuelve con express.d.ts
    try {
      // ⚠️ Usamos req.user?.id que ahora es válido
      const userId: number = req.user?.id ?? 0;
      const cita = await service.createCita(req.body, userId);
      res.status(201).json({ success: true, data: cita });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
);

// Actualizar cita
router.put(
  '/:id',
  // Aquí debería ir tu middleware de autenticación: authMiddleware,
  validate(updateCitaSchema),
  async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      const userId: number = req.user?.id ?? 0;
      const cita = await service.updateCita(id, req.body, userId);
      res.json({ success: true, data: cita });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
);

// Obtener citas por profesional en una fecha (No requiere autenticación de usuario)
router.get(
  '/profesional/:profesionalId/:fecha',
  async (req: Request, res: Response) => {
    try {
      const profesionalId: number = parseInt(req.params.profesionalId, 10);
      const fecha: Date = new Date(req.params.fecha);
      const citas = await service.getCitasPorProfesional(profesionalId, fecha);
      res.json({ success: true, data: citas });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
);

// Confirmar cita
router.post(
  '/:id/confirmar',
  // Aquí debería ir tu middleware de autenticación: authMiddleware,
  validate(confirmarCitaSchema),
  async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      const userId: number = req.user?.id ?? 0;
      const { observaciones } = req.body;
      const cita = await service.confirmarCita(id, userId, observaciones);
      res.json({ success: true, message: 'Cita confirmada', data: cita });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
);

// Cancelar cita
router.post(
  '/:id/cancelar',
  // Aquí debería ir tu middleware de autenticación: authMiddleware,
  validate(cancelarCitaSchema),
  async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      const userId: number = req.user?.id ?? 0;
      const { observaciones } = req.body;
      const cita = await service.cancelarCita(id, userId, observaciones);
      res.json({ success: true, message: 'Cita cancelada', data: cita });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
);

// Reprogramar cita
router.post(
  '/:id/reprogramar',
  // Aquí debería ir tu middleware de autenticación: authMiddleware,
  validate(reprogramarCitaSchema),
  async (req: Request, res: Response) => {
    try {
      const id: number = parseInt(req.params.id, 10);
      const userId: number = req.user?.id ?? 0;
      const { inicio, fin } = req.body;
      // Convertimos a Date antes de llamar al servicio
      const cita = await service.reprogramarCita(id, new Date(inicio), new Date(fin), userId);
      res.json({ success: true, message: 'Cita reprogramada', data: cita });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
);

export default router;