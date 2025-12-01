// ============================================
// ARCHIVO: src/server.ts
// ============================================
import app from './app';
import { ENV } from './config/env';
import prisma from './config/database';

const PORT = ENV.PORT;

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log('✅ Conexión a la base de datos establecida');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
      console.log(`📚 Documentación: http://localhost:${PORT}/api-docs`);
      console.log(`🏥 API de Servicios Médicos v1.0.0`);
      console.log(`🌍 Entorno: ${ENV.NODE_ENV}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

process.on('SIGINT', async () => {
  console.log('\n🛑 Cerrando servidor...');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Cerrando servidor...');
  await prisma.$disconnect();
  process.exit(0);
});

startServer();
