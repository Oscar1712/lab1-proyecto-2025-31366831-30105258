// src/config/env.schema.ts
import { z } from 'zod';
export const envSchema = z.object({
    // 1. Entorno de Node
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    // 2. Puerto
    PORT: z.coerce.number().default(3000), // Usamos z.coerce.number() para convertir la string '3000' en número
    // 3. URLs
    DATABASE_URL: z.string().url({ message: "DATABASE_URL debe ser una URL válida." }),
    // 4. JWT
    JWT_SECRET: z.string().min(16, "La clave JWT debe ser más segura."),
    JWT_EXPIRES_IN: z.string().default('1d'), // Formato para jsonwebtoken (ej. '1h', '7d')
});
