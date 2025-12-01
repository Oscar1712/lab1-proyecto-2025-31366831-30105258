/ ============================================
// ARCHIVO: src/config/swagger.ts
// ============================================
import swaggerJsdoc from 'swagger-jsdoc';
import { ENV } from './env';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Gestión de Servicios Médicos',
      version: '1.0.0',
      description: 'API REST para gestión integral de servicios de salud',
    },
    servers: [{ url: `http://localhost:${ENV.PORT}` }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);