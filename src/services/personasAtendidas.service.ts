// ============================================
// ARCHIVO: src/services/personasAtendidas.service.ts
// ============================================
import prisma from '../config/database';

export class PersonasAtendidasService {
  async getAll() {
    return await prisma.personaAtendida.findMany({
      where: { estado: 'activo' },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getById(id: number) {
    const persona = await prisma.personaAtendida.findUnique({ where: { id } });
    if (!persona) throw new Error('Persona no encontrada');
    return persona;
  }

  async create(data: any) {
    return await prisma.personaAtendida.create({ data });
  }

  async update(id: number, data: any) {
    return await prisma.personaAtendida.update({ where: { id }, data });
  }

  async delete(id: number) {
    return await prisma.personaAtendida.update({
      where: { id },
      data: { estado: 'inactivo' },
    });
  }
}
