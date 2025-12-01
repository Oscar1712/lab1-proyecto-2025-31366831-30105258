// ============================================
// ARCHIVO: src/services/citas.service.ts
// ============================================
import prisma from '../config/database';
import { sendEmail } from '../config/email';

export class CitasService {
  async getAll() {
    return await prisma.cita.findMany({
      include: { persona: true, profesional: true, unidad: true },
      orderBy: { inicio: 'desc' },
    });
  }

  async getById(id: number) {
    const cita = await prisma.cita.findUnique({
      where: { id },
      include: { persona: true, profesional: true, unidad: true },
    });
    if (!cita) throw new Error('Cita no encontrada');
    return cita;
  }

  async create(data: any) {
    const bloqueDisponible = await prisma.bloqueAgenda.findFirst({
      where: {
        profesionalId: data.profesionalId,
        unidadId: data.unidadId,
        inicio: { lte: data.inicio },
        fin: { gte: data.fin },
        estado: 'abierto',
      },
    });

    if (!bloqueDisponible) {
      throw new Error('No hay disponibilidad para esta cita');
    }

    const cita = await prisma.cita.create({ 
      data,
      include: { persona: true, profesional: true }
    });

    const historial = JSON.stringify([
      { fecha: new Date(), estado: 'solicitada', usuario: 'sistema' },
    ]);
    
    await prisma.cita.update({
      where: { id: cita.id },
      data: { historialCambios: historial },
    });

    if (cita.persona.correo) {
      await sendEmail(
        cita.persona.correo,
        'Cita Agendada',
        `Su cita ha sido agendada para ${cita.inicio}`,
        `<h2>Cita Confirmada</h2><p>Fecha: ${cita.inicio}</p><p>Profesional: ${cita.profesional.nombres} ${cita.profesional.apellidos}</p>`
      );
    }

    return cita;
  }

  async update(id: number, data: any) {
    const citaActual = await this.getById(id);
    
    const historial = JSON.parse(citaActual.historialCambios || '[]');
    historial.push({
      fecha: new Date(),
      estadoAnterior: citaActual.estado,
      estadoNuevo: data.estado,
      usuario: 'sistema',
    });

    data.historialCambios = JSON.stringify(historial);
    return await prisma.cita.update({ where: { id }, data });
  }

  async delete(id: number) {
    return await prisma.cita.update({
      where: { id },
      data: { estado: 'cancelada' },
    });
  }
}

