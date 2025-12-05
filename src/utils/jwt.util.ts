import jwt, { SignOptions, VerifyOptions } from 'jsonwebtoken';
import { ENV } from '../config/env';

export interface JWTPayload {
  id: number;
  email: string;
  rol: string;
}

// Generar token JWT

export function generateToken(payload: JWTPayload): string {
  try {
    // Configurar opciones de firma
    const options: SignOptions = {
      expiresIn: ENV.JWT_EXPIRES_IN,
      issuer: 'hospital-api',
      audience: 'hospital-client',
      algorithm: 'HS256',
    };
    
    return jwt.sign(payload, ENV.JWT_SECRET, options);
  } catch (error) {
    console.error('❌ Error generando token:', error);
    throw new Error('Error al generar token de autenticación');
  }
}

// Verificar token JWT
 
export function verifyToken(token: string): JWTPayload {
  try {
    // Configurar opciones de verificación
    const options: VerifyOptions = {
      issuer: 'hospital-api',
      audience: 'hospital-client',
      algorithms: ['HS256'],
    };
    
    const decoded = jwt.verify(token, ENV.JWT_SECRET, options);
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

// Decodificar token sin verificar (útil para logging)

export function decodeToken(token: string): JWTPayload | null {
  try {
    return jwt.decode(token) as JWTPayload;
  } catch {
    return null;
  }
}

// Generar token de refresco
 
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

// Verificar token de refresco
 
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

// Extraer token del header Authorization
 
export function extractTokenFromHeader(authHeader: string | undefined): string | null {
  if (!authHeader !decoded.exp) {
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
 * Renovar token si está próximo a expirar
 */
export function renewTokenIfNeeded(token: string, payload: JWTPayload): {
  renewed: boolean;
  token?: string;
  message?: string;
} {
  try {
    // Verificar si el token es válido
    verifyToken(token);
    
    // Verificar si está próximo a expirar
    if (isTokenExpiringSoon(token)) {
      const newToken = generateToken(payload);
      return {
        renewed: true,
        token: newToken,
        message: 'Token renovado exitosamente',
      };
    }
    
    return {
      renewed: false,
      message: 'Token aún válido, no requiere renovación',
    };
  } catch (error) {
    // Si el token es inválido o expirado, generar uno nuevo
    if (error instanceof Error && (
      error.message.includes('expirado') || 
      error.message.includes('inválido')
    )) {
      const newToken = generateToken(payload);
      return {
        renewed: true,
        token: newToken,
        message: 'Token renovado (el anterior estaba expirado/inválido)',
      };
    }
    
    throw error;
  }
}
