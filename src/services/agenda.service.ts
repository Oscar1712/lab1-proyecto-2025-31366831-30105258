import prisma from '../config/database';
import { BloqueAgendaInput } from '../schemas/bloqueAgenda.schema';

export class AgendaService {
  async getAll(filters: {
    profesionalId?: number;
    unidadId?: number;
    fechaInicio?: string;
    fechaFin?: string;
    estado?: string;
    page?: number;
    limit?: number;
  }) {
    const {
      profesionalId,
      unidadId,
      fechaInicio,
      fechaFin,
      estado,
      page = 1,
      limit = 10,
    } = filters;

    const where: any = {};

    if (profesionalId) {
      where.profesionalId = profesionalId;
    }

    if (unidadId) {
      where.unidadId = unidadId;
    }

    if (fechaInicio profesional.estado !== 'activo') {
      throw new Error('Profesional no encontrado o inactivo');
    }

    // Verificar que la unidad existe y está activa
    const unidad = await prisma.unidadAtencion.findUnique({
      where: { id: data.unidadId },
    });

if (!unidad  data.fin  data.unidadId) {
      const inicio = data.inicio  bloque.fin;
      const profesionalId = data.profesionalId  bloque.unidadId;

      const solapamiento = await prisma.bloqueAgenda.findFirst({
        where: {
          id: { not: id },
          profesionalId,
          unidadId,
          OR: [
            {
              AND: [
                { inicio: { lte: inicio } },
                { fin: { gt: inicio } },
              ],
            },
            {
              AND: [
                { inicio: { lt: fin } },
                { fin: { gte: fin } },
              ],
            },
            {
              AND: [
                { inicio: { gte: inicio } },
                { fin: { lte: fin } },
            ],
            },
          ],
        },
      });

      if (solapamiento) {
        throw new Error('El bloque se solapa con otro existente');
      }
    }

    return await prisma.bloqueAgenda.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    const bloque = await this.getById(id);

    // Verificar que no tenga citas asociadas
    const citas = await prisma.cita.count({
      where: {
        profesionalId: bloque.profesionalId,
        unidadId: bloque.unidadId,
        inicio: { gte: bloque.inicio },
        fin: { lte: bloque.fin },
        estado: { in: ['solicitada', 'confirmada'] },
      },
    });

    if (citas > 0) {
      throw new Error('No se puede eliminar el bloque porque tiene citas asociadas');
    }

    return await prisma.bloqueAgenda.delete({
      where: { id },
    });
  }
}
