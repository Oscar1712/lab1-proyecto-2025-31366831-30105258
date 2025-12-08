import { z } from 'zod';
import { idParamSchema, phoneSchema, estados } from './base.schema.js';
export const unidadAtencionSchema = z.object({
    nombre: z.string()
        .min(2, 'Nombre demasiado corto')
        .max(100, 'Nombre demasiado largo'),
    tipo: z.string()
        .min(2, 'Tipo requerido')
        .max(50, 'Tipo demasiado largo'),
    direccion: z.string()
        .max(200, 'Dirección demasiado larga')
        .optional()
        .or(z.literal('')),
    telefono: phoneSchema,
    horarioReferencia: z.string()
        .max(200, 'Horario demasiado largo')
        .optional()
        .or(z.literal('')),
    estado: z.enum(estados).default('activo'),
});
export const createUnidadSchema = z.object({
    body: unidadAtencionSchema,
});
export const updateUnidadSchema = z.object({
    params: z.object({
        id: idParamSchema,
    }),
    body: unidadAtencionSchema.partial(),
});
