// src/services/unidadesAtencion.service.ts

// 1. Importación de Prisma y Tipos
import prisma from '../config/database'; 
import * as PrismaTypes from '@prisma/client'; 

// Definición de Tipos
type UnidadAtencion = PrismaTypes.UnidadAtencion;
export type UnidadCreateData = PrismaTypes.Prisma.UnidadAtencionCreateInput;
export type UnidadUpdateData = PrismaTypes.Prisma.UnidadAtencionUpdateInput;

export const unidadesAtencionService = {

    // 1. Crear una unidad de atención
    async createUnidad(data: UnidadCreateData): Promise<UnidadAtencion> {
        return prisma.unidadAtencion.create({ data });
    },

    // 2. Obtener todas las unidades
    async getAllUnidades(): Promise<UnidadAtencion[]> {
        return prisma.unidadAtencion.findMany({
            where: { softDelete: false }
        });
    },

    // 3. Obtener unidad por ID
    // 🛑 CORRECCIÓN DE TIPADO: El ID es un número
    async getUnidadById(id: number): Promise<UnidadAtencion | null> {
        return prisma.unidadAtencion.findUnique({
            where: { id: id },
        });
    },

    // 4. Actualizar unidad
    // 🛑 CORRECCIÓN DE TIPADO: El ID es un número
    async updateUnidad(id: number, data: UnidadUpdateData): Promise<UnidadAtencion | null> {
        return prisma.unidadAtencion.update({
            where: { id: id },
            data: data,
        });
    },

    // 5. Borrado Lógico
    // 🛑 CORRECCIÓN DE TIPADO: El ID es un número
    async softDeleteUnidad(id: number): Promise<UnidadAtencion> {
        return prisma.unidadAtencion.update({
            where: { id: id },
            data: { softDelete: true },
        });
    },
};