// src/services/personasAtendidas.service.ts

// Importación de Prisma y Tipos
import prisma from '../config/database'; 
import * as PrismaTypes from '@prisma/client'; 

// Definición de Tipos
type PersonaAtendida = PrismaTypes.PersonaAtendida;
export type PersonaCreateData = PrismaTypes.Prisma.PersonaAtendidaCreateInput;
export type PersonaUpdateData = PrismaTypes.Prisma.PersonaAtendidaUpdateInput;


export const personasService = {
    // Crear una persona
    async createPersona(data: PersonaCreateData): Promise<PersonaAtendida> {
        return prisma.personaAtendida.create({ data });
    },

    // Obtener todas las personas
    async findAll(): Promise<PersonaAtendida[]> {
        return prisma.personaAtendida.findMany();
    },

    // Obtener una persona específica
    async getPersonaById(id: number): Promise<PersonaAtendida | null> {
        return prisma.personaAtendida.findUnique({
            where: { id: id },
        });
    },
    
    // Actualizar datos de persona
    async updatePersona(id: number, data: PersonaUpdateData): Promise<PersonaAtendida | null> {
        // Asegúrate de que el campo 'softDelete' no exista en data si no lo quieres actualizar
        const updatedPersona = await prisma.personaAtendida.update({
            where: { id: id },
            data: data,
        });
        return updatedPersona;
    },

    // Borrado Lógico (Soft Delete)
    async softDelete(id: number): Promise<PersonaAtendida> {
        return prisma.personaAtendida.update({
            where: { id: id },
            data: { softDelete: true }, 
        });
    },
};