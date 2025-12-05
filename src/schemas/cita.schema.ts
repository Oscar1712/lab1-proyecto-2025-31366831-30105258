import { z } from 'zod';
import { idParamSchema, dateSchema, canalesCita, estadosCita } from './base.schema.js';

export const citaSchema = z.object({
  personaId: z.number().int().positive('ID de persona inválido'),
  profesionalId: z.number().int().positive('ID de profesional inválido'),
  unidadId: z.number().int().positive('ID de unidad inválido'),
  
  inicio: dateSchema.refine(
    date => date >= new Date(),
    { message: 'La fecha debe ser futura' }
  ),
  
  fin: dateSchema,
  
  motivo: z.string()
    .min(5, 'Motivo demasiado corto')
    .max(2000, 'Motivo demasiado largo'),
  
  canal: z.enum(canalesCita),
  
  estado: z.enum(estadosCita).default('solicitada'),
  
  observaciones: z.string()
    .max(2000, 'Observaciones demasiado largas')
    .optional(),
}).refine(
  data => data.fin > data.inicio,
  {
    message: 'La fecha de fin debe ser posterior a la de inicio',
    path: ['fin'],
  }
).refine(
  data => {
    const duration = data.fin.getTime() - data.inicio.getTime();
    const hours = duration / (1000 * 60 * 60);
    return hours <= 4; // Máximo 4 horas por cita
  },
  {
    message: 'La cita no puede durar más de 4 horas',
    path: ['fin'],
  }
);

export const createCitaSchema = z.object({
  body: citaSchema,
});

export const updateCitaSchema = z.object({
  params: z.object({
    id: idParamSchema,
  }),
  body: citaSchema.partial().refine(
    data => Object.keys(data).length > 0,
    { message: 'Debe proporcionar al menos un campo para actualizar' }
  ),
});

export const searchCitasSchema = z.object({
  query: z.object({
    personaId: z.string().regex(/^\d+$/).transform(Number).optional(),
    profesionalId: z.string().regex(/^\d+$/).transform(Number).optional(),
    unidadId: z.string().regex(/^\d+$/).transform(Number).optional(),
    fechaInicio: z.string().optional(),
    fechaFin: z.string().optional(),
    estado: z.enum(estadosCita).optional(),
    canal: z.enum(canalesCita).optional(),
  }),
});

export const cambiarEstadoCitaSchema = z.object({
  params: z.object({
    id: idParamSchema,
  }),
  body: z.object({
    estado: z.enum(estadosCita),
    observaciones: z.string().max(1000).optional(),
  }),
});

// Tipos inferidos
export type CitaInput = z.infer<typeof citaSchema>;
export type CreateCitaInput = z.infer<typeof createCitaSchema>['body'];
export type UpdateCitaInput = z.infer<typeof updateCitaSchema>['body'];