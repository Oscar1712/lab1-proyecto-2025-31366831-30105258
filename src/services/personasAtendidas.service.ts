// src/services/personasAtendidas.service.ts

// 1. Importación de Prisma y Tipos
import prisma from '../config/database'; 
import * as PrismaTypes from '@prisma/client'; 

// Definición de Tipos
type PersonaAtendida = PrismaTypes.PersonaAtendida;
export type PersonaCreateData = PrismaTypes.Prisma.PersonaAtendidaCreateInput;
export type PersonaUpdateData = PrismaTypes.Prisma.PersonaAtendidaUpdateInput;


export const personasService = {
    // 1. Crear una persona
    async createPersona(data: PersonaCreateData): Promise<PersonaAtendida> {
        return prisma.personaAtendida.create({ data });
    },

    // 2. Obtener todas las personas
    async findAll(): Promise<PersonaAtendida[]> {
        return prisma.personaAtendida.findMany();
    },

    // 3. Obtener una persona específica
    // 🛑 CORRECCIÓN DE TIPADO: El ID del controlador es un número
    async getPersonaById(id: number): Promise<PersonaAtendida | null> {
        return prisma.personaAtendida.findUnique({
            where: { id: id },
        });
    },
    
    // 4. Actualizar datos de persona
    // 🛑 CORRECCIÓN DE TIPADO: El ID del controlador es un número
    async updatePersona(id: number, data: PersonaUpdateData): Promise<PersonaAtendida | null> {
        // Asegúrate de que el campo 'softDelete' no exista en data si no lo quieres actualizar
        const updatedPersona = await prisma.personaAtendida.update({
            where: { id: id },
            data: data,
        });
        return updatedPersona;
    },

    // 5. Borrado Lógico (Soft Delete)
    // 🛑 CORRECCIÓN DE TIPADO: El ID del controlador es un número
    async softDelete(id: number): Promise<PersonaAtendida> {
        return prisma.personaAtendida.update({
            where: { id: id },
            data: { softDelete: true }, 
        });
    },
};