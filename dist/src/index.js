// src/index.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
// Configuración y Utilidades
import { setupSwagger } from './config/swagger.js'; // Asegúrate de que exista
import { ENV } from './config/env.js'; // Asegúrate de que exista
// Rutas (Routers) - revisa que estos archivos existan y exporten default Router
import authRouter from './routes/auth.routes.js';
import profesionalesRouter from './routes/profesionales.routes.js';
import unidadesAtencionRouter from './routes/unidadesAtencion.routes.js';
import personasAtendidasRouter from './routes/personaAtendida.routes.js';
import notasClinicasRouter from './routes/notasClinicas.routes.js';
import diagnosticosRouter from './routes/diagnosticos.routes.js';
import consentimientosRouter from './routes/consentimientos.routes.js';
const app = express();
// ----------------------------------------------------------------------
// MIDDLEWARE GLOBALES
// ----------------------------------------------------------------------
app.use(helmet());
app.use(cors({
    origin: ENV.CORS_ORIGIN ?? '*',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
}));
app.use(express.json());
app.use(morgan('dev'));
// ----------------------------------------------------------------------
// ENRUTAMIENTO Y SWAGGER
// ----------------------------------------------------------------------
const API_VERSION = '/api/v1';
// Configuración de Swagger (Documentación) — setupSwagger debe montar /api-docs
if (typeof setupSwagger === 'function') {
    setupSwagger(app);
}
// Ruta raíz
app.get('/', (req, res) => {
    res.send(`API de Gestión Clínica - Versión ${API_VERSION} operativa.`);
});
// Montar routers (asegúrate de que estos routers se exporten como default)
app.use(`${API_VERSION}/auth`, authRouter);
app.use(`${API_VERSION}/profesionales`, profesionalesRouter);
app.use(`${API_VERSION}/unidades-atencion`, unidadesAtencionRouter);
app.use(`${API_VERSION}/personas-atendidas`, personasAtendidasRouter);
app.use(`${API_VERSION}/notas-clinicas`, notasClinicasRouter);
app.use(`${API_VERSION}/diagnosticos`, diagnosticosRouter);
app.use(`${API_VERSION}/consentimientos`, consentimientosRouter);
// ----------------------------------------------------------------------
// MANEJO DE ERRORES (Middleware final)
// ----------------------------------------------------------------------
// 404 Handler
app.use((req, res) => {
    res.status(404).json({ success: false, message: `Ruta no encontrada: ${req.method} ${req.originalUrl}` });
});
// Error handler básico (siempre es mejor tener uno más completo)
app.use((err, req, res, _next) => {
    console.error('Unhandled error:', err);
    const status = err?.status || 500;
    const message = err?.message || 'Error interno del servidor';
    res.status(status).json({ success: false, message });
});
export default app;
