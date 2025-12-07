import { Response } from 'express';
import { ZodError } from 'zod';

/**
 * Función para manejar y estandarizar respuestas HTTP de error.
 * * @param res El objeto Response de Express.
 * @param message Mensaje base para el error (ej: 'ERROR_GETTING_DATA').
 * @param error El objeto de error real (puede ser un Error, ZodError, o cualquier cosa).
 */
export const handleHttp = (res: Response, message: string = 'ERROR_SERVER', error?: unknown) => {
    let statusCode = 500; // Por defecto: Internal Server Error
    let errorMessage = message;
    let details: unknown = error;

    if (error instanceof Error) {
        // 1. Errores de Negocio/Cliente (ej: "ID no encontrado", que el servicio lanza con throw new Error)
        if (error.message.includes('no encontrado') || 
            error.message.includes('inválido') || 
            error.message.includes('ya existe') ||
            error.message.includes('no se puede')) {
            
            statusCode = 404;
            errorMessage = error.message;
            details = undefined;
            
        } else {
            // Error de servidor genérico si no es reconocido
            details = error.message; 
        }
    }

    // 2. Errores de Validación (Zod)
    if (error instanceof ZodError) {
        statusCode = 400; // Bad Request
        errorMessage = 'ERROR_VALIDATION';
        // Proporcionamos solo los errores del formulario para el cliente
        details = error.issues.map(issue => ({
            path: issue.path.join('.'),
            message: issue.message,
            code: issue.code
        }));
    }
    
    // 3. Errores de JWT (Si los capturas aquí)
    if (error instanceof Error && error.message.includes('Token')) {
         statusCode = 401; // Unauthorized
         errorMessage = error.message;
         details = undefined;
    }

    console.error(`[${statusCode}] ${errorMessage}:`, details || error);

    res.status(statusCode).json({ 
        success: false, 
        message: errorMessage, 
        details: details 
    });
};