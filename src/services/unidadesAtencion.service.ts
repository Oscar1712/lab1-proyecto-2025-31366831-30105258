import prisma from '../config/database';
import { UnidadAtencionInput } from '../schemas/unidad.schema';
import type { Prisma } from '@prisma/client';

export class UnidadesAtencionService {
  async getAll(filters: {
    tipo?: string;
    estado?: string;
    page?: number;
    limit?: number;
  }) {
    const { tipo, estado, page = 1, limit = 10 } = filters;

    const where: Prisma.UnidadAtencionWhereInput = {};

    if (tipo) where.tipo = tipo;
    if (estado) where.estado = estado;

    const skip = (page - 1) * limit;
    const total = await prisma.unidadAtencion.count({ where });

    const unidades = await prisma.unidadAtencion.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        bloques: {
          take: 5,
          orderBy: { inicio: 'desc' },
          select: { id: true, inicio: true, fin: true, estado: true },
        },
        citas: {
          take: 5,
          orderBy: { inicio: 'desc' },
          select: { id: true, inicio: true, estado: true },
        },
      },
    });

    return {
      data: unidades,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }

  async getById(id: number) {
    const unidad = await prisma.unidadAtencion.findUnique({
      where: { id },
      include: {
        bloques: {
          orderBy: { inicio: 'asc' },
          include: {
            profesional: {
              select: { id: true, nombres: true, apellidos: true, especialidad: true },
            },
          },
        },
        citas: {
          orderBy: { inicio: 'desc' },
          include: {
            persona: { select: { id: true, nombres: true, apellidos: true } },
            profesional: { select: { id: true, nombres: true, apellidos: true } },
          },
        },
      },
    });

    if (!unidad) throw new Error('Unidad no encontrada');
    return unidad;
  }

  async create(data: UnidadAtencionInput) {
    return prisma.unidadAtencion.create({
      data: {
        ...data,
        direccion: data.direccion || null,
        horarioReferencia: data.horarioReferencia || null;
    if (updateData.telefono !== undefined) updateData.telefono = updateData.telefono || null;

    return prisma.unidadAtencion.update({
      where: { id },
      data: updateData,
    });
  }

  async delete(id: number) {
    const bloquesActivos = await prisma.bloqueAgenda.count({
      where: { unidadId: id, estado: 'abierto' },
    });
    if (bloquesActivos > 0) {
      throw new Error('No se puede desactivar la unidad porque tiene bloques de agenda activos');
    }

    const citasActivas = await prisma.cita.count({
      where: { unidadId: id, estado: { in: ['solicitada', 'confirmada'] } },
    });
    if (citasActivas > 0) {
      throw new Error('No se puede desactivar la unidad porque tiene citas activas');
    }

    return prisma.unidadAtencion.update({
      where: { id },
      data: { estado: 'inactivo' },
    });
  }
}