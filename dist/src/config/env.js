import dotenv from 'dotenv';
import { z } from 'zod';
// Cargar variables de entorno
dotenv.config();
// Esquema de validación Zod para variables de entorno
const envSchema = z.object({
    // Entorno
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    // Servidor
    PORT: z.string()
        .regex(/^\d+$/, 'El puerto debe ser un número')
        .default('3000')
        .transform(Number),
    // Base de datos
    DATABASE_URL: z.string().min(1, 'DATABASE_URL es requerida'),
    // JWT
    JWT_SECRET: z.string().min(32, 'JWT_SECRET debe tener al menos 32 caracteres'),
    JWT_EXPIRES_IN: z.string().default('24h'),
    // Bcrypt
    BCRYPT_SALT_ROUNDS: z.string()
        .regex(/^\d+$/, 'Debe ser un número')
        .default('10')
        .transform(Number),
    // CORS
    CORS_ORIGIN: z.string().default('http://localhost:3000'),
    // SendGrid (opcional)
    SENDGRID_API_KEY: z.string().optional(),
    SENDGRID_FROM_EMAIL: z.string().optional(),
});
// Validar y parsear variables de entorno
const envParseResult = envSchema.safeParse(process.env);
if (!envParseResult.success) {
    console.error('❌ Error en variables de entorno:');
    // CORRECCIÓN: Usar 'issues' en lugar de 'errors'
    envParseResult.error.issues.forEach((issue) => {
        const path = issue.path.join('.');
        console.error(`  - ${path || 'configuración'}: ${issue.message}`);
    });
    process.exit(1);
}
// Exportar configuración validada
export const ENV = {
    // Entorno
    NODE_ENV: envParseResult.data.NODE_ENV,
    // Servidor
    PORT: envParseResult.data.PORT,
    // Base de datos
    DATABASE_URL: envParseResult.data.DATABASE_URL,
    // JWT
    JWT_SECRET: envParseResult.data.JWT_SECRET,
    JWT_EXPIRES_IN: envParseResult.data.JWT_EXPIRES_IN,
    // Bcrypt
    BCRYPT_SALT_ROUNDS: envParseResult.data.BCRYPT_SALT_ROUNDS,
    // CORS
    CORS_ORIGIN: envParseResult.data.CORS_ORIGIN,
    // SendGrid
    SENDGRID_API_KEY: envParseResult.data.SENDGRID_API_KEY,
    SENDGRID_FROM_EMAIL: envParseResult.data.SENDGRID_FROM_EMAIL,
    // Flags de funcionalidad
    ENABLE_SWAGGER: envParseResult.data.NODE_ENV !== 'production',
    ENABLE_MORGAN: envParseResult.data.NODE_ENV === 'development',
    ENABLE_CORS: true,
};
// Función para validar configuración adicional
export function validateEnvironment() {
    const requiredInProduction = ['DATABASE_URL', 'JWT_SECRET'];
    if (ENV.NODE_ENV === 'production') {
        const missing = requiredInProduction.filter(key => !process.env[key]);
        if (missing.length > 0) {
            console.error(`❌ Variables de entorno faltantes en producción: ${missing.join(', ')}`);
            return false;
        }
        if (ENV.JWT_SECRET === 'default-secret-change-in-production') {
            console.error('❌ JWT_SECRET debe ser cambiado en producción');
            return false;
        }
    }
    console.log('✅ Configuración de entorno validada');
    return true;
}
// Validar al cargar el módulo
validateEnvironment();
