// ============================================
// ARCHIVO: src/services/unidadesAtencion.service.ts
// ============================================
import prisma from '../config/database';

export class UnidadesAtencionService {
  async getAll() {
    return await prisma.unidadAtencion.findMany({
      where: { estado: 'activo' },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getById(id: number) {
    const unidad = await prisma.unidadAtencion.findUnique({ where: { id } });
    if (!unidad) throw new Error('Unidad no encontrada');
    return unidad;
  }

  async create(data: any) {
    return await prisma.unidadAtencion.create({ data });
  }

  async update(id: number, data: any) {
    return await prisma.unidadAtencion.update({ where: { id }, data });
  }

  async delete(id: number) {
    return await prisma.unidadAtencion.update({
      where: { id },
      data: { estado: 'inactivo' },
    });
  }
}
