//src/schemas/personaAtendida.schema.ts
import { z } from 'zod';

export const createPersonaAtendidaSchema = z.object({
  body: z.object({
    nombre: z.string().min(1, "El nombre es obligatorio"),
    apellido: z.string().min(1, "El apellido es obligatorio"),
    fechaNacimiento: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Fecha de nacimiento no válida",
    }),
    genero: z.enum(['M', 'F', 'Otro']),
    direccion: z.string().optional(),
    telefono: z.string().optional(),
    email: z.string().email("Email no válido").optional(),
    documentoIdentidad: z.string().min(1, "Documento de identidad es obligatorio"),
    estado: z.enum(['activo', 'inactivo']).default('activo'),
  }),
});

export const updatePersonaAtendidaSchema = z.object({
  params: z.object({
    id: z.string().refine((val) => !isNaN(Number(val)), {
      message: "ID debe ser un número",
    }),
  }),
  body: z.object({
    nombre: z.string().min(1).optional(),
    apellido: z.string().min(1).optional(),
    fechaNacimiento: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Fecha de nacimiento no válida",
    }).optional(),
    genero: z.enum(['M', 'F', 'Otro']).optional(),
    direccion: z.string().optional(),
    telefono: z.string().optional(),
    email: z.string().email().optional(),
    documentoIdentidad: z.string().min(1).optional(),
    estado: z.enum(['activo', 'inactivo']).optional(),
  }).refine(data => Object.keys(data).length > 0, {
    message: "Al menos un campo debe ser proporcionado para actualizar",
  }),
});

export const getByIdSchema = z.object({
  params: z.object({
    id: z.string().refine((val) => !isNaN(Number(val)), {
      message: "ID debe ser un número",
    }),
  }),
});

export type CreatePersonaAtendidaInput = z.infer<typeof createPersonaAtendidaSchema>['body'];
export type UpdatePersonaAtendidaInput = z.infer<typeof updatePersonaAtendidaSchema>['body'];