// src/controllers/citas.controller.ts

import { Request, Response, NextFunction } from 'express';
import { citasService, CitaCreateData } from '../services/citas.service'; 

export const citasController = {

    async getCitas(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { personaId, profesionalId } = req.query;
            const pId = personaId ? Number(personaId) : undefined;
            const profId = profesionalId ? Number(profesionalId) : undefined;
            const citas = await citasService.findByFilter(pId, profId);

            res.status(200).json(citas);
        } catch (error) {
            next(error);
        }
    },

    async createCita(req: Request, res: Response, next: NextFunction): Promise<void> {
        const data: CitaCreateData = req.body;
        try {
            const nuevaCita = await citasService.create(data); 
            res.status(201).json(nuevaCita);
        } catch (error) {
            next(error); 
        }
    },
    
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