// src/schemas/notaClinica.schema.ts

import { z } from 'zod';
import { idParamSchema, tiposDiagnostico } from './base.schema.js'; 
import { paginationSchema } from './base.schema.js'; // Si tienes un esquema de paginación reusable

// Define la estructura de la Nota Clínica
export const notaClinicaSchema = z.object({
  episodioId: z.number().int().positive('ID de episodio inválido'),
  profesionalId: z.number().int().positive('ID de profesional inválido'),
  
  // Contenido de la nota (SOAP format)
  subjetivo: z.string().max(4000).optional(), 
  objetivo: z.string().max(4000).optional(), 
  analisis: z.string().max(4000).optional(), 
  plan: z.string().max(4000).optional(), 
  
  // Diagnósticos asociados a la nota 
  diagnosticos: z.array(z.object({
    cie10Code: z.string().max(10),
    tipo: z.enum(tiposDiagnostico), 
    principal: z.boolean().default(false)
  })).optional(),
});

// Esquema para la creación (Body)
export const createNotaClinicaSchema = z.object({
  body: notaClinicaSchema,
});

// Esquema para la actualización (Body y Params)
export const updateNotaClinicaSchema = z.object({
  params: z.object({
    id: idParamSchema,
  }),
  body: notaClinicaSchema.partial(),
});

// Esquema para la búsqueda/listado (Query Params)
export const searchNotasClinicasSchema = z.object({
  query: z.object({
    // 🟢 REUTILIZACIÓN: Usamos idParamSchema, ya que transforma string -> Number y valida positivo.
    episodioId: idParamSchema.optional(), 
    profesionalId: idParamSchema.optional(), 
    search: z.string().optional(), 

    // 🟢 REUTILIZACIÓN DE PAGINACIÓN: Si no quieres anidar todo paginationSchema
    // Usamos idParamSchema para Page y Limit, ya que cumplen la misma función: string -> number > 0
    page: idParamSchema.optional(),
    limit: idParamSchema.optional(),
  }).optional(),
});

// Tipos inferidos
export type NotaClinicaInput = z.infer<typeof notaClinicaSchema>;
export type SearchNotasClinicasQuery = z.infer<typeof searchNotasClinicasSchema>['query'];