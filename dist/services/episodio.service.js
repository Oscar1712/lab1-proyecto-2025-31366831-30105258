// src/services/episodio.service.ts
import prisma from '../config/database.js';
export class EpisodioService {
    // 1. Obtener todos los episodios con filtros y paginación
    async getAll(filters) {
        const { personaId, tipo, estado, fechaAperturaDesde, fechaAperturaHasta, page = 1, limit = 10, } = filters || {};
        const where = {};
        if (personaId)
            where.personaId = personaId;
        if (tipo)
            where.tipo = tipo;
        if (estado)
            where.estado = estado;
        if (fechaAperturaDesde || fechaAperturaHasta) {
            where.fechaApertura = {};
            if (fechaAperturaDesde)
                where.fechaApertura.gte = new Date(fechaAperturaDesde);
            if (fechaAperturaHasta)
                where.fechaApertura.lte = new Date(fechaAperturaHasta);
        }
        const skip = (page - 1) * limit;
        const total = await prisma.episodioAtencion.count({ where });
        const episodios = await prisma.episodioAtencion.findMany({
            where,
            skip,
            take: limit,
            orderBy: { fechaApertura: 'desc' },
            include: {
                persona: { select: { id: true, nombres: true, apellidos: true } },
            },
        });
        return {
            data: episodios,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        };
    }
    // 2. Obtener episodio por ID
    async getById(id) {
        const episodio = await prisma.episodioAtencion.findUnique({
            where: { id },
            include: {
                persona: { select: { id: true, nombres: true, apellidos: true } },
            },
        });
        if (!episodio) {
            throw new Error(`Episodio de atención ID ${id} no encontrado`);
        }
        return episodio;
    }
    // 3. Crear episodio de atención
    async create(data) {
        // 🟢 USO OBLIGATORIO DE 'this.'
        await this.validatePersona(data.personaId);
        return await prisma.episodioAtencion.create({
            data: {
                ...data,
                fechaApertura: new Date(data.fechaApertura),
            },
        });
    }
    // 4. Actualizar episodio de atención
    async update(id, data) {
        await this.getById(id);
        if (data.personaId) {
            // 🟢 USO OBLIGATORIO DE 'this.'
            await this.validatePersona(data.personaId);
        }
        return await prisma.episodioAtencion.update({
            where: { id },
            data: {
                ...data,
                fechaApertura: data.fechaApertura ? new Date(data.fechaApertura) : undefined,
            },
        });
    }
    // 5. Cerrar episodio de atención (Acción específica de negocio)
    async cerrar(id, observacionesCierre) {
        const episodio = await this.getById(id);
        if (episodio.estado === 'cerrado') {
            throw new Error('El episodio ya se encuentra cerrado.');
        }
        return await prisma.episodioAtencion.update({
            where: { id },
            data: {
                estado: 'cerrado',
                fechaCierre: new Date(),
                observacionesCierre: observacionesCierre || null,
            },
        });
    }
    // --- LÓGICA DE VALIDACIÓN COMPARTIDA ---
    // 🟢 LA DEFINICIÓN DEBE ESTAR DENTRO DE LAS LLAVES DE LA CLASE
    async validatePersona(personaId) {
        const persona = await prisma.personaAtendida.findUnique({
            where: { id: personaId },
        });
        if (!persona) {
            throw new Error(`Persona atendida ID ${personaId} no encontrada`);
        }
    }
}
//# sourceMappingURL=episodio.service.js.map