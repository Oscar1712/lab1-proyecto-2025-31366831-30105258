// services/citas.service.ts
import { PrismaClient, Citas, Prisma } from '@prisma/client';
import { agendaService } from './agenda.service';

const prisma = new PrismaClient();
export type CitaCreateData = Prisma.CitasCreateInput;

export const citasService = {

    // Obtener citas por paciente o profesional
    async findByFilter(personaId?: number, profesionalId?: number): Promise<Citas[]> {
        return prisma.citas.findMany({
            where: { personaId, profesionalId },
            include: { profesional: true, persona: true, unidad: true },
        });
    },

    // Creación de una nueva cita
    async create(data: CitaCreateData): Promise<Citas> {
        // Lógica de negocio CRÍTICA:
        // 1. Verificar disponibilidad en Agenda (el bloque debe estar 'abierto').
        // 2. Crear la Cita.
        // 3. Marcar el bloque de Agenda como 'reservado' (Transacción).

        return prisma.$transaction(async (tx) => {
            // Se debe obtener el ID del bloque de Agenda desde la data o del horario
            // Suponiendo que 'data' incluye 'agendaBloqueId'
            const agendaBloqueId = (data as any).agendaBloqueId;

            // 1. Crear la Cita
            const nuevaCita = await tx.citas.create({ data });

            // 2. Marcar el bloque como 'reservado'
            await tx.agenda.update({
                where: { id: agendaBloqueId },
                data: { estado: 'reservado' },
            });

            return nuevaCita;
        });
    },

    // Reprogramación de una cita
    async reschedule(citaId: number, oldAgendaBloqueId: number, newAgendaBloqueId: number): Promise<Citas> {
        // Lógica de negocio:
        // 1. Marcar el bloque viejo como 'abierto'.
        // 2. Marcar el bloque nuevo como 'reservado'.
        // 3. Actualizar la cita con el nuevo horario.
        return prisma.$transaction(async (tx) => {
            // 1. Liberar el bloque viejo
            await tx.agenda.update({ where: { id: oldAgendaBloqueId }, data: { estado: 'abierto' } });

            // 2. Reservar el bloque nuevo
            await tx.agenda.update({ where: { id: newAgendaBloqueId }, data: { estado: 'reservado' } });

            // 3. Actualizar la Cita
            return tx.citas.update({
                where: { id: citaId },
                data: { inicio: new Date(/* New Start Time */), fin: new Date(/* New End Time */), observaciones: 'Reprogramada' },
            });
        });
    },
    // ... Métodos para confirmación, cancelación (actualización de estado)
};