import { z } from 'zod';
import { emailSchema, passwordSchema, roles } from './base.schema.js';
export const registerSchema = z.object({
    body: z.object({
        email: emailSchema,
        password: passwordSchema,
        rol: z.enum(roles).default('recepcionista'),
        activo: z.boolean().default(true),
    }),
});
export const loginSchema = z.object({
    body: z.object({
        email: emailSchema,
        password: z.string().min(1, 'La contraseña es requerida'),
    }),
});
export const updateProfileSchema = z.object({
    body: z.object({
        email: emailSchema.optional(),
        currentPassword: z.string().optional(),
        newPassword: passwordSchema.optional(),
    }).refine(data => {
        // Si se quiere cambiar contraseña, se debe proporcionar la actual
        if (data.newPassword && !data.currentPassword) {
            return false;
        }
        return true;
    }, {
        message: 'Para cambiar la contraseña, debe proporcionar la contraseña actual',
        path: ['currentPassword'],
    }),
});
export const changePasswordSchema = z.object({
    body: z.object({
        currentPassword: z.string().min(1, 'Contraseña actual requerida'),
        newPassword: passwordSchema,
    }),
});
//# sourceMappingURL=auth.schema.js.map