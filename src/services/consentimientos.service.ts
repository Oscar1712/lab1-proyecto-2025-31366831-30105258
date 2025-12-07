// src/services/consentimientos.service.ts

import prisma from '../config/database.js'; 

// 🟢 CORRECCIÓN: Usar el paquete estándar de Prisma
import type { 
    Prisma, 
    Consentimiento as PrismaConsentimiento,
    // (Añade aquí otros tipos de modelos que uses en este archivo)
} from '@prisma/client'; 

import type { ConsentimientoInput } from '../schemas/consentimiento.schema.js';

type ConsentimientoWhereInput = Prisma.ConsentimientoWhereInput; // ✅ Funciona por la corrección anterior
type Consentimiento = PrismaConsentimiento;
export class ConsentimientoService {

    // 1. Obtener todos los consentimientos (generalmente por persona)
    async getAllByPersona(personaId: number): Promise<Consentimiento[]> {
        return await prisma.consentimiento.findMany({
            where: { personaId },
            orderBy: { fecha: 'desc' }, 
        });
    }

    // 2. Obtener consentimiento por ID
    async getById(id: number): Promise<Consentimiento> {
        const consentimiento = await prisma.consentimiento.findUnique({
            where: { id },
        });

        if (!consentimiento) {
            throw new Error(`Consentimiento ID ${id} no encontrado`);
        }
        return consentimiento; 
    }

    // 3. Crear nuevo consentimiento
    async create(data: ConsentimientoInput): Promise<Consentimiento> {
        // Validación de negocio: Asegurar que la persona exista
        await this.validatePersonaExistence(data.personaId);
        
        return await prisma.consentimiento.create({
            data: data,
        });
    }

    // 4. Actualizar consentimiento
    async update(id: number, data: Partial<ConsentimientoInput>): Promise<Consentimiento> {
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
    async delete(id: number): Promise<Consentimiento> {
        await this.getById(id); // Verifica existencia
        return await prisma.consentimiento.delete({ where: { id } });
    }

    // --- LÓGICA DE VALIDACIÓN COMPARTIDA ---
    
    /**
     * Verifica que la Persona a la que se intenta vincular el consentimiento exista.
     * @param personaId ID de la Persona.
     */
    private async validatePersonaExistence(personaId: number): Promise<void> {
        // Nota: Asumo que tienes un modelo 'Persona' en tu schema.prisma
        const persona = await prisma.persona.findUnique({
            where: { id: personaId },
        });

        if (!persona) {
            throw new Error(`Persona ID ${personaId} no encontrada`);
        }
    }
}