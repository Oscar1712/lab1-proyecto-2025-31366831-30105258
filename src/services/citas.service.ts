import prisma from '../config/database';
import { CitaInput, UpdateCitaInput } from '../schemas/cita.schema.js';

export class CitasService {
  async createCita(data: CitaInput, userId: number) {
    // Verificar que la persona existe y está activa
    const persona = await prisma.personaAtendida.findUnique({
      where: { id: data.personaAtendidaId },
    });

    if (!persona profesional.estado !== 'ACTIVO') {
      throw new Error('Profesional no encontrado o inactivo');
    }

    // Verificar disponibilidad en la agenda del profesional
    const bloqueDisponible = await prisma.bloqueAgenda.findFirst({
      where: {
        profesionalId: data.profesionalId,
        inicio: { lte: data.inicio },
        fin: { gte: data.fin },
        estado: 'DISPONIBLE',
      },
    });

    if (!bloqueDisponible) {
      throw new Error('No hay disponibilidad para este horario');
    }

    // Verificar que no haya otra cita en el mismo horario
    const citaExistente = await prisma.cita.findFirst({
      where: {
        profesionalId: data.profesionalId,
        OR: [
          {
            AND: [
              { inicio: { lte: data.inicio } },
              { fin: { gt: data.inicio } },
            ],
          },
          {
            AND: [
              { inicio: { lt: data.fin } },
              { fin: { gte: data.fin } },
            ],
          },
        ],
        estado: { in: ['PENDIENTE', 'CONFIRMADA'] },
      },
    });

    if (citaExistente) {
      throw new Error('Ya existe una cita en ese horario');
    }

    // Crear la cita con transacción
    const result = await prisma.$transaction(async (tx) => {
      const cita = await tx.cita.create({
        data: {
          ...data,
          creadoPor: userId,
          historialCambios: JSON.stringify([
            {
              fecha: new Date(),
              accion: 'CREACION',
              estado: 'PENDIENTE',
              usuarioId: userId,
            },
          ]),
        },
        include: {
          persona: true,
          profesional: true,
          unidad: true,
        },
      });

      // Actualizar el bloque de agenda
      await tx.bloqueAgenda.update({
        where: { id: bloqueDisponible.id },
        data: { estado: 'RESERVADO' },
      });

      return cita;
    });

    return result;
  }

  async updateCita(id: string, data: UpdateCitaInput, userId: number) {
    const citaActual = await prisma.cita.findUnique({
      where: { id },
    });

    if (!citaActual) {
      throw new Error('Cita no encontrada');
    }

    // Obtener historial actual
    const historial = JSON.parse(citaActual.historialCambios citaActual.estado,
    });

    // Actualizar la cita
    const citaActualizada = await prisma.cita.update({
      where: { id },
      data: {
        ...data,
        historialCambios: JSON.stringify(historial),
        actualizadoPor: userId,
        actualizadoEn: new Date(),
      },
      include: {
        persona: true,
        profesional: true,
        unidad: true,
      },
    });

    return citaActualizada;
  }

  async getCitasPorProfesional(profesionalId: string, fecha: Date) {
    const inicioDia = new Date(fecha);
    inicioDia.setHours(0, 0, 0, 0);
    
    const finDia = new Date(fecha);
    finDia.setHours(23, 59, 59, 999);

return await prisma.cita.findMany({
      where: {
        profesionalId,
        inicio: { gte: inicioDia },
        fin: { lte: finDia },
        estado: { in: ['PENDIENTE', 'CONFIRMADA'] },
      },
      include: {
        persona: true,
        unidad: true,
      },
      orderBy: { inicio: 'asc' },
    });
  }
}
