import jwt, { SignOptions, VerifyOptions } from 'jsonwebtoken';
import { ENV } from '../config/env.js';

// Definimos un tipo que puede ser devuelto por jwt.decode antes de la verificación
export interface UnverifiedJWTPayload extends JWTPayload {
  // JWT estándar (iat, exp, iss, aud)
  iat?: number;
  exp?: number;
  iss?: string;
  aud?: string;
}

export interface JWTPayload {
  id: number;
  email: string;
  rol: string;
}

// ----------------------------------------------------------------------
// GENERACIÓN Y VERIFICACIÓN DE ACCESO (ACCESS TOKEN)
// ----------------------------------------------------------------------

// Generar token JWT
export function generateToken(payload: JWTPayload): string {
  try {
    // 🟢 CORRECCIÓN: Usamos aserción de tipo para 'expiresIn'
    const expiresInValue = ENV.JWT_EXPIRES_IN as SignOptions['expiresIn'];
    
    const options: SignOptions = {
      expiresIn: expiresInValue, // Ya no da error de tipado
      issuer: 'hospital-api',
      audience: 'hospital-client',
      algorithm: 'HS256',
    };
    
    return jwt.sign(payload, ENV.JWT_SECRET!, options);
  } catch (error) {
    console.error('❌ Error generando token:', error);
    throw new Error('Error al generar token de autenticación');
  }
}

// Verificar token JWT
export function verifyToken(token: string): JWTPayload {
  try {
    const options: VerifyOptions = {
      issuer: 'hospital-api',
      audience: 'hospital-client',
      algorithms: ['HS256'],
    };
    
    const decoded = jwt.verify(token, ENV.JWT_SECRET!, options);
    return decoded as JWTPayload; 
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Token expirado');
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Token inválido');
    }
    throw new Error('Error verificando token');
  }
}

// Decodificar token sin verificar (útil para isTokenExpiringSoon)
export function decodeToken(token: string): UnverifiedJWTPayload | null {
  try {
    const decoded = jwt.decode(token);
    return (typeof decoded === 'object' && decoded !== null) 
      ? decoded as UnverifiedJWTPayload
      : null;
  } catch {
    return null;
  }
}

// ----------------------------------------------------------------------
// GENERACIÓN Y VERIFICACIÓN DE REFRESH TOKEN
// ----------------------------------------------------------------------

export function generateRefreshToken(payload: JWTPayload): string {
  try {
    const options: SignOptions = {
      expiresIn: '7d', // 7 días para refresh token
      issuer: 'hospital-api',
      audience: 'hospital-refresh',
      algorithm: 'HS256',
    };
    
    return jwt.sign(payload, ENV.JWT_SECRET + '-refresh', options); 
  } catch (error) {
    console.error('❌ Error generando refresh token:', error);
    throw new Error('Error al generar refresh token');
  }
}

export function verifyRefreshToken(token: string): JWTPayload {
  try {
    const options: VerifyOptions = {
      issuer: 'hospital-api',
      audience: 'hospital-refresh',
      algorithms: ['HS256'],
    };
    
    const decoded = jwt.verify(token, ENV.JWT_SECRET + '-refresh', options);
    return decoded as JWTPayload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Refresh token expirado');
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Refresh token inválido');
    }
    throw new Error('Error verificando refresh token');
  }
}

// ----------------------------------------------------------------------
// UTILIDADES
// ----------------------------------------------------------------------

export function extractTokenFromHeader(authHeader: string | undefined): string | null {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.split(' ')[1]; 
}

export function isTokenExpiringSoon(token: string, thresholdMinutes: number = 5): boolean {
  try {
    const decoded = decodeToken(token);
    
    if (!decoded || !decoded.exp) { 
      return false;
    }
    
    const expirationTime = decoded.exp * 1000; // Convertir a milisegundos
    const currentTime = Date.now();
    const timeUntilExpiration = expirationTime - currentTime;
    const thresholdMs = thresholdMinutes * 60 * 1000;
    
    return timeUntilExpiration > 0 && timeUntilExpiration <= thresholdMs;
  } catch {
    return false;
  }
}

/**
 * Renovar token si está próximo a expirar (Generalmente usado en el middleware o controlador)
 */
export function renewTokenIfNeeded(token: string, payload: JWTPayload): {
  renewed: boolean;
  token?: string;
  message?: string;
} {
  try {
    // 1. Verificar si el token es válido. Si falla, va al catch.
    verifyToken(token);
    
    // 2. Verificar si está próximo a expirar (usamos un umbral de 10 minutos aquí, por ejemplo)
    if (isTokenExpiringSoon(token, 10)) { 
      const newToken = generateToken(payload);
      return {
        renewed: true,
        token: newToken,
        message: 'Token renovado exitosamente (próximo a expirar)',
      };
    }
    
    return {
      renewed: false,
      message: 'Token aún válido, no requiere renovación',
    };
  } catch (error) {
    // 3. Si la verificación falla (expirado/inválido), generamos uno nuevo
    if (error instanceof Error) {
      if (error.message.includes('expirado')) {
        const newToken = generateToken(payload);
        return {
          renewed: true,
          token: newToken,
          message: 'Token renovado (el anterior estaba expirado)',
        };
      }
      if (error.message.includes('inválido')) {
        const newToken = generateToken(payload);
        return {
          renewed: true,
          token: newToken,
          message: 'Token renovado (el anterior era inválido)',
        };
      }
    }
    
    throw error;
  }
}