// src/services/unidadesAtencion.service.ts
import prisma from '../config/database.js';
export class UnidadesAtencionService {
    // Obtener todas las unidades de atención con filtros y paginación
    async getAll(filters) {
        const { tipo, estado, page = 1, limit = 10 } = filters;
        // El tipo se resuelve correctamente con 'import type * as Prisma'
        const where = {};
        if (tipo)
            where.tipo = tipo;
        if (estado)
            where.estado = estado;
        const skip = (page - 1) * limit;
        const total = await prisma.unidadAtencion.count({ where });
        const unidades = await prisma.unidadAtencion.findMany({
            where,
            skip,
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: {
                bloques: {
                    take: 5,
                    orderBy: { inicio: 'desc' },
                    select: { id: true, inicio: true, fin: true, estado: true },
                },
                citas: {
                    take: 5,
                    orderBy: { inicio: 'desc' },
                    select: { id: true, inicio: true, estado: true },
                },
            },
        });
        return {
            data: unidades,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        };
    }
    // Obtener una unidad de atención por ID
    async getById(id) {
        const unidad = await prisma.unidadAtencion.findUnique({
            where: { id },
            include: {
                bloques: {
                    orderBy: { inicio: 'asc' },
                    include: {
                        profesional: {
                            select: { id: true, nombres: true, apellidos: true, especialidad: true },
                        },
                    },
                },
                citas: {
                    orderBy: { inicio: 'desc' },
                    include: {
                        persona: { select: { id: true, nombres: true, apellidos: true } },
                        profesional: { select: { id: true, nombres: true, apellidos: true } },
                    },
                },
            },
        });
        if (!unidad)
            throw new Error('Unidad no encontrada');
        return unidad;
    }
    // Crear una unidad de atención
    async create(data) {
        return prisma.unidadAtencion.create({
            data: {
                ...data,
                // Garantizar NULL para campos opcionales si vienen como undefined o strings vacíos
                direccion: data.direccion || null,
                telefono: data.telefono || null,
                // Tipado defensivo para horarioReferencia
                horarioReferencia: data.horarioReferencia || null,
            },
        });
    }
    // Actualizar una unidad de atención
    async update(id, data) {
        // 1. Verificar si la unidad existe
        await this.getById(id);
        // 2. Preparar los datos para la actualización
        const updateData = { ...data };
        // 3. Convertir strings vacíos a NULL para campos opcionales
        if (updateData.direccion !== undefined)
            updateData.direccion = updateData.direccion || null;
        if (updateData.telefono !== undefined)
            updateData.telefono = updateData.telefono || null;
        if (updateData.horarioReferencia !== undefined)
            updateData.horarioReferencia = updateData.horarioReferencia || null;
        // 4. Ejecutar la actualización
        return prisma.unidadAtencion.update({
            where: { id },
            data: updateData,
        });
    }
    // Eliminar (desactivar) una unidad de atención
    async delete(id) {
        const bloquesActivos = await prisma.bloqueAgenda.count({
            where: { unidadId: id, estado: 'abierto' },
        });
        if (bloquesActivos > 0) {
            throw new Error('No se puede desactivar la unidad porque tiene bloques de agenda activos');
        }
        const citasActivas = await prisma.cita.count({
            where: { unidadId: id, estado: { in: ['solicitada', 'confirmada'] } },
        });
        if (citasActivas > 0) {
            throw new Error('No se puede desactivar la unidad porque tiene citas activas');
        }
        return prisma.unidadAtencion.update({
            where: { id },
            data: { estado: 'inactivo' },
        });
    }
}
//# sourceMappingURL=unidadesAtencion.service.js.map