// src/middlewares/validator.middleware.ts

import { Request, Response, NextFunction } from 'express';
import { validationResult, body } from 'express-validator'; 

// Funcióng genérica que revisa errores (ya la tienes)
export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Reglas de validación para el profesional (array de middlewares)
export const validateProfesional = [
    body('nombre')
        .notEmpty().withMessage('El nombre del profesional es requerido.')
        .isString().withMessage('El nombre debe ser texto.'),
        
    body('email')
        .notEmpty().withMessage('El email es requerido.')
        .isEmail().withMessage('Debe ser un email válido.')
        .normalizeEmail(),
        
];