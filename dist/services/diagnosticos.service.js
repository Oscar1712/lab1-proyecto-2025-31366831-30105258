// src/services/diagnosticos.service.ts
import prisma from '../config/database.js'; // 🟢 Correcto: Usando el Singleton
export class DiagnosticoService {
    // 1. Obtener todos los diagnósticos (generalmente, se buscarán por episodio)
    async getAllByEpisode(episodioId) {
        return await prisma.diagnostico.findMany({
            where: { episodioId },
            orderBy: { principal: 'desc' }, // Mostrar principal primero
        });
    }
    // 2. Obtener diagnóstico por ID
    async getById(id) {
        const diagnostico = await prisma.diagnostico.findUnique({
            where: { id },
        });
        if (!diagnostico) {
            throw new Error(`Diagnóstico ID ${id} no encontrado`);
        }
        return diagnostico;
    }
    // 3. Crear nuevo diagnóstico
    async create(data) {
        // Validación de negocio: Asegurar que el episodio exista
        await this.validateEpisodioExistence(data.episodioId);
        // Lógica de unicidad (Opcional): Si un diagnóstico debe ser único por episodio.
        return await prisma.diagnostico.create({
            data: data,
        });
    }
    // 4. Actualizar diagnóstico
    async update(id, data) {
        await this.getById(id); // Verifica existencia del diagnóstico
        // Si se intenta cambiar el episodioId, validamos su existencia
        if (data.episodioId) {
            await this.validateEpisodioExistence(data.episodioId);
        }
        return await prisma.diagnostico.update({
            where: { id },
            data: data,
        });
    }
    // 5. Eliminar diagnóstico
    async delete(id) {
        await this.getById(id); // Verifica existencia
        return await prisma.diagnostico.delete({ where: { id } });
    }
    // --- LÓGICA DE VALIDACIÓN COMPARTIDA ---
    /**
     * Verifica que el Episodio de Atención al que se intenta vincular el diagnóstico exista.
     * @param episodioId ID del Episodio de Atención.
     */
    async validateEpisodioExistence(episodioId) {
        const episodio = await prisma.episodioAtencion.findUnique({
            where: { id: episodioId },
        });
        if (!episodio) {
            throw new Error(`Episodio de atención ID ${episodioId} no encontrado`);
        }
    }
}
//# sourceMappingURL=diagnosticos.service.js.map