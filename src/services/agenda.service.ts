// ============================================
// ARCHIVO: src/services/agenda.service.ts
// ============================================
import prisma from '../config/database';

export class AgendaService {
  async getAll() {
    return await prisma.bloqueAgenda.findMany({
      include: { profesional: true, unidad: true },
      orderBy: { inicio: 'asc' },
    });
  }

  async getById(id: number) {
    const bloque = await prisma.bloqueAgenda.findUnique({
      where: { id },
      include: { profesional: true, unidad: true },
    });
    if (!bloque) throw new Error('Bloque no encontrado');
    return bloque;
  }

  async create(data: any) {
    const solapamiento = await prisma.bloqueAgenda.findFirst({
      where: {
        profesionalId: data.profesionalId,
        OR: [
          { AND: [{ inicio: { lte: data.inicio } }, { fin: { gt: data.inicio } }] },
          { AND: [{ inicio: { lt: data.fin } }, { fin: { gte: data.fin } }] },
        ],
      },
    });

    if (solapamiento) {
      throw new Error('El bloque se solapa con otro existente');
    }

    return await prisma.bloqueAgenda.create({ data });
  }

  async update(id: number, data: any) {
    return await prisma.bloqueAgenda.update({ where: { id }, data });
  }

  async delete(id: number) {
    return await prisma.bloqueAgenda.delete({ where: { id } });
  }
}
