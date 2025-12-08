import { z } from 'zod';
import { idParamSchema, dateSchema, tiposEpisodio, estadosEpisodio } from './base.schema.js';
// =======================================================================
// 1. ESQUEMAS BASE Y DE OPERACIÓN
// =======================================================================
export const episodioAtencionSchema = z.object({
    personaId: z.number().int().positive('ID de persona inválido'),
    motivo: z.string()
        .min(5, 'Motivo demasiado corto')
        .max(2000, 'Motivo demasiado largo'),
    tipo: z.enum(tiposEpisodio),
    estado: z.enum(estadosEpisodio).default('abierto'),
    fechaApertura: dateSchema.default(() => new Date()),
});
export const createEpisodioSchema = z.object({
    body: episodioAtencionSchema,
});
export const updateEpisodioSchema = z.object({
    params: z.object({
        id: idParamSchema,
    }),
    body: episodioAtencionSchema.partial(),
});
export const cerrarEpisodioSchema = z.object({
    params: z.object({
        id: idParamSchema,
    }),
    body: z.object({
        observacionesCierre: z.string().max(1000).optional(),
    }),
});
// =======================================================================
// 2. ESQUEMA DE BÚSQUEDA (AGREGADO)
// =======================================================================
/**
 * Esquema para la validación de los Query Parameters en la búsqueda (GET /episodios).
 * Nota: Los IDs y la paginación vienen como strings y deben ser transformados a Number.
 */
export const searchEpisodiosSchema = z.object({
    query: z.object({
        // Filtros de modelo
        personaId: z.string().regex(/^\d+$/).transform(Number).optional(),
        tipo: z.enum(tiposEpisodio).optional(),
        estado: z.enum(estadosEpisodio).optional(),
        // Filtro de fechas (opcional)
        fechaAperturaDesde: z.string().optional(),
        fechaAperturaHasta: z.string().optional(),
        // Paginación
        page: z.string().regex(/^\d+$/).transform(Number).optional(),
        limit: z.string().regex(/^\d+$/).transform(Number).optional(),
    }).optional(), // Permitimos que la query sea completamente opcional si no hay filtros
});
