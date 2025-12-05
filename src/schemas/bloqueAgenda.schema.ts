import { z } from 'zod';
import { idParamSchema, dateSchema, estadosBloque } from './base.schema.js';

export const bloqueAgendaSchema = z.object({
  profesionalId: z.number().int().positive('ID de profesional inválido'),
  unidadId: z.number().int().positive('ID de unidad inválido'),
  
  inicio: dateSchema.refine(
    date => date >= new Date(),
    { message: 'La fecha de inicio debe ser futura' }
  ),
  
  fin: dateSchema,
  
  capacidad: z.number()
    .int()
    .min(1, 'La capacidad mínima es 1')
    .max(20, 'La capacidad máxima es 20')
    .default(1),
  
  estado: z.enum(estadosBloque).default('abierto'),
}).refine(
  data => data.fin > data.inicio,
  {
    message: 'La fecha de fin debe ser posterior a la de inicio',
    path: ['fin'],
  }
).refine(
  data => {
    const duration = data.fin.getTime() - data.inicio.getTime();
    const minutes = duration / (1000 * 60);
    return minutes >= 15 && minutes <= 480; // Entre 15 minutos y 8 horas
  },
  {
    message: 'La duración debe estar entre 15 minutos y 8 horas',
    path: ['fin'],
  }
);

export const createBloqueAgendaSchema = z.object({
  body: bloqueAgendaSchema,
});

export const updateBloqueAgendaSchema = z.object({
  params: z.object({
    id: idParamSchema,
  }),
  body: bloqueAgendaSchema.partial().refine(
    data => {
      if (data.inicio && data.fin && new Date(data.fin) <= new Date(data.inicio)) {
        return false;
      }
      return true;
    },
    {
      message: 'La fecha de fin debe ser posterior a la de inicio',
      path: ['fin'],
    }
  ),
});

export const searchBloquesSchema = z.object({
  query: z.object({
    profesionalId: z.string().regex(/^\d+$/).transform(Number).optional(),
    unidadId: z.string().regex(/^\d+$/).transform(Number).optional(),
    fechaInicio: z.string().optional(),
    fechaFin: z.string().optional(),
    estado: z.enum(estadosBloque).optional(),
  }),
});

// Tipos inferidos
export type BloqueAgendaInput = z.infer<typeof bloqueAgendaSchema>;