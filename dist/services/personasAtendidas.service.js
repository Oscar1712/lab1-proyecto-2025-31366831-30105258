// src/services/personasAtendidas.service.ts
import prisma from '../config/database.js';
export class PersonasAtendidasService {
    async getAll(filters) {
        const { documento, nombres, apellidos, estado, page = 1, limit = 10, } = filters;
        const where = {};
        if (documento) {
            where.numeroDocumento = { contains: documento };
        }
        if (nombres) {
            where.nombres = { contains: nombres };
        }
        if (apellidos) {
            where.apellidos = { contains: apellidos };
        }
        if (estado) {
            where.estado = estado;
        }
        const skip = (page - 1) * limit;
        const total = await prisma.personaAtendida.count({ where });
        const personas = await prisma.personaAtendida.findMany({
            where,
            skip,
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: {
                citas: {
                    take: 5,
                    orderBy: { inicio: 'desc' },
                    select: {
                        id: true,
                        inicio: true,
                        estado: true,
                        motivo: true,
                    },
                },
                episodios: {
                    take: 3,
                    orderBy: { fechaApertura: 'desc' },
                    select: {
                        id: true,
                        tipo: true,
                        estado: true,
                    },
                },
            },
        });
        return {
            data: personas,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        };
    }
    async getById(id) {
        const persona = await prisma.personaAtendida.findUnique({
            where: { id },
            include: {
                citas: {
                    orderBy: { inicio: 'desc' },
                    include: {
                        profesional: {
                            select: {
                                id: true,
                                nombres: true,
                                apellidos: true,
                                especialidad: true,
                            },
                        },
                        unidad: {
                            select: {
                                id: true,
                                nombre: true,
                                tipo: true,
                            },
                        },
                    },
                },
                episodios: {
                    orderBy: { fechaApertura: 'desc' },
                    include: {
                        notasClinicas: {
                            orderBy: { fecha: 'desc' },
                            take: 10,
                            select: {
                                id: true,
                                fecha: true,
                                profesional: {
                                    select: {
                                        nombres: true,
                                        apellidos: true,
                                    },
                                },
                            },
                        },
                        diagnosticos: {
                            orderBy: { createdAt: 'desc' },
                            select: {
                                id: true,
                                codigo: true,
                                descripcion: true,
                                tipo: true,
                            },
                        },
                    },
                },
                consentimientos: {
                    orderBy: { fecha: 'desc' },
                    take: 10,
                },
            },
        });
        if (!persona) {
            throw new Error('Persona no encontrada');
        }
        return persona;
    }
    async create(data) {
        // Verificar que no exista otra persona con el mismo documento
        const existing = await prisma.personaAtendida.findUnique({
            where: { numeroDocumento: data.numeroDocumento },
        });
        if (existing) {
            throw new Error('Ya existe una persona con este número de documento');
        }
        return await prisma.personaAtendida.create({
            data: {
                ...data,
                // Convertir string vacío a null
                correo: data.correo || null,
                direccion: data.direccion || null,
            },
        });
    }
    async update(id, data) {
        const persona = await this.getById(id);
        // Si se actualiza el documento, verificar que no exista
        if (data.numeroDocumento && data.numeroDocumento !== persona.numeroDocumento) {
            const existing = await prisma.personaAtendida.findUnique({
                where: { numeroDocumento: data.numeroDocumento },
            });
            if (existing) {
                throw new Error('Ya existe otra persona con este número de documento');
            }
        }
        const updateData = { ...data };
        // Convertir string vacío a null para campos opcionales
        if (updateData.correo !== undefined) {
            updateData.correo = updateData.correo || null;
        }
        if (updateData.direccion !== undefined) {
            updateData.direccion = updateData.direccion || null;
        }
        return await prisma.personaAtendida.update({
            where: { id },
            data: updateData,
        });
    }
    async delete(id) {
        // Verificar que no tenga citas activas
        const citasActivas = await prisma.cita.count({
            where: {
                personaId: id,
                estado: { in: ['solicitada', 'confirmada'] },
            },
        });
        if (citasActivas > 0) {
            throw new Error('No se puede desactivar la persona porque tiene citas activas');
        }
        // Verificar que no tenga episodios abiertos
        const episodiosAbiertos = await prisma.episodioAtencion.count({
            where: {
                personaId: id,
                estado: 'abierto',
            },
        });
        if (episodiosAbiertos > 0) {
            throw new Error('No se puede desactivar la persona porque tiene episodios abiertos');
        }
        return await prisma.personaAtendida.update({
            where: { id },
            data: { estado: 'inactivo' },
        });
    }
    async getEstadisticas(id) {
        const persona = await this.getById(id);
        const [citasTotal, citasCompletadas, episodiosTotal, episodiosAbiertos] = await Promise.all([
            prisma.cita.count({ where: { personaId: id } }),
            prisma.cita.count({
                where: { personaId: id, estado: 'cumplida' },
            }),
            prisma.episodioAtencion.count({ where: { personaId: id } }),
            prisma.episodioAtencion.count({
                where: { personaId: id, estado: 'abierto' },
            }),
        ]);
        return {
            persona: {
                id: persona.id,
                nombres: persona.nombres,
                apellidos: persona.apellidos,
                documento: persona.numeroDocumento,
            },
            estadisticas: {
                citas: {
                    total: citasTotal,
                    completadas: citasCompletadas,
                    tasaCompletitud: citasTotal
                        ? (citasCompletadas / citasTotal) * 100
                        : 0,
                },
                episodios: {
                    total: episodiosTotal,
                    abiertos: episodiosAbiertos,
                    cerrados: episodiosTotal - episodiosAbiertos,
                },
            },
        };
    }
}
//# sourceMappingURL=personasAtendidas.service.js.map