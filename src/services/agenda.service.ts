// src/services/agenda.service.ts

// Importamos la instancia de Prisma (default)
import prisma from '../config/database.js'; 

// 🟢 CORRECCIÓN: Importamos el namespace de tipos 'Prisma'
import type { Prisma } from '@prisma/client'; 

// Importamos los tipos necesarios del esquema 
import type { BloqueAgendaInput, SearchBloquesQuery } from '../schemas/bloqueAgenda.schema.js';

// ✅ CORRECCIÓN: Usamos el tipo de Prisma correcto
type BloqueAgendaWhereInput = Prisma.BloqueAgendaWhereInput; // 👈 Ahora está tipado correctamente.
export class AgendaService {
  // 1. Obtener todos los bloques con filtros y paginación
  async getAll(filters: SearchBloquesQuery) {
    const {
      profesionalId,
      unidadId,
      fechaInicio,
      fechaFin,
      estado,
      page = 1,
      limit = 10,
    } = filters;

    // Construimos el objeto where dinámicamente
    // El tipo es 'any' temporalmente
    const where: BloqueAgendaWhereInput = {};

    if (profesionalId) where.profesionalId = profesionalId;
    if (unidadId) where.unidadId = unidadId;
    if (estado) where.estado = estado;

    // Filtro por rango de fechas
    if (fechaInicio || fechaFin) {
      where.inicio = {};
      if (fechaInicio) where.inicio.gte = new Date(fechaInicio);
      if (fechaFin) where.inicio.lte = new Date(fechaFin);
    }

    const skip = (page - 1) * limit;
    const total = await prisma.bloqueAgenda.count({ where });

    const bloques = await prisma.bloqueAgenda.findMany({
      where,
      skip,
      take: limit,
      orderBy: { inicio: 'desc' },
      include: {
        profesional: { select: { id: true, nombres: true, apellidos: true } },
        unidadAtencion: { select: { id: true, nombre: true } },
      },
    });

    return {
      data: bloques,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }

  // 2. Obtener bloque por ID
  async getById(id: number) {
    const bloque = await prisma.bloqueAgenda.findUnique({
      where: { id },
      include: {
        profesional: { select: { id: true, estado: true } } as any,
        unidadAtencion: { select: { id: true, estado: true } },
      },
    });

    if (!bloque) throw new Error('Bloque de agenda no encontrado');
    return bloque;
  }

  // 3. Crear bloque de agenda
  async create(data: BloqueAgendaInput) {
    await this.validateAndCheckOverlap(data);

    return await prisma.bloqueAgenda.create({
      data: {
        ...data,
        inicio: new Date(data.inicio),
        fin: new Date(data.fin),
      },
    });
  }

  // 4. Actualizar bloque de agenda
  async update(id: number, data: Partial<BloqueAgendaInput>) {
    const bloqueExistente = await this.getById(id);

    // Combinamos datos existentes y nuevos para validar
    const dataToValidate = { ...bloqueExistente, ...data };
    await this.validateAndCheckOverlap(dataToValidate as BloqueAgendaInput, id);

    return await prisma.bloqueAgenda.update({
      where: { id },
      data: {
        ...data,
        inicio: data.inicio ? new Date(data.inicio) : undefined,
        fin: data.fin ? new Date(data.fin) : undefined,
      },
    });
  }

  // 5. Eliminar bloque de agenda
  async delete(id: number) {
    const bloque = await this.getById(id);

    // Verificamos que no tenga citas asociadas
    const citas = await prisma.cita.count({
      where: {
        unidadId: bloque.unidadAtencion.id,
        profesionalId: (bloque.profesional as any).id,
        inicio: { gte: bloque.inicio },
        fin: { lte: bloque.fin },
        estado: { in: ['solicitada', 'confirmada'] },
      },
    });

    if (citas > 0) {
      throw new Error('No se puede eliminar el bloque porque tiene citas asociadas');
    }

    return await prisma.bloqueAgenda.delete({ where: { id } });
  }

  // --- LÓGICA DE VALIDACIÓN COMPARTIDA ---
  private async validateAndCheckOverlap(data: BloqueAgendaInput, id?: number) {
    const inicio = new Date(data.inicio);
    const fin = new Date(data.fin);

    // 1. Verificar profesional
    const profesional = await prisma.profesional.findUnique({
      where: { id: data.profesionalId },
      include: { usuario: { select: { activo: true } } },
    });

    if (!profesional || profesional.usuario.activo !== true || profesional.estado !== 'ACTIVO') {
      throw new Error('Profesional no encontrado o inactivo');
    }

    // 2. Verificar unidad de atención
    const unidad = await prisma.unidadAtencion.findUnique({
      where: { id: data.unidadId },
    });

    if (!unidad || unidad.estado !== 'activo') {
      throw new Error('Unidad de atención no encontrada o inactiva');
    }

    // 3. Chequeo de fechas
    if (inicio >= fin) {
      throw new Error('La fecha de inicio debe ser anterior a la fecha de fin');
    }
    if (inicio < new Date()) {
      throw new Error('El bloque no puede iniciar en el pasado');
    }

    // 4. Chequeo de solapamiento
    const whereOverlap: BloqueAgendaWhereInput = {
      profesionalId: data.profesionalId,
      unidadId: data.unidadId,
      id: id ? { not: id } : undefined,
      OR: [{ inicio: { lt: fin }, fin: { gt: inicio } }],
    };

    const solapamiento = await prisma.bloqueAgenda.findFirst({ where: whereOverlap });

    if (solapamiento) {
      throw new Error('El bloque se solapa con otro existente');
    }
  }
}