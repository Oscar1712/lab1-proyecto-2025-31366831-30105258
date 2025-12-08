// ============================================
// ARCHIVO: src/utils/jwt.util.ts
// ============================================
import jwt from 'jsonwebtoken';
import { ENV } from '../config/env';

interface JWTPayload {
  id: number;
  email: string;
  rol: string;
}

export const generateToken = (payload: JWTPayload): string => {
  return jwt.sign(payload, ENV.JWT_SECRET, {
    expiresIn: ENV.JWT_EXPIRES_IN,
  });
};

export const verifyToken = (token: string): JWTPayload => {
  return jwt.verify(token, ENV.JWT_SECRET) as JWTPayload;
};
