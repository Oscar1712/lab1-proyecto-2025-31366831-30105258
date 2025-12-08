// ============================================
// ARCHIVO: src/services/profesionales.service.ts
// ============================================
import prisma from '../config/database';

export class ProfesionalesService {
  async getAll() {
    return await prisma.profesional.findMany({
      where: { estado: 'activo' },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getById(id: number) {
    const profesional = await prisma.profesional.findUnique({ where: { id } });
    if (!profesional) throw new Error('Profesional no encontrado');
    return profesional;
  }

  async create(data: any) {
    return await prisma.profesional.create({ data });
  }

  async update(id: number, data: any) {
    return await prisma.profesional.update({ where: { id }, data });
  }

  async delete(id: number) {
    return await prisma.profesional.update({
      where: { id },
      data: { estado: 'inactivo' },
    });
  }
}
