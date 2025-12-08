// src/schemas/profesional.schema.ts
import { z } from 'zod';

// Body schema (solo el objeto con campos del profesional)
export const profesionalBodySchema = z.object({
  registroProfesional: z.string().min(1, 'El registro profesional es obligatorio'),
  nombres: z.string().min(1, 'El nombre es obligatorio'),
  apellidos: z.string().min(1, 'El apellido es obligatorio'),
  especialidad: z.string().min(1, 'La especialidad es obligatoria'),
  correo: z.string().email('Correo inválido').optional(),
  telefono: z.string().optional(),
  estado: z.enum(['activo', 'inactivo']).optional(),
});

// Para compatibilidad con middleware validate(schema) que espera { body, query, params }
export const createProfesionalSchema = z.object({
  body: profesionalBodySchema,
});

export const updateProfesionalSchema = z.object({
  body: profesionalBodySchema.partial(), // todos opcionales
});

// Tipos exportados para uso en controllers/services
export type CreateProfesionalInput = z.infer<typeof profesionalBodySchema>;
export type UpdateProfesionalInput = Partial<CreateProfesionalInput>;