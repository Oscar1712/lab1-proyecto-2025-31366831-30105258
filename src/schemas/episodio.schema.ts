import { z } from 'zod';
import { idParamSchema, dateSchema, tiposEpisodio, estadosEpisodio } from './base.schema.js';

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

// Tipos inferidos
export type EpisodioAtencionInput = z.infer<typeof episodioAtencionSchema>;