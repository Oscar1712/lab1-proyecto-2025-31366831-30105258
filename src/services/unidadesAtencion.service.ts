// src/services/unidadesAtencion.service.ts

// Importación de Prisma y Tipos
import prisma from '../config/database'; 
import * as PrismaTypes from '@prisma/client'; 

// Definición de Tipos
type UnidadAtencion = PrismaTypes.UnidadAtencion;
export type UnidadCreateData = PrismaTypes.Prisma.UnidadAtencionCreateInput;
export type UnidadUpdateData = PrismaTypes.Prisma.UnidadAtencionUpdateInput;

export const unidadesAtencionService = {

    // Crear una unidad de atención
    async createUnidad(data: UnidadCreateData): Promise<UnidadAtencion> {
        return prisma.unidadAtencion.create({ data });
    },

    // Obtener todas las unidades
    async getAllUnidades(): Promise<UnidadAtencion[]> {
        return prisma.unidadAtencion.findMany({
            where: { softDelete: false }
        });
    },

    // Obtener unidad por ID
    async getUnidadById(id: number): Promise<UnidadAtencion | null> {
        return prisma.unidadAtencion.findUnique({
            where: { id: id },
        });
    },

    // Actualizar unidad
    async updateUnidad(id: number, data: UnidadUpdateData): Promise<UnidadAtencion | null> {
        return prisma.unidadAtencion.update({
            where: { id: id },
            data: data,
        });
    },

    // Borrado Lógico
    async softDeleteUnidad(id: number): Promise<UnidadAtencion> {
        return prisma.unidadAtencion.update({
            where: { id: id },
            data: { softDelete: true },
        });
    },
};