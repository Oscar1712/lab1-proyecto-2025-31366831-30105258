import { Request, Response } from 'express';
import { CitasService } from '../services/citas.service.js';

// ⚠️ NOTA: Si mueves la lógica de 'citas.routes.ts' aquí, debes asegurarte
// de que las rutas que usan req.user también tengan adjunto el middleware de autenticación.

const service = new CitasService();

export class CitasController {
  // Crear cita
  async create(req: Request, res: Response) {
    try {
      // ✅ Solucionado por src/types/express.d.ts
      const userId: number = req.user?.id ?? 0; 
      const cita = await service.createCita(req.body, userId);
      res.status(201).json({ success: true, data: cita });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }

  // Actualizar cita
  async update(req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id, 10);
      // ✅ Solucionado por src/types/express.d.ts
      const userId: number = req.user?.id ?? 0; 
      const cita = await service.updateCita(id, req.body, userId);
      res.json({ success: true, data: cita });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }

  // Obtener citas por profesional en una fecha (No requiere req.user)
  async getByProfesional(req: Request, res: Response) {
    try {
      const profesionalId: number = parseInt(req.params.profesionalId, 10);
      // La validación de fechas debería hacerse con Zod, pero lo mantengo
      const fecha: Date = new Date(req.params.fecha); 
      const citas = await service.getCitasPorProfesional(profesionalId, fecha);
      res.json({ success: true, data: citas });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }

  // Confirmar cita
  async confirmar(req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id, 10);
      // ✅ Solucionado por src/types/express.d.ts
      const userId: number = req.user?.id ?? 0; 
      const { observaciones } = req.body;
      const cita = await service.confirmarCita(id, userId, observaciones);
      res.json({ success: true, message: 'Cita confirmada', data: cita });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }

  // Cancelar cita
  async cancelar(req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id, 10);
      // ✅ Solucionado por src/types/express.d.ts
      const userId: number = req.user?.id ?? 0; 
      const { observaciones } = req.body;
      const cita = await service.cancelarCita(id, userId, observaciones);
      res.json({ success: true, message: 'Cita cancelada', data: cita });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }

  // Reprogramar cita
  async reprogramar(req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id, 10);
      // ✅ Solucionado por src/types/express.d.ts
      const userId: number = req.user?.id ?? 0; 
      const { inicio, fin } = req.body;
      const cita = await service.reprogramarCita(id, new Date(inicio), new Date(fin), userId);
      res.json({ success: true, message: 'Cita reprogramada', data: cita });
    } catch (error: any) {
      res.status(400).json({ success: false, error: error.message });
    }
  }
}