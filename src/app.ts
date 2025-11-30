// src/app.ts (o server.ts)

import express from 'express';
import cors from 'cors'; // Si lo necesitas para desarrollo frontend
import helmet from 'helmet'; // Recomendado para seguridad básica
import { connectDB } from './config/database'; // Asumiendo que tienes una función de conexión a DB
import { errorMiddleware } from './middlewares/error.middleware';
import apiRouter from './routes/index'; // Importa el router principal que acabamos de definir

// Cargar variables de entorno (asumiendo que env.ts lo hace automáticamente)
const PORT = process.env.PORT || 3000;
const API_VERSION = process.env.API_VERSION || 'v1'; 

// 1. Crear la instancia de la aplicación
const app = express();

// 2. Middlewares de Seguridad y Globales
app.use(express.json()); // Habilita body parsing para JSON
app.use(cors());         // Permite peticiones de otros dominios (ajustar en producción)
app.use(helmet());       // Añade encabezados de seguridad HTTP

// 3. Conexión a la Base de Datos (Opcional, si no lo manejas en otro lado)
// connectDB(); // Puedes llamar a esta función aquí o al iniciar el server

// 4. Registro de Rutas (EL PUNTO CLAVE)
// Todas las rutas se acceden a través del prefijo /api/v1 (o el que definas)
app.use(`/api/${API_VERSION}`, apiRouter); 
// Ejemplo: POST /api/v1/auth/login

// 5. Middleware de Manejo de Errores (Último middleware)
app.use(errorMiddleware); 

// 6. Inicio del Servidor
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`Documentation available at http://localhost:${PORT}/api-docs`); // Asumiendo Swagger
});