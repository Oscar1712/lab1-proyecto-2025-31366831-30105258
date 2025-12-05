import { z } from 'zod';

// IDs son números, no UUIDs
export const idSchema = z.number().int().positive('ID debe ser un número positivo');

export const idParamSchema = z.string()
  .regex(/^\d+$/, 'ID debe ser un número')
  .transform((val) => Number(val))
  .refine((n) => n > 0, 'ID debe ser positivo');

// Fechas en formato ISO -> Date
export const dateSchema = z.string()
  .refine((val) => !isNaN(Date.parse(val)), {
    message: 'Fecha inválida. Use formato ISO (YYYY-MM-DD)',
  })
  .transform((val) => new Date(val));

// Enums
export const roles = ['admin', 'medico', 'recepcionista'] as const;
export const estados = ['activo', 'inactivo'] as const;
export const sexos = ['M', 'F'] as const;
export const tiposDocumento = ['DNI', 'PASAPORTE', 'CEDULA'] as const;
export const canalesCita = ['presencial', 'virtual'] as const;
export const estadosCita = ['solicitada', 'confirmada', 'cumplida', 'cancelada', 'noAsistida'] as const;
export const estadosBloque = ['abierto', 'cerrado', 'reservado'] as const;
export const tiposEpisodio = ['consulta', 'procedimiento', 'control', 'urgencia ambulatoria'] as const;
export const estadosEpisodio = ['abierto', 'cerrado'] as const;
export const tiposDiagnostico = ['presuntivo', 'definitivo'] as const;

// Validaciones comunes
export const emailSchema = z.string().email('Email inválido');

export const phoneSchema = z.string()
  .regex(/^\+?[1-9]\d{1,14}$/, 'Número de teléfono inválido')
  .optional()
  .or(z.literal(''));

// Passwords
export const passwordSchema = z.string()
  .min(8, 'La contraseña debe tener al menos 8 caracteres')
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    'Debe contener al menos una mayúscula, una minúscula y un número'
  );

// Paginación
export const paginationSchema = z.object({
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(10),
  search: z.string().optional(),
  sortBy: z.string().optional(),
  sortOrder: z.enum(['asc', 'desc']).default('asc'),
});