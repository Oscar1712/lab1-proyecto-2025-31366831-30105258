import { Request, Response, NextFunction } from 'express';
import { ZodError, ZodObject, ZodRawShape } from 'zod';

// Middleware genérico para validar datos con Zod

export const validate = (schema: ZodObject<ZodRawShape>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Parsear y validar los datos
      const result = await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      }) as any; // 👈 cast para acceder a body/query/params

      // Si hay transformaciones, actualizar los datos
      if (result.body) req.body = result.body;
      if (result.query) req.query = result.query;
      if (result.params) req.params = result.params;

      next();
    } catch (error) {
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
      } else {
        next(error);
      }
    }
  };
};

// Middleware para validar IDs de recursos (UUID v4)

export const validateResourceId = (paramName: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const id = req.params[paramName];

    // Validar UUID v4
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    if (!uuidRegex.test(id)) {
      return res.status(400).json({
        success: false,
        error: 'ID de recurso inválido',
        message: 'El ${paramName} debe ser un UUID válido',
      });
    }

    next();
  };
};

/**
 * Middleware para sanitizar datos (protección contra XSS)
 */
export const sanitizeInput = (req: Request, res: Response, next: NextFunction) => {
  const sanitize = (obj: any): any => {
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
      }, {} as any);
    }

    return obj;
  };

  if (req.body) req.body = sanitize(req.body);
  if (req.query) req.query = sanitize(req.query);

  next();
};