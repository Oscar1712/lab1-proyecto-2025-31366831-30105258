import jwt from 'jsonwebtoken';
import { ENV } from '../config/env.js';
// ----------------------------------------------------------------------
// GENERACIÓN Y VERIFICACIÓN DE ACCESO (ACCESS TOKEN)
// ----------------------------------------------------------------------
// Generar token JWT
export function generateToken(payload) {
    try {
        // 🟢 CORRECCIÓN: Usamos aserción de tipo para 'expiresIn'
        const expiresInValue = ENV.JWT_EXPIRES_IN;
        const options = {
            expiresIn: expiresInValue, // Ya no da error de tipado
            issuer: 'hospital-api',
            audience: 'hospital-client',
            algorithm: 'HS256',
        };
        return jwt.sign(payload, ENV.JWT_SECRET, options);
    }
    catch (error) {
        console.error('❌ Error generando token:', error);
        throw new Error('Error al generar token de autenticación');
    }
}
// Verificar token JWT
export function verifyToken(token) {
    try {
        const options = {
            issuer: 'hospital-api',
            audience: 'hospital-client',
            algorithms: ['HS256'],
        };
        const decoded = jwt.verify(token, ENV.JWT_SECRET, options);
        return decoded;
    }
    catch (error) {
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
export function decodeToken(token) {
    try {
        const decoded = jwt.decode(token);
        return (typeof decoded === 'object' && decoded !== null)
            ? decoded
            : null;
    }
    catch {
        return null;
    }
}
// ----------------------------------------------------------------------
// GENERACIÓN Y VERIFICACIÓN DE REFRESH TOKEN
// ----------------------------------------------------------------------
export function generateRefreshToken(payload) {
    try {
        const options = {
            expiresIn: '7d', // 7 días para refresh token
            issuer: 'hospital-api',
            audience: 'hospital-refresh',
            algorithm: 'HS256',
        };
        return jwt.sign(payload, ENV.JWT_SECRET + '-refresh', options);
    }
    catch (error) {
        console.error('❌ Error generando refresh token:', error);
        throw new Error('Error al generar refresh token');
    }
}
export function verifyRefreshToken(token) {
    try {
        const options = {
            issuer: 'hospital-api',
            audience: 'hospital-refresh',
            algorithms: ['HS256'],
        };
        const decoded = jwt.verify(token, ENV.JWT_SECRET + '-refresh', options);
        return decoded;
    }
    catch (error) {
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
export function extractTokenFromHeader(authHeader) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }
    return authHeader.split(' ')[1];
}
export function isTokenExpiringSoon(token, thresholdMinutes = 5) {
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
    }
    catch {
        return false;
    }
}
/**
 * Renovar token si está próximo a expirar (Generalmente usado en el middleware o controlador)
 */
export function renewTokenIfNeeded(token, payload) {
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
    }
    catch (error) {
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
