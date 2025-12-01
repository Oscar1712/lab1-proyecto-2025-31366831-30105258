// src/services/citas.service.ts

// 1. Importación de Prisma y Tipos
import prisma from '../config/database'; 
// 🛑 CORRECCIÓN CLAVE: Importación Nombrada para evitar TS2305 y TS2694
import { Cita, Prisma } from '@prisma/client'; 
// Importación de utilidades
import { comparePassword } from '../utils/bcrypt.util'; 

// Definición de Tipos
// 🛑 CORRECCIÓN: Usamos los tipos importados directamente
export type CitaCreateData = Prisma.CitaCreateInput;

export const citasService = {

    // Crear una cita (Controlador llama a esta función como 'create')
    async create(data: CitaCreateData): Promise<Cita> {
        return prisma.cita.create({ data });
    },

    // Buscar por filtro (Controlador llama a esta función como 'findByFilter')
    // 🛑 CORRECCIÓN: Implementación para sincronizar con el controlador
    async findByFilter(personaId: number | undefined, profesionalId: number | undefined): Promise<Cita[]> {
        const whereClause: Prisma.CitaWhereInput = {};

        if (personaId) {
            whereClause.personaId = personaId;
        }
        if (profesionalId) {
            whereClause.profesionalId = profesionalId;
        }

        return prisma.cita.findMany({
            where: whereClause,
            orderBy: { fecha: 'asc' },
        });
    },
    
    // Obtener una cita específica
    async getCitaById(id: number): Promise<Cita | null> {
        return prisma.cita.findUnique({
            where: { id: id },
        });
    },

    // Obtener citas por WhereClause
    async getCitas(whereClause: Prisma.CitaWhereInput): Promise<Cita[]> {
        return prisma.cita.findMany({
            where: whereClause,
            orderBy: { fecha: 'asc' },
        });
    },

    // Cancelar una cita
    async cancelCita(id: number): Promise<Cita> {
        return prisma.cita.update({
            where: { id: id },
            data: { estado: 'CANCELADA' }, 
        });
    },

    // Reprogramar una cita
    async rescheduleCita(id: number, newFecha: Date, newAgendaBlockId: number): Promise<Cita> {
        return prisma.cita.update({
            where: { id: id },
            data: { 
                fecha: newFecha,
                agendaId: newAgendaBlockId,
            },
        });
    },

    // Confirmar Cita (Implementación para sincronizar con el controlador/rutas)
    async confirmCita(id: number): Promise<Cita> {
        return prisma.cita.update({
            where: { id: id },
            data: { estado: 'CONFIRMADA' }, 
        });
    },

    // Completar Cita (Implementación para sincronizar con el controlador/rutas)
    async completeCita(id: number): Promise<Cita> {
        return prisma.cita.update({
            where: { id: id },
            data: { estado: 'COMPLETADA' }, 
        });
    },
};