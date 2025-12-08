// src/config/database.ts
import 'dotenv/config';
// 🟢 IMPORTACIÓN ESTÁNDAR: Importamos los tipos necesarios
import { PrismaClient, Prisma } from '../generated/prisma/client.js';
const globalForPrisma = globalThis;
// 🟢 Nota: La función debe devolver AnyPrismaClient para silenciar errores
function createPrismaClient() {
    // 🟢 Instanciamos el cliente como 'PrismaClient' pero TS lo tratará como 'AnyPrismaClient'
    const client = new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
        errorFormat: 'pretty',
    });
    // Sólo añadir middlewares si el cliente soporta $use
    // Al tipar client como AnyPrismaClient (any), el compilador permite $use
    if (typeof client.$use === 'function') {
        // middleware de logging lento (dev)
        if (process.env.NODE_ENV === 'development') {
            client.$use(async (params, next) => {
                const start = Date.now();
                const result = await next(params);
                const duration = Date.now() - start;
                if (duration > 1000) {
                    const model = params?.model ?? 'UnknownModel';
                    const action = params?.action ?? 'unknown';
                    // eslint-disable-next-line no-console
                    console.warn(`[Slow Query] ${model}.${action} took ${duration} ms`);
                }
                return result;
            });
        }
        // middleware para timestamps básicos (create / update)
        client.$use(async (params, next) => {
            try {
                const now = new Date();
                if (params.action === 'create') {
                    if (params.args && typeof params.args === 'object' && params.args.data && typeof params.args.data === 'object') {
                        params.args.data = {
                            ...params.args.data,
                            createdAt: params.args.data.createdAt ?? now,
                            updatedAt: params.args.data.updatedAt ?? now,
                        };
                    }
                }
                else if (params.action === 'update' || params.action === 'updateMany') {
                    if (params.args && typeof params.args === 'object') {
                        params.args.data = {
                            ...(params.args.data ?? {}),
                            updatedAt: now,
                        };
                    }
                }
            }
            catch (err) {
                // no interrumpir la ejecución por un fallo del middleware
                // eslint-disable-next-line no-console
                console.error('Error en middleware de timestamps:', err);
            }
            return next(params);
        });
    }
    else {
        // Cliente no soporta $use 
        // eslint-disable-next-line no-console
        console.warn('Prisma client disponible pero no expone $use; se omiten middlewares.');
    }
    return client;
}
// usar singleton en desarrollo para hot-reload
export const prisma = globalForPrisma.prisma_global ?? createPrismaClient();
if (process.env.NODE_ENV !== 'production')
    globalForPrisma.prisma_global = prisma;
// ----- Funciones utilitarias -----
export async function connectDatabase() {
    try {
        await prisma.$connect();
        // eslint-disable-next-line no-console
        console.log('✅ Base de datos conectada exitosamente');
    }
    catch (err) {
        // eslint-disable-next-line no-console
        console.error('❌ Error conectando a la base de datos:', err);
        // Lanzamos el error REAL 
        throw err;
    }
}
export async function disconnectDatabase() {
    try {
        await prisma.$disconnect();
        // eslint-disable-next-line no-console
        console.log('✅ Base de datos desconectada exitosamente');
    }
    catch (err) {
        // eslint-disable-next-line no-console
        console.error('❌ Error desconectando de la base de datos:', err);
        throw err;
    }
}
export async function healthCheck() {
    const start = Date.now();
    try {
        // @ts-ignore - prisma.$queryRaw puede tener firma distinta según versión
        await prisma.$queryRaw `SELECT 1`;
        const duration = Date.now() - start;
        return { status: 'healthy', responseTime: duration, timestamp: new Date().toISOString(), database: 'connected' };
    }
    catch (err) {
        return { status: 'unhealthy', responseTime: Date.now() - start, timestamp: new Date().toISOString(), database: 'disconnected' };
    }
}
export async function cleanTestData() {
    if (process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'test') {
        throw new Error('Este método solo está disponible en desarrollo y testing');
    }
    // eslint-disable-next-line no-console
    console.log('🧹 Limpiando datos de prueba...');
    try {
        // Eliminar en orden inverso a dependencias
        await prisma.consentimiento?.deleteMany?.();
        await prisma.diagnostico?.deleteMany?.();
        await prisma.notaClinica?.deleteMany?.();
        await prisma.episodioAtencion?.deleteMany?.();
        await prisma.cita?.deleteMany?.();
        await prisma.bloqueAgenda?.deleteMany?.();
        await prisma.unidadAtencion?.deleteMany?.();
        await prisma.profesional?.deleteMany?.();
        await prisma.personaAtendida?.deleteMany?.();
        await prisma.usuario?.deleteMany?.();
        // eslint-disable-next-line no-console
        console.log('✅ Datos de prueba eliminados');
    }
    catch (err) {
        // eslint-disable-next-line no-console
        console.error('❌ Error limpiando datos de prueba:', err);
        throw err;
    }
}
export async function runMigration(sql) {
    try {
        // @ts-ignore - ejecutar SQL arbitrario
        await prisma.$executeRawUnsafe(sql);
        // eslint-disable-next-line no-console
        console.log('✅ Migración ejecutada exitosamente');
        return { success: true };
    }
    catch (error) {
        // eslint-disable-next-line no-console
        console.error('❌ Error en migración:', error);
        return { success: false, error };
    }
}
// export default prisma para compatibilidad
export default prisma;
// Exportamos el namespace de tipos de Prisma (Prisma)
export { Prisma };
//# sourceMappingURL=database.js.map