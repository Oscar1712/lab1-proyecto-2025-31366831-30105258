import { z } from 'zod';
// Asegúrate de que estas importaciones sean correctas para tu proyecto
import { idParamSchema, dateSchema, estadosBloque } from './base.schema.js';

/**
 * Esquema base para los datos de creación y actualización del Bloque de Agenda.
 */
export const bloqueAgendaSchema = z.object({
  profesionalId: z.number().int().positive('ID de profesional inválido'),
  unidadId: z.number().int().positive('ID de unidad inválido'),
  
  // Validación de que la fecha de inicio es futura (damos 1 segundo de margen)
  inicio: dateSchema.refine(
    date => date.getTime() >= Date.now() - 1000,
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
  // Refine 1: La fecha de fin debe ser posterior a la de inicio
  data => data.fin > data.inicio,
  {
    message: 'La fecha de fin debe ser posterior a la de inicio',
    path: ['fin'],
  }
).refine(
  // Refine 2: Duración entre 15 minutos y 8 horas
  data => {
    const duration = data.fin.getTime() - data.inicio.getTime();
    const minutes = duration / (1000 * 60);
    return minutes >= 15 && minutes <= 480; 
  },
  {
    message: 'La duración debe estar entre 15 minutos y 8 horas',
    path: ['fin'],
  }
);

// ----------------------------------------------------------------------
// Esquemas para Validación de Solicitudes (Middleware)
// ----------------------------------------------------------------------

/**
 * Esquema para la validación del body en la creación (POST).
 */
export const createBloqueAgendaSchema = z.object({
  body: bloqueAgendaSchema,
});

/**
 * Esquema para la validación en la actualización (PUT).
 * Valida parámetros y permite que el body sea parcial, pero verifica que si 
 * se envían inicio y fin, fin sea mayor que inicio.
 */
export const updateBloqueAgendaSchema = z.object({
  params: z.object({
    id: idParamSchema,
  }),
  body: bloqueAgendaSchema.partial().refine(
    data => {
      // Solo validamos la relación inicio/fin si ambas están presentes en la actualización
      if (data.inicio && data.fin) {
        return data.fin > data.inicio;
      }
      return true;
    },
    {
      message: 'La fecha de fin debe ser posterior a la de inicio',
      path: ['fin'],
    }
  ),
});

/**
 * Esquema para la validación de los Query Parameters en la búsqueda (GET).
 */
export const searchBloquesSchema = z.object({
  query: z.object({
    // Transformamos los strings de query a Number
    profesionalId: z.string().regex(/^\d+$/).transform(Number).optional(),
    unidadId: z.string().regex(/^\d+$/).transform(Number).optional(),
    
    // Las fechas de inicio/fin en la query serán strings (ISO 8601 o similar)
    fechaInicio: z.string().optional(),
    fechaFin: z.string().optional(),
    
    estado: z.enum(estadosBloque).optional(),

    // Paginación (asumiendo que se pasan como strings en la URL)
    page: z.string().regex(/^\d+$/).transform(Number).optional(),
    limit: z.string().regex(/^\d+$/).transform(Number).optional(),
  }),
});


// ----------------------------------------------------------------------
// Tipos Inferidos para TypeScript (Importaciones en Service/Controller)
// ----------------------------------------------------------------------

/**
 * Tipo para los datos de entrada del body (Creación).
 */
export type BloqueAgendaInput = z.infer<typeof bloqueAgendaSchema>;

/**
 * 🟢 SOLUCIÓN: Tipo para los Query Parameters de búsqueda.
 * Accedemos a la propiedad 'query' del tipo inferido.
 */
export type SearchBloquesQuery = z.infer<typeof searchBloquesSchema>['query'];