// src/routes/unidadesAtencion.routes.ts (Corregido)

// 1. UNA SOLA IMPORTACIÓN de Router
import { Router } from 'express'; 
import { unidadesController } from '../controllers/unidadesAtencion.controller'; // Asumo que es correcto
// ... tus imports de middleware ...

// 2. UNA SOLA INICIALIZACIÓN de router
const router = Router(); 

// ... Tus rutas ...

// 3. UNA SOLA EXPORTACIÓN por defecto al final
export default router;