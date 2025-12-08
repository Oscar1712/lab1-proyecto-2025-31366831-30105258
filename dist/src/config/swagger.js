// src/config/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
/**
 * @typedef {object} SwaggerOptions
 * @property {string} definition.openapi - Versión de OpenAPI (usualmente 3.0.0 o 3.1.0)
 * @property {object} info
 * @property {string} info.title - Título de la API
 * @property {string} info.version - Versión de la API (ej: 1.0.0)
 * @property {string} info.description - Descripción de la API
 * @property {string[]} apis - Rutas a los archivos que contienen comentarios JSDoc con la especificación de la API.
 */
const options = {
    definition: {
        openapi: '3.0.0', // Especificación de OpenAPI 3.0.0
        info: {
            title: 'API de Gestión Clínica',
            version: '1.0.0',
            description: 'Documentación de los endpoints para la gestión de datos clínicos y administrativos.',
        },
        // Componentes de seguridad (para incluir JWT)
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    description: 'Ingrese el token JWT con el prefijo Bearer (ej: Bearer eyJhbGciOi...)',
                },
            },
        },
        // Seguridad global (opcional: aplica a todos los endpoints por defecto)
        security: [
            {
                BearerAuth: [],
            },
        ],
        // Servidores disponibles
        servers: [
            {
                url: '/api', // Asumiendo que todas tus rutas inician con /api
                description: 'Servidor Local/Desarrollo'
            },
        ],
    },
    // Archivos donde swagger-jsdoc buscará comentarios JSDoc para generar la documentación.
    apis: [
        './src/routes/*.ts', // Rutas de Express (donde se definen los endpoints)
        './src/controllers/*.ts', // Controladores (donde se pueden definir esquemas)
        './src/schemas/*.ts', // Esquemas Zod que puedes referenciar
    ],
};
const swaggerSpec = swaggerJsdoc(options);
/**
 * Inicializa y configura Swagger UI en la aplicación Express.
 * @param app Instancia de la aplicación Express.
 */
export function setupSwagger(app) {
    // Servir la documentación estática de OpenAPI en /docs-json
    app.use('/docs-json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    // Servir la interfaz de usuario de Swagger en /api-docs
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
        explorer: true, // Habilitar la barra de búsqueda/filtro
    }));
    console.log('📄 Swagger UI disponible en /api-docs');
}
