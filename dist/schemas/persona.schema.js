import { z } from 'zod';
import { idParamSchema, dateSchema, sexos, tiposDocumento, estados, phoneSchema, emailSchema } from './base.schema.js';
export const personaAtendidaSchema = z.object({
    tipoDocumento: z.enum(tiposDocumento),
    numeroDocumento: z.string()
        .min(3, 'Número de documento requerido')
        .max(20, 'Documento demasiado largo'),
    nombres: z.string()
        .min(2, 'Nombres demasiado cortos')
        .max(100, 'Nombres demasiado largos')
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'Solo letras y espacios'),
    apellidos: z.string()
        .min(2, 'Apellidos demasiado cortos')
        .max(100, 'Apellidos demasiado largos')
        .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'Solo letras y espacios'),
    fechaNacimiento: dateSchema.refine(date => {
        const age = new Date().getFullYear() - date.getFullYear();
        return age >= 0 && age <= 120;
    }, { message: 'Fecha de nacimiento inválida' }),
    sexo: z.enum(sexos),
    correo: emailSchema.optional().or(z.literal('')),
    telefono: phoneSchema,
    direccion: z.string()
        .max(200, 'Dirección demasiado larga')
        .optional()
        .or(z.literal('')),
    contactoEmergencia: z.string()
        .max(100, 'Contacto de emergencia demasiado largo')
        .optional()
        .or(z.literal('')),
    alergias: z.string()
        .max(2000, 'Texto demasiado largo')
        .optional(),
    antecedentesResumen: z.string()
        .max(2000, 'Texto demasiado largo')
        .optional(),
    estado: z.enum(estados).default('activo'),
});
export const createPersonaSchema = z.object({
    body: personaAtendidaSchema,
});
export const updatePersonaSchema = z.object({
    params: z.object({
        id: idParamSchema,
    }),
    body: personaAtendidaSchema.partial().refine(data => Object.keys(data).length > 0, { message: 'Debe proporcionar al menos un campo para actualizar' }),
});
export const getPersonaSchema = z.object({
    params: z.object({
        id: idParamSchema,
    }),
});
export const searchPersonasSchema = z.object({
    query: z.object({
        documento: z.string().optional(),
        nombres: z.string().optional(),
        apellidos: z.string().optional(),
        estado: z.enum(estados).optional(),
        limit: z.string().regex(/^\d+$/).transform(val => Number(val)).default(() => 10),
        page: z.string().regex(/^\d+$/).transform(val => Number(val)).default(() => 1),
    }),
});
//# sourceMappingURL=persona.schema.js.map