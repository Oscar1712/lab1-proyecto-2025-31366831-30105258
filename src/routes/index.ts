// ============================================
// ARCHIVO: src/routes/index.ts
// ============================================
import { Router } from 'express';
import authRoutes from './auth.routes';
import personasAtendidasRoutes from './personasAtendidas.routes';
import profesionalesRoutes from './profesionales.routes';
import unidadesAtencionRoutes from './unidadesAtencion.routes';
import agendaRoutes from './agenda.routes';
import citasRoutes from './citas.routes';
import episodiosRoutes from './episodios.routes';
import notasClinicasRoutes from './notasClinicas.routes';
import diagnosticosRoutes from './diagnosticos.routes';
import consentimientosRoutes from './consentimientos.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/personas-atendidas', personasAtendidasRoutes);
router.use('/profesionales', profesionalesRoutes);
router.use('/unidades-atencion', unidadesAtencionRoutes);
router.use('/agenda', agendaRoutes);
router.use('/citas', citasRoutes);
router.use('/episodios', episodiosRoutes);
router.use('/notas-clinicas', notasClinicasRoutes);
router.use('/diagnosticos', diagnosticosRoutes);
router.use('/consentimientos', consentimientosRoutes);

export default router;