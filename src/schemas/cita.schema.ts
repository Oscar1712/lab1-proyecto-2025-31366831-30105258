import { z } from 'zod';
import { idParamSchema, dateSchema, canalesCita, estadosCita } from './base.schema.js';

export const citaSchema = z.object({
  personaId: z.number().int().positive('ID de persona inválido'),
  profesionalId: z.number().int().positive('ID de profesional inválido'),
  unidadId: z.number().int().positive('ID de unidad inválido'),
  inicio: dateSchema.refine(date => date >= new Date(), { message: 'La fecha debe ser futura' }),
  fin: dateSchema,
  motivo: z.string().min(5).max(2000),
  canal: z.enum(canalesCita),
  estado: z.enum(estadosCita).default('solicitada'),
  observaciones: z.string().max(2000).optional(),
}).refine(data => data.fin > data.inicio, {
  message: 'La fecha de fin debe ser posterior a la de inicio',
  path: ['fin'],
}).refine(data => {
  const duration = data.fin.getTime() - data.inicio.getTime();
  const hours = duration / (1000 * 60 * 60);
  return hours <= 4;
}, {
  message: 'La cita no puede durar más de 4 horas',
  path: ['fin'],
});

export const createCitaSchema = z.object({ body: citaSchema });

export const updateCitaSchema = z.object({
  params: z.object({ id: idParamSchema }),
  body: citaSchema.partial().refine(data => Object.keys(data).length > 0, {
    message: 'Debe proporcionar al menos un campo para actualizar',
  }),
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
  params: z.object({ id: idParamSchema }),
  body: z.object({
    estado: z.enum(estadosCita),
    observaciones: z.string().max(1000).optional(),
  }),
});

export const confirmarCitaSchema = z.object({
  params: z.object({ id: idParamSchema }),
  body: z.object({
    estado: z.literal('confirmada'),
    observaciones: z.string().max(1000).optional(),
  }),
});

export const cancelarCitaSchema = z.object({
  params: z.object({ id: idParamSchema }),
  body: z.object({
    estado: z.literal('cancelada'),
    observaciones: z.string().max(1000).optional(),
  }),
});

export const reprogramarCitaSchema = z.object({
  params: z.object({ id: idParamSchema }),
  body: z.object({
    inicio: dateSchema.refine(date => date >= new Date(), {
      message: 'La nueva fecha debe ser futura',
    }),
    fin: dateSchema,
  }).superRefine((data, ctx) => {
    if (data.fin <= data.inicio) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'La fecha de fin debe ser posterior a la de inicio',
        path: ['fin'],
      });
    }

    const duration = data.fin.getTime() - data.inicio.getTime();
    const hours = duration / (1000 * 60 * 60);
    if (hours > 4) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'La cita no puede durar más de 4 horas',
        path: ['fin'],
      });
    }
  }),
});

export const deleteCitaSchema = z.object({
  params: z.object({ id: idParamSchema }),
});

export const agendaProfesionalSchema = z.object({
  params: z.object({ profesionalId: idParamSchema }),
  query: z.object({
    fechaInicio: z.string().optional(),
    fechaFin: z.string().optional(),
  }),
});

// Tipos inferidos
export type CitaInput = z.infer<typeof citaSchema>;
export type CreateCitaInput = z.infer<typeof createCitaSchema>['body'];
export type UpdateCitaInput = z.infer<typeof updateCitaSchema>['body'];