import { z } from 'zod';
// ==================== ESQUEMAS BASE AJUSTADOS ====================
// IDs son números, no UUIDs
export const idSchema = z.number().int().positive('ID debe ser un número positivo');
export const idParamSchema = z.string()
    .regex(/^\d+$/, 'ID debe ser un número')
    .transform((val) => Number(val))
    .refine((n) => n > 0, 'ID debe ser positivo');
// Fechas en formato ISO -> se transforman a Date
export const dateSchema = z.string()
    .refine((val) => !isNaN(Date.parse(val)), {
    message: 'Fecha inválida. Use formato ISO (YYYY-MM-DD)',
})
    .transform((val) => new Date(val));
// Enums del sistema
export const roles = ['admin', 'medico', 'recepcionista'];
export const estados = ['activo', 'inactivo'];
export const sexos = ['M', 'F'];
export const tiposDocumento = ['DNI', 'PASAPORTE', 'CEDULA'];
export const canalesCita = ['presencial', 'virtual'];
export const estadosCita = ['solicitada', 'confirmada', 'cumplida', 'cancelada', 'noAsistida'];
export const estadosBloque = ['abierto', 'cerrado', 'reservado'];
export const tiposEpisodio = ['consulta', 'procedimiento', 'control', 'urgencia ambulatoria'];
export const estadosEpisodio = ['abierto', 'cerrado'];
export const tiposDiagnostico = ['presuntivo', 'definitivo'];
// Validaciones comunes
export const emailSchema = z.string().email('Email inválido');
export const phoneSchema = z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Número de teléfono inválido')
    .optional()
    .or(z.literal(''));
export const passwordSchema = z.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Debe contener al menos una mayúscula, una minúscula y un número');
// Paginación
export const paginationSchema = z.object({
    page: z.number().int().min(1).default(1),
    limit: z.number().int().min(1).max(100).default(10),
    search: z.string().optional(),
    sortBy: z.string().optional(),
    sortOrder: z.enum(['asc', 'desc']).default('asc'),
});
