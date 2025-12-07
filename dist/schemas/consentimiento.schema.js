import { z } from 'zod';
import { idParamSchema, dateSchema } from './base.schema.js';
export const consentimientoSchema = z.object({
    personaId: z.number().int().positive('ID de persona inválido'),
    tipoProcedimiento: z.string()
        .min(3, 'Tipo de procedimiento requerido')
        .max(200, 'Tipo demasiado largo'),
    fecha: dateSchema.default(() => new Date()),
    metodo: z.string()
        .min(3, 'Método requerido')
        .max(100, 'Método demasiado largo'),
    archivoId: z.string()
        .max(100, 'ID de archivo demasiado largo')
        .optional()
        .or(z.literal('')),
});
export const createConsentimientoSchema = z.object({
    body: consentimientoSchema,
});
export const updateConsentimientoSchema = z.object({
    params: z.object({
        id: idParamSchema,
    }),
    body: consentimientoSchema.partial(),
});
//# sourceMappingURL=consentimiento.schema.js.map