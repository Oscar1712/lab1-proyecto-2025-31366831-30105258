// services/profesionales.service.ts

import { PrismaClient, Profesional } from '@prisma/client';
// Se importa el tipo `Profesional` que Prisma genera a partir de tu schema.

// Inicializamos el cliente de Prisma
const prisma = new PrismaClient();

// Definimos un tipo que representa los datos necesarios para crear un profesional
// Omitimos el 'id', 'createdAt' y 'updatedAt' ya que la DB o Prisma los manejan
export type ProfesionalCreateData = Omit<Profesional, 'id' | 'createdAt' | 'updatedAt' | 'estaActivo'>;

/**
 * Lógica de negocio para la gestión de Profesionales.
 */
export const profesionalService = {

    /**
     * Obtiene todos los profesionales activos.
     */
    async findAllActive(): Promise<Profesional[]> {
        // La lógica de negocio establece que solo mostramos profesionales activos
        return prisma.profesional.findMany({
            where: {
                estaActivo: true,
            },
            // Puedes incluir relaciones aquí, por ejemplo: include: { citas: true }
        });
    },

    /**
     * Busca un profesional por su ID.
     */
    async findById(id: number): Promise<Profesional | null> {
        return prisma.profesional.findUnique({
            where: { id },
        });
    },

    /**
     * Crea un nuevo profesional en la base de datos.
     */
    async create(data: ProfesionalCreateData): Promise<Profesional> {
        // Lógica de negocio: Por ejemplo, encriptar un password si fuera necesario,
        // o verificar si la licencia ya existe (aunque Prisma ya lo maneja con `@unique`)
        return prisma.profesional.create({
            data,
        });
    },

    /**
     * Actualiza un profesional por su ID.
     */
    async update(id: number, data: Partial<ProfesionalCreateData>): Promise<Profesional> {
        // En un caso real, aquí se podría usar una Transacción para asegurar
        // que, si algo falla, no se guarda nada.
        try {
            return await prisma.profesional.update({
                where: { id },
                data,
            });
        } catch (error) {
            // Manejo de errores específico de Prisma (p. ej., si el ID no existe)
            // throw new Error('Error al actualizar el profesional.');
            throw error;
        }
    },

    /**
     * Desactiva lógicamente un profesional (Soft Delete).
     */
    async softDelete(id: number): Promise<Profesional> {
        return prisma.profesional.update({
            where: { id },
            data: {
                estaActivo: false, // Soft Delete
            },
        });
    },
};