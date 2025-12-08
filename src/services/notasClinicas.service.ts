// ============================================
// ARCHIVO: src/services/notasClinicas.service.ts
// ============================================
import prisma from '../config/database';

export class NotasClinicasService {
  async getAll() {
    return await prisma.notaClinica.findMany({
      include: { episodio: true, profesional: true },
      orderBy: { fecha: 'desc' },
    });
  }

  async getById(id: number) {
    const nota = await prisma.notaClinica.findUnique({
      where: { id },
      include: { episodio: true, profesional: true },
    });
    if (!nota) throw new Error('Nota clínica no encontrada');
    return nota;
  }

  async create(data: any) {
    return await prisma.notaClinica.create({ data });
  }

  async update(id: number, data: any) {
    return await prisma.notaClinica.update({ where: { id }, data });
  }

  async delete(id: number) {
    return await prisma.notaClinica.delete({ where: { id } });
  }
}
