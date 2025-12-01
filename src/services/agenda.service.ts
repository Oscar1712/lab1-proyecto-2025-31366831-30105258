// src/services/agenda.service.ts

// 🛑 CORRECCIÓN DE PRISMA (TS2305)
// 1. Importar la instancia centralizada de Prisma
import prisma from '../config/database'; // ⬅️ SIN .ts al final

// 2. Importar el bundle completo SÓLO para acceder a los tipos (TS2305)
import * as PrismaTypes from '@prisma/client'; 

// 3. Redefinir tipos usando el bundle (evita errores TS2305/TS2694)
type Agenda = PrismaTypes.Agenda;
export type AgendaCreateData = PrismaTypes.Prisma.AgendaCreateInput;

// 🛑 Eliminamos 'const prisma = new PrismaClient();' porque importamos la instancia centralizada

export const agendaService = {

    // Obtener bloques de agenda por profesional y/o unidad en un rango de fechas
    async findAvailability(profesionalId: number, unidadId: number, inicio: Date, fin: Date): Promise<Agenda[]> {
        // La variable 'prisma' ahora se refiere a la instancia importada.
        return prisma.agenda.findMany({
            where: {
                profesionalId,
                unidadId,
                inicio: { gte: inicio },
                fin: { lte: fin },
                estado: 'abierto', 
            },
            orderBy: { inicio: 'asc' },
        });
    },

    // Creación de un nuevo bloque de agenda
    async createBlock(data: AgendaCreateData): Promise<Agenda> {
        return prisma.agenda.create({ data });
    },

    // Actualizar estado (por ejemplo, de 'abierto' a 'cerrado' o a 'reservado' al crear una cita)
    async updateStatus(bloqueId: number, newStatus: 'abierto' | 'cerrado' | 'reservado'): Promise<Agenda> {
        return prisma.agenda.update({
            where: { id: bloqueId },
            data: { estado: newStatus },
        });
    },

    // ... Otros métodos CRUD para la gestión interna de la agenda
};