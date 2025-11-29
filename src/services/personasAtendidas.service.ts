// services/personas.service.ts
import { PrismaClient, PersonasAtendidas, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
// Tipo para datos de creación (omitiendo campos generados por DB)
export type PersonaCreateData = Prisma.PersonasAtendidasCreateInput;

export const personasService = {

    // Consulta de todos los pacientes activos
    async findAllActive(): Promise<PersonasAtendidas[]> {
        return prisma.personasAtendidas.findMany({
            where: { estado: 'activo' },
        });
    },

    // Consulta de un paciente por ID
    async findById(id: number): Promise<PersonasAtendidas | null> {
        return prisma.personasAtendidas.findUnique({
            where: { id },
            include: { contactosEmergencia: true, alergias: true }, // Asumiendo que estos son modelos relacionados
        });
    },

    // Creación de un nuevo paciente
    async create(data: PersonaCreateData): Promise<PersonasAtendidas> {
        // Lógica de negocio: Por ejemplo, normalizar números de teléfono/documento
        return prisma.personasAtendidas.create({
            data,
        });
    },

    // Actualización de datos del paciente
    async update(id: number, data: Partial<PersonaCreateData>): Promise<PersonasAtendidas> {
        return prisma.personasAtendidas.update({
            where: { id },
            data: data,
        });
    },

    // Baja/Inactivación lógica
    async softDelete(id: number): Promise<PersonasAtendidas> {
        return prisma.personasAtendidas.update({
            where: { id },
            data: { estado: 'inactivo' },
        });
    },
};