// services/agenda.service.ts
import { PrismaClient, Agenda, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
export type AgendaCreateData = Prisma.AgendaCreateInput;

export const agendaService = {

    // Obtener bloques de agenda por profesional y/o unidad en un rango de fechas
    async findAvailability(profesionalId: number, unidadId: number, inicio: Date, fin: Date): Promise<Agenda[]> {
        // Lógica de negocio clave: Filtrar solo bloques 'abiertos' para que los vea el paciente
        return prisma.agenda.findMany({
            where: {
                profesionalId,
                unidadId,
                inicio: { gte: inicio },
                fin: { lte: fin },
                estado: 'abierto', // Solo la disponibilidad publicable
            },
            orderBy: { inicio: 'asc' },
        });
    },

    // Creación de un nuevo bloque de agenda
    async createBlock(data: AgendaCreateData): Promise<Agenda> {
        // Lógica de negocio: Verificar que el nuevo bloque no se solape con bloques existentes
        // Esta verificación es CRÍTICA. Se recomienda usar una transacción.
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