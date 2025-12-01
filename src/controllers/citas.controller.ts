// src/controllers/citas.controller.ts

import { Request, Response, NextFunction } from 'express';
// 🛑 CORRECCIÓN DE RUTA: Eliminar .ts y usar ruta relativa correcta
import { citasService, CitaCreateData } from '../services/citas.service'; 

export const citasController = {

    async getCitas(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { personaId, profesionalId } = req.query;

            // 🛑 CORRECCIÓN DE TIPADO: Convertir a número o undefined
            const pId = personaId ? Number(personaId) : undefined;
            const profId = profesionalId ? Number(profesionalId) : undefined;
            
            // 🛑 CORRECCIÓN DE NOMBRE: findByFilter ahora existe en el servicio.
            const citas = await citasService.findByFilter(pId, profId);

            res.status(200).json(citas);
        } catch (error) {
            next(error);
        }
    },

    async createCita(req: Request, res: Response, next: NextFunction): Promise<void> {
        const data: CitaCreateData = req.body;
        try {
            // 🛑 CORRECCIÓN DE NOMBRE: Usamos 'create' que es el nombre en el servicio.
            const nuevaCita = await citasService.create(data); 
            res.status(201).json(nuevaCita);
        } catch (error) {
            next(error); 
        }
    },
    
    // 🛑 CORRECCIÓN: Implementar los métodos requeridos por las rutas (TS2339)
    async cancelCita(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = Number(req.params.id); 
            const citaCancelada = await citasService.cancelCita(id);
            res.status(200).json(citaCancelada);
        } catch (error) { next(error); }
    },

    async rescheduleCita(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = Number(req.params.id); 
            const { newFecha, newAgendaBlockId } = req.body;
            // 🛑 CORRECCIÓN TS1005: Asegúrate de que las llaves y paréntesis estén cerrados correctamente.
            const citaReprogramada = await citasService.rescheduleCita(id, new Date(newFecha), Number(newAgendaBlockId));
            res.status(200).json(citaReprogramada);
        } catch (error) { next(error); }
    },
    
    async confirmCita(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = Number(req.params.id);
            const citaConfirmada = await citasService.confirmCita(id);
            res.status(200).json(citaConfirmada);
        } catch (error) { next(error); }
    },
    
    async completeCita(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const id = Number(req.params.id);
            const citaCumplida = await citasService.completeCita(id);
            res.status(200).json(citaCumplida);
        } catch (error) { next(error); }
    },
};