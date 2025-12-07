// src/server.ts
import 'dotenv/config';
import app from './index.js';
import { ENV } from './config/env.js';
import { connectDatabase } from './config/database.js';

const PORT = ENV.PORT ?? 3000;

/**
 * Función principal para iniciar la aplicación.
 */
async function bootstrap() {
  try {
    // 1. Conectar a la base de datos (Prisma)
    await connectDatabase();

    // 2. Iniciar el servidor Express
    app.listen(PORT, () => {
      console.log('----------------------------------------------------');
      console.log(`🚀 Servidor Express corriendo en: http://localhost:${PORT}`);
      console.log(`📄 Documentación (Swagger) en: http://localhost:${PORT}/api-docs`);
      console.log('----------------------------------------------------');
    });
  } catch (error) {
    console.error('❌ Error fatal al iniciar la aplicación:', error);
    process.exit(1);
  }
}

// Iniciar la aplicación
bootstrap();