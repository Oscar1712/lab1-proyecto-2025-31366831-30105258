import { z } from 'zod';
// ==================== SCHEMAS BASE ====================
export const idSchema = z.string().uuid('ID inválido');
export const numericIdSchema = z.string().regex(/^\d+$/, 'Debe ser un número').transform(Number);
export const emailSchema = z.string().email('Email inválido');
export const passwordSchema = z.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Debe contener al menos una mayúscula, una minúscula y un número');
// Esquema para fechas
export const dateSchema = z.string().refine((val) => !isNaN(Date.parse(val)), { message: 'Fecha inválida' }).transform(val => new Date(val));
// Esquema para paginación
export const paginationSchema = z.object({
    page: z.number().int().min(1).default(1),
    limit: z.number().int().min(1).max(100).default(10),
    search: z.string().optional(),
});
// ==================== EXPORTAR TODOS LOS SCHEMAS ====================
export * from './auth.schema.js';
export * from './persona.schema.js';
export * from './profesional.schema.js';
export * from './cita.schema.js';
export * from './bloqueAgenda.schema.js';
export * from './episodio.schema.js';
export * from './diagnostico.schema.js';
export * from './consentimiento.schema.js';
//# sourceMappingURL=index.js.map