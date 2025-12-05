import { PrismaClient } from '@prisma/client';

// ==================== CONFIGURACIÓN DE PRISMA ====================

// Helper para obtener el PrismaClient en desarrollo (evita múltiples instancias)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Crear una única instancia de PrismaClient
export const prisma = globalForPrisma.prisma ?? createPrismaClient();

function createPrismaClient(): PrismaClient {
  const client = new PrismaClient({
    // Configuración de logging según entorno
    log: process.env.NODE_ENV === 'development' 
      ? ['query', 'info', 'warn', 'error'] 
      : ['error'],
    
    // Configuración de errores
    errorFormat: 'pretty',
    
    // Configuración de conexión
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

  // Middleware para logging de consultas lentas (solo desarrollo)
  if (process.env.NODE_ENV === 'development') {
    client.$use(async (params, next) => {
      const start = Date.now();
      const result = await next(params);
      const duration = Date.now() - start;
      
      // Registrar consultas lentas (> 1 segundo)
      if (duration > 1000) {
        console.warn(⚠️  Consulta lenta detectada (${duration}ms):, {
          model: params.model,
          action: params.action,
          duration: ${duration}ms,
          timestamp: new Date().toISOString(),
        });
      }
      
      return result;
    });

    // Middleware para transformar fechas automáticamente
    client.$use(async (params, next) => {
      // Manejar operaciones de creación
      if (params.action === 'create' || params.action === 'update') {
        const now = new Date();
        
        // Para creación, establecer createdAt y updatedAt
        if (params.action === 'create') {
          if (params.args.data && typeof params.args.data === 'object') {
            params.args.data = {
              ...params.args.data,
              createdAt: params.args.data.createdAt ?? now,
              updatedAt: params.args.data.updatedAt ?? now,
            };
          }
        }
        
        // Para actualización, actualizar updatedAt
        if (params.action === 'update') {
          if (params.args.data && typeof params.args.data === 'object') {
            params.args.data = {
              ...params.args.data,
              updatedAt: now,
            };
          }
        }
      }
      
      return next(params);
    });
  }

  return client;
}

// En desarrollo, guardar la instancia en global para evitar recrearla
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// ==================== FUNCIONES DE CONEXIÓN ====================

// Conectar a la base de datos

export async function connectDatabase(): Promise<void> {
  try {
    await prisma.$connect();
    console.log('✅ Base de datos conectada exitosamente');
  } catch (error) {
    console.error('❌ Error conectando a la base de datos:', error);
    throw error;
  }
}

// Desconectar de la base de datos

export async function disconnectDatabase(): Promise<void> {
  try {
    await prisma.$disconnect();
    console.log('✅ Base de datos desconectada exitosamente');
  } catch (error) {
    console.error('❌ Error desconectando de la base de datos:', error);
    throw error;
  }
}

// Verificar salud de la base de datos

export async function healthCheck(): Promise<{
  status: 'healthy' | 'unhealthy';
  responseTime: number;
  timestamp: string;
  database: string;
}> {
  const start = Date.now();
  
  try {
    // Consulta simple para verificar conexión
    await prisma.$queryRaw`SELECT 1`;
    const duration = Date.now() - start;
    
    return {
      status: 'healthy',
      responseTime: duration,
      timestamp: new Date().toISOString(),
      database: 'connected',
    };
  } catch (error) {
    return {
      status: 'unhealthy',
      responseTime: Date.now() - start,
      timestamp: new Date().toISOString(),
      database: 'disconnected',
    };
  }
}

// Limpiar datos de prueba (solo para desarrollo/testing)

export async function cleanTestData(): Promise<void> {
  if (process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'test') {
    throw new Error('Este método solo está disponible en desarrollo y testing');
  }

  console.log('🧹 Limpiando datos de prueba...');
  
  try {
    // Eliminar en orden inverso a las dependencias
    await prisma.consentimiento.deleteMany({});
    await prisma.diagnostico.deleteMany({});
    await prisma.notaClinica.deleteMany({});
    await prisma.episodioAtencion.deleteMany({});
    await prisma.cita.deleteMany({});
    await prisma.bloqueAgenda.deleteMany({});
    await prisma.unidadAtencion.deleteMany({});
    await prisma.profesional.deleteMany({});
    await prisma.personaAtendida.deleteMany({});
    await prisma.usuario.deleteMany({});
    
    console.log('✅ Datos de prueba eliminados');
  } catch (error) {
    console.error('❌ Error limpiando datos de prueba:', error);
    throw error;
  }
}

/**
 * Ejecutar migración SQL personalizada
 */
export async function runMigration(sql: string): Promise<{ success: boolean; error?: any }> {
  try {
    await prisma.$executeRawUnsafe(sql);
    console.log('✅ Migración ejecutada exitosamente');
    return { success: true };
  } catch (error) {
    console.error('❌ Error en migración:', error);
    return { success: false, error };
  }
}

// ==================== TIPOS ÚTILES ====================

// Tipos inferidos de Prisma para reutilizar
export type Usuario = {
  id: number;
  email: string;
  password: string;
  rol: string;
  activo: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type PersonaAtendida = {
  id: number;
  tipoDocumento: string;
  numeroDocumento: string;
  nombres: string;
  apellidos: string;
  fechaNacimiento: Date;
  sexo: string;
  correo: string | null;
  telefono: string | null;
  direccion: string | null;
  contactoEmergencia: string | null;
  alergias: string | null;
  antecedentesResumen: string | null;
  estado: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Profesional = {
  id: number;
  nombres: string;
  apellidos: string;
  registroProfesional: string;
  especialidad: string;
  correo: string | null;
  telefono: string | null;
  agendaHabilitada: boolean;
  estado: string;
  createdAt: Date;
  updatedAt: Date;
};

// ==================== EXPORTACIÓN PREDETERMINADA ====================

export default prisma;
