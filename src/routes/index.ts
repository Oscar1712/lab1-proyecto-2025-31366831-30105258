// src/routes/index.ts

import { Router } from 'express';
// Importa todos los routers de las entidades
import authRoutes from './auth.routes';
import personasAtendidasRoutes from './personasAtendidas.routes';
import profesionalesRoutes from './profesionales.routes';
import unidadesRoutes from './unidadesAtencion.routes';
import agendaRoutes from './agenda.routes';
import citasRoutes from './citas.routes';
import episodiosRoutes from './episodios.routes';
// ... otros routers (consentimientos, diagnosticos, notasClinicas, etc.)

const router = Router();

// Agrupa los routers en un solo punto
// Rutas de autenticación no suelen tener prefijo de entidad
router.use('/auth', authRoutes); 

// Rutas de identidades y recursos clínicos
router.use('/personas', personasAtendidasRoutes);
router.use('/profesionales', profesionalesRoutes);
router.use('/unidades', unidadesRoutes);

// Rutas de disponibilidad y flujo asistencial
router.use('/agenda', agendaRoutes);
router.use('/citas', citasRoutes);
router.use('/episodios', episodiosRoutes);

// ... Agrega los demás aquí

export default router;