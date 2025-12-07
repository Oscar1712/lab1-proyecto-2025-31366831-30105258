import { z } from 'zod';
import { idParamSchema, tiposDiagnostico } from './base.schema.js';
export const diagnosticoSchema = z.object({
    episodioId: z.number().int().positive('ID de episodio inválido'),
    codigo: z.string()
        .min(3, 'Código demasiado corto')
        .max(20, 'Código demasiado largo')
        .regex(/^[A-Z0-9\.]+$/, 'Formato de código inválido (ej: A00.1)'),
    descripcion: z.string()
        .min(5, 'Descripción demasiado corta')
        .max(500, 'Descripción demasiado larga'),
    tipo: z.enum(tiposDiagnostico),
    principal: z.boolean().default(false),
});
export const createDiagnosticoSchema = z.object({
    body: diagnosticoSchema,
});
export const updateDiagnosticoSchema = z.object({
    params: z.object({
        id: idParamSchema,
    }),
    body: diagnosticoSchema.partial(),
});
//# sourceMappingURL=diagnostico.schema.js.map