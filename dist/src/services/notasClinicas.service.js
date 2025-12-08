// src/services/notaClinica.service.ts
import prisma from '../config/database.js'; // 🟢 Correcto: Usando el Singleton
export class NotaClinicaService {
    // 1. Obtener todas las notas clínicas con filtros
    async getAll(filters) {
        const { episodioId, profesionalId, search, page = 1, limit = 10, } = filters || {};
        const where = {};
        // Filtros de ID
        if (episodioId)
            where.episodioId = episodioId;
        if (profesionalId)
            where.profesionalId = profesionalId;
        // Búsqueda por contenido (Subjetivo, Objetivo, Análisis, Plan)
        if (search) {
            where.OR = [
                { subjetivo: { contains: search } },
                { objetivo: { contains: search } },
                { analisis: { contains: search } },
                { plan: { contains: search } },
            ];
        }
        const skip = (page - 1) * limit;
        const total = await prisma.notaClinica.count({ where });
        const notas = await prisma.notaClinica.findMany({
            where,
            skip,
            take: limit,
            orderBy: { createdAt: 'desc' },
            include: {
                profesional: { select: { id: true, nombres: true, apellidos: true } }
            },
        });
        // Retorno paginado...
        return {
            data: notas,
            pagination: { page, limit, total, pages: Math.ceil(total / limit) },
        };
    }
    // 2. Obtener nota por ID
    async getById(id) {
        const nota = await prisma.notaClinica.findUnique({
            where: { id },
            include: {
                profesional: { select: { id: true, nombres: true, apellidos: true } }
            },
        });
        if (!nota) {
            throw new Error(`Nota clínica ID ${id} no encontrada`);
        }
        return nota;
    }
    // 3. Crear nota clínica
    async create(data) {
        // Validación de negocio: Asegurar que el episodio y el profesional existen
        await this.validateDependencies(data.episodioId, data.profesionalId);
        const { diagnosticos, ...notaData } = data;
        return await prisma.notaClinica.create({
            data: {
                ...notaData,
                // Lógica para diagnosticos si se requiere anidar
            },
        });
    }
    // 4. Actualizar nota clínica
    async update(id, data) {
        await this.getById(id); // Verifica existencia
        if (data.episodioId || data.profesionalId) {
            // Se necesita el ID existente si no se proporciona el nuevo
            const existing = await this.getById(id);
            await this.validateDependencies(data.episodioId || existing.episodioId, data.profesionalId || existing.profesionalId);
        }
        return await prisma.notaClinica.update({
            where: { id },
            data: data,
        });
    }
    // 5. Eliminar nota clínica
    async delete(id) {
        await this.getById(id);
        return await prisma.notaClinica.delete({ where: { id } });
    }
    // --- LÓGICA DE VALIDACIÓN COMPARTIDA ---
    async validateDependencies(episodioId, profesionalId) {
        // Validar Episodio
        const episodio = await prisma.episodioAtencion.findUnique({ where: { id: episodioId } });
        if (!episodio) {
            throw new Error(`Episodio ID ${episodioId} no encontrado.`);
        }
        // Validar Profesional
        const profesional = await prisma.profesional.findUnique({ where: { id: profesionalId } });
        if (!profesional) {
            throw new Error(`Profesional ID ${profesionalId} no encontrado.`);
        }
    }
}
