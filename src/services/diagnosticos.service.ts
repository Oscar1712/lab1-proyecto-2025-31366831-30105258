// ============================================
// ARCHIVO: src/services/diagnosticos.service.ts
// ============================================
import prisma from '../config/database';

export class DiagnosticosService {
  async getAll() {
    return await prisma.diagnostico.findMany({
      include: { episodio: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getById(id: number) {
    const diagnostico = await prisma.diagnostico.findUnique({
      where: { id },
      include: { episodio: true },
    });
    if (!diagnostico) throw new Error('Diagnóstico no encontrado');
    return diagnostico;
  }

  async create(data: any) {
    return await prisma.diagnostico.create({ data });
  }

  async update(id: number, data: any) {
    return await prisma.diagnostico.update({ where: { id }, data });
  }

  async delete(id: number) {
    return await prisma.diagnostico.delete({ where: { id } });
  }
}

