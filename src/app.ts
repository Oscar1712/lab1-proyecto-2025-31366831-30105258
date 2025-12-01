// ============================================
// ARCHIVO: src/app.ts
// ============================================
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import { ENV } from './config/env';
import routes from './routes';
import { errorHandler } from './middlewares/error.middleware';

const app: Application = express();

app.use(helmet());
app.use(cors({ origin: ENV.CORS_ORIGIN }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Demasiadas peticiones desde esta IP',
});
app.use('/api', limiter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: ENV.NODE_ENV,
  });
});

app.use('/api', routes);

app.use(errorHandler);

app.use('*', (req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

export default app;