import { z } from 'zod';
import { idParamSchema, emailSchema, phoneSchema, estados } from './base.schema.js';

export const profesionalSchema = z.object({
  nombres: z.string()
    .min(2, 'Nombres demasiado cortos')
    .max(100, 'Nombres demasiado largos'),
  
  apellidos: z.string()
    .min(2, 'Apellidos demasiado cortos')
    .max(100, 'Apellidos demasiado largos'),
  
  registroProfesional: z.string()
    .min(3, 'Registro profesional requerido')
    .max(50, 'Registro demasiado largo'),
  
  especialidad: z.string()
    .min(2, 'Especialidad requerida')
    .max(100, 'Especialidad demasiado larga'),
  
  correo: emailSchema.optional().or(z.literal('')),
  telefono: phoneSchema,
  
  agendaHabilitada: z.boolean().default(true),
  estado: z.enum(estados).default('activo'),
});

export const createProfesionalSchema = z.object({
  body: profesionalSchema,
});

export const updateProfesionalSchema = z.object({
  params: z.object({
    id: idParamSchema,
  }),
  body: profesionalSchema.partial().refine(
    data => Object.keys(data).length > 0,
    { message: 'Debe proporcionar al menos un campo para actualizar' }
  ),
});

export const getProfesionalAgendaSchema = z.object({
  params: z.object({
    id: idParamSchema,
  }),
  query: z.object({
    fecha: z.string()
      .refine(val => !isNaN(Date.parse(val)), 'Fecha inválida')
      .optional(),
    estado: z.enum(['abierto', 'cerrado', 'reservado']).optional(),
  }),
});

// Tipos inferidos
export type ProfesionalInput = z.infer<typeof profesionalSchema>;
export type CreateProfesionalInput = z.infer<typeof createProfesionalSchema>['body'];