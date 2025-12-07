import prisma from '../config/database.js';
export class ProfesionalesService {
    async getAll(filters) {
        const { especialidad, estado, page = 1, limit = 10 } = filters;
        const where = {};
        if (especialidad) {
            where.especialidad = { contains: especialidad };
        }
        if (estado) {
            where.estado = estado;
        }
        const skip = (page - 1) * limit;
        const total = await prisma.profesional.count({ where });
        const profesionales = await prisma.profesional.findMany({
            where,
            skip,
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: {
                bloques: {
                    take: 5,
                    orderBy: { inicio: 'desc' },
                    select: {
                        id: true,
                        inicio: true,
                        fin: true,
                        estado: true,
                    },
                },
                citas: {
                    take: 5,
                    orderBy: { inicio: 'desc' },
                    select: {
                        id: true,
                        inicio: true,
                        estado: true,
                    },
                },
            },
        });
        return {
            data: profesionales,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        };
    }
    async getById(id) {
        const profesional = await prisma.profesional.findUnique({
            where: { id },
            include: {
                bloques: {
                    orderBy: { inicio: 'asc' },
                    include: {
                        unidad: {
                            select: {
                                id: true,
                                nombre: true,
                            },
                        },
                    },
                },
                citas: {
                    orderBy: { inicio: 'desc' },
                    include: {
                        persona: {
                            select: {
                                id: true,
                                nombres: true,
                                apellidos: true,
                            },
                        },
                        unidad: {
                            select: {
                                id: true,
                                nombre: true,
                            },
                        },
                    },
                },
                notasClinicas: {
                    orderBy: { fecha: 'desc' },
                    take: 10,
                    select: {
                        id: true,
                        fecha: true,
                        episodio: {
                            select: {
                                persona: {
                                    select: {
                                        nombres: true,
                                        apellidos: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        if (!profesional) {
            throw new Error('Profesional no encontrado');
        }
        return profesional;
    }
    async create(data) {
        // Verificar que no exista otro profesional con el mismo registro
        const existing = await prisma.profesional.findUnique({
            where: { registroProfesional: data.registroProfesional },
        });
        if (existing) {
            throw new Error('Ya existe un profesional con este registro');
        }
        return await prisma.profesional.create({
            data: {
                ...data,
                correo: data.correo || null,
            },
        });
    }
    async update(id, data) {
        const profesional = await this.getById(id);
        // Si se actualiza el registro, verificar que no exista
        if (data.registroProfesional && data.registroProfesional !== profesional.registroProfesional) {
            const existing = await prisma.profesional.findUnique({
                where: { registroProfesional: data.registroProfesional },
            });
            if (existing) {
                throw new Error('Ya existe otro profesional con este registro');
            }
        }
        const updateData = { ...data };
        // Convertir string vacío a null para campos opcionales
        if (updateData.correo !== undefined) {
            updateData.correo = updateData.correo || null;
        }
        return await prisma.profesional.update({
            where: { id },
            data: updateData,
        });
    }
    async delete(id) {
        // Verificar que no tenga bloques de agenda activos
        const bloquesActivos = await prisma.bloqueAgenda.count({
            where: {
                profesionalId: id,
                estado: 'abierto',
            },
        });
        if (bloquesActivos > 0) {
            throw new Error('No se puede desactivar el profesional porque tiene bloques de agenda activos');
        }
        // Verificar que no tenga citas activas
        const citasActivas = await prisma.cita.count({
            where: {
                profesionalId: id,
                estado: { in: ['solicitada', 'confirmada'] },
            },
        });
        if (citasActivas > 0) {
            throw new Error('No se puede desactivar el profesional porque tiene citas activas');
        }
        return await prisma.profesional.update({
            where: { id },
            data: { estado: 'inactivo' },
        });
    }
}
//# sourceMappingURL=profesionales.service.js.map