// src/services/consentimientos.service.ts
import prisma from '../config/database.js';
export class ConsentimientoService {
    // 1. Obtener todos los consentimientos (generalmente por persona)
    async getAllByPersona(personaId) {
        return await prisma.consentimiento.findMany({
            where: { personaId },
            orderBy: { fecha: 'desc' },
        });
    }
    // 2. Obtener consentimiento por ID
    async getById(id) {
        const consentimiento = await prisma.consentimiento.findUnique({
            where: { id },
        });
        if (!consentimiento) {
            throw new Error(`Consentimiento ID ${id} no encontrado`);
        }
        return consentimiento;
    }
    // 3. Crear nuevo consentimiento
    async create(data) {
        // Validación de negocio: Asegurar que la persona exista
        await this.validatePersonaExistence(data.personaId);
        return await prisma.consentimiento.create({
            data: data,
        });
    }
    // 4. Actualizar consentimiento
    async update(id, data) {
        await this.getById(id); // Verifica existencia del consentimiento
        // Si se intenta cambiar la personaId, validamos su existencia
        if (data.personaId) {
            await this.validatePersonaExistence(data.personaId);
        }
        return await prisma.consentimiento.update({
            where: { id },
            data: data,
        });
    }
    // 5. Eliminar consentimiento
    async delete(id) {
        await this.getById(id); // Verifica existencia
        return await prisma.consentimiento.delete({ where: { id } });
    }
    // --- LÓGICA DE VALIDACIÓN COMPARTIDA ---
    /**
     * Verifica que la Persona a la que se intenta vincular el consentimiento exista.
     * @param personaId ID de la Persona.
     */
    async validatePersonaExistence(personaId) {
        // Nota: Asumo que tienes un modelo 'Persona' en tu schema.prisma
        const persona = await prisma.persona.findUnique({
            where: { id: personaId },
        });
        if (!persona) {
            throw new Error(`Persona ID ${personaId} no encontrada`);
        }
    }
}
