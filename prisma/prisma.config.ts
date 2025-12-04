// prisma.config.ts (Opción Segura y Recomendada)
import { defineConfig } from "@prisma/config";

// 1. Verifica la variable antes de usarla
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  // 2. Si falta, lanza un error claro.
  throw new Error("DATABASE_URL no está definida en las variables de entorno.");
}

export default defineConfig({
  datasource: {
    // 3. Ahora databaseUrl está garantizada de ser un string
    url: databaseUrl, 
  },
});