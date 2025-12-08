// ============================================
// ARCHIVO: src/services/consentimientos.service.ts
// ============================================
import prisma from '../config/database';

export class ConsentimientosService {
  async getAll() {
    return await prisma.consentimiento.findMany({
      include: { persona: true },
      orderBy: { fecha: 'desc' },
    });
  }

  async getById(id: number) {
    const consentimiento = await prisma.consentimiento.findUnique({
      where: { id },
      include: { persona: true },
    });
    if (!consentimiento) throw new Error('Consentimiento no encontrado');
    return consentimiento;
  }

  async create(data: any) {
    return await prisma.consentimiento.create({ data });
  }

  async update(id: number, data: any) {
    return await prisma.consentimiento.update({ where: { id }, data });
  }

  async delete(id: number) {
    return await prisma.consentimiento.delete({ where: { id } });
  }
}
