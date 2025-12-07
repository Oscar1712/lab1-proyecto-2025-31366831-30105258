// src/middlewares/auth.middleware.ts
// 🟢 Importamos el módulo de JWT y el util que ya tiene la lógica de verificación
import { verifyToken, extractTokenFromHeader } from '../utils/jwt.util.js';
// Asumiendo que has extendido Request para incluir 'user'
export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    // 1. Usamos el util para extraer el token
    const token = extractTokenFromHeader(authHeader);
    if (!token) {
        return res.status(401).json({ success: false, error: 'Token no proporcionado o formato incorrecto' });
    }
    try {
        // 2. Usamos el util para verificar (maneja expiración/invalidez)
        const decoded = verifyToken(token);
        // 3. Asignamos a req.user (ajusta si la interfaz Express.UserPayload difiere de JWTPayload)
        req.user = {
            id: decoded.id,
            email: decoded.email,
            rol: decoded.rol,
        };
        next();
    }
    catch (error) {
        // 4. El util lanza errores específicos (expirado, inválido), que son capturados aquí.
        // Podemos devolver el mensaje específico del error para mejor feedback.
        const errorMessage = error instanceof Error ? error.message : 'Token inválido o expirado';
        return res.status(401).json({ success: false, error: errorMessage });
    }
}
// Renombrar: Para seguir tu convención en routes.ts, deberías exportar 'checkAuth' o renombrar 'authMiddleware' a 'checkAuth'
// export const checkAuth = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map