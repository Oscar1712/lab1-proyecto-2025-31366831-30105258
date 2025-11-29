// services/unidades.service.ts
import { PrismaClient, UnidadesAtencion, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
export type UnidadCreateData = Prisma.UnidadesAtencionCreateInput;

export const unidadesService = {

    async findAllActive(): Promise<UnidadesAtencion[]> {
        return prisma.unidadesAtencion.findMany({
            where: { estado: 'activo' },
        });
    },

    async findById(id: number): Promise<UnidadesAtencion | null> {
        return prisma.unidadesAtencion.findUnique({
            where: { id },
        });
    },

    async create(data: UnidadCreateData): Promise<UnidadesAtencion> {
        // Lógica de negocio: Validar que el tipo sea 'sede', 'consultorio' o 'servicio'
        return prisma.unidadesAtencion.create({ data });
    },

    async update(id: number, data: Partial<UnidadCreateData>): Promise<UnidadesAtencion> {
        return prisma.unidadesAtencion.update({ where: { id }, data });
    },

    async softDelete(id: number): Promise<UnidadesAtencion> {
        return prisma.unidadesAtencion.update({
            where: { id },
            data: { estado: 'inactivo' },
        });
    },
};