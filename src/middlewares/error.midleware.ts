// middlewares/error.middleware.ts

import { Request, Response, NextFunction } from 'express';

/**
 * Middleware centralizado para el manejo de errores en Express.
 * Debe ser el ÚLTIMO middleware cargado.
 */
export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    
    console.error(err.stack); // Registrar el error completo en la consola del servidor

    let statusCode = err.status || 500;
    let message = err.message || 'Ha ocurrido un error inesperado en el servidor.';

    // Manejo de errores específicos de Prisma (ej. P2002: Unique constraint failed)
    if (err.code === 'P2002') {
        statusCode = 409; // Conflict
        message = 'Conflicto de datos: El registro que intenta crear ya existe (clave única duplicada).';
    } 
    // Puedes añadir más manejo de errores específicos de tu aplicación aquí

    // Respuesta HTTP estandarizada
    res.status(statusCode).json({
        success: false,
        message: message,
        // Puedes incluir un campo 'errorCode' si lo necesitas para el cliente
    });
};