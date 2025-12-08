// ============================================
// ARCHIVO: src/services/episodios.service.ts
// ============================================
import prisma from '../config/database';

export class EpisodiosService {
  async getAll() {
    return await prisma.episodioAtencion.findMany({
      include: { persona: true, notasClinicas: true, diagnosticos: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getById(id: number) {
    const episodio = await prisma.episodioAtencion.findUnique({
      where: { id },
      include: { persona: true, notasClinicas: true, diagnosticos: true },
    });
    if (!episodio) throw new Error('Episodio no encontrado');
    return episodio;
  }

  async create(data: any) {
    return await prisma.episodioAtencion.create({ data });
  }

  async update(id: number, data: any) {
    return await prisma.episodioAtencion.update({ where: { id }, data });
  }

  async delete(id: number) {
    return await prisma.episodioAtencion.delete({ where: { id } });
  }
}

