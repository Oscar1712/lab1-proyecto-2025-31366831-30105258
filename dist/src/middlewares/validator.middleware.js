// src/middlewares/validator.middleware.ts
import { ZodError } from 'zod';
// Middleware genérico para validar datos con Zod
export const validate = (schema) => {
    return async (req, res, next) => {
        try {
            // Parsear y validar los datos. Este schema DEBE contener body, query, params
            const result = await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            }); // Usamos 'any' por la complejidad de la tipificación del parse
            // Si hay transformaciones, actualizar los datos
            if (result.body)
                req.body = result.body;
            if (result.query)
                req.query = result.query;
            if (result.params)
                req.params = result.params;
            next();
        }
        catch (error) {
            if (error instanceof ZodError) {
                // Formatear errores de manera clara
                const errors = error.issues.map(issue => ({
                    campo: issue.path.join('.'),
                    mensaje: issue.message,
                    codigo: issue.code,
                }));
                res.status(400).json({
                    success: false,
                    error: 'Validación fallida',
                    detalles: errors,
                    timestamp: new Date().toISOString(),
                });
            }
            else {
                next(error);
            }
        }
    };
};
// ❌ ELIMINAMOS validateResourceId: Conflicto con IDs numéricos (base.schema.ts)
/**
 * Middleware para sanitizar datos (protección contra XSS)
 */
export const sanitizeInput = (req, res, next) => {
    const sanitize = (obj) => {
        if (typeof obj === 'string') {
            // Eliminar etiquetas HTML/script
            return obj.replace(/<[^>]*>?/gm, '');
        }
        if (Array.isArray(obj)) {
            return obj.map(item => sanitize(item));
        }
        if (obj && typeof obj === 'object') {
            return Object.keys(obj).reduce((acc, key) => {
                acc[key] = sanitize(obj[key]);
                return acc;
            }, {});
        }
        return obj;
    };
    if (req.body)
        req.body = sanitize(req.body);
    if (req.query)
        req.query = sanitize(req.query);
    next();
};
