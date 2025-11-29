// services/consentimientos.service.ts

// import { Consentimiento } from '../models/Consentimiento';

class ConsentimientosService {
    // 1. Registrar un consentimiento informado (asumiendo que ya fue firmado)
    async createConsentimiento(data: { episodioId: string, pacienteId: string, profesionalId: string, plantillaId: string, firmado: boolean }) {
        console.log(`[SERVICE] Registrando consentimiento de Paciente ID: ${data.pacienteId}`);
        if (!data.firmado) throw new Error('Solo se pueden registrar consentimientos firmados');
        
        // Lógica: Guardar el registro y, posiblemente, el archivo PDF adjunto.
        const newConsentimiento = { id: 'c123', ...data, fechaRegistro: new Date(), estado: 'VIGENTE' };
        return newConsentimiento;
    }

    // 2. Obtener un consentimiento específico
    async getConsentimientoById(consentimientoId: string) {
        const consentimiento = { id: consentimientoId, plantillaId: 'Terapia_2024', firmado: true, estado: 'VIGENTE' };
        if (!consentimiento) throw new Error('Consentimiento no encontrado');
        return consentimiento;
    }

    // 3. Obtener todos los consentimientos de un episodio
    async getConsentimientosByEpisodio(episodioId: string) {
        console.log(`[SERVICE] Obteniendo consentimientos de Episodio ID: ${episodioId}`);
        return [{ id: 'c1' }, { id: 'c2' }];
    }

    // 4. Anular un consentimiento registrado (por ejemplo, si se revoca)
    async invalidateConsentimiento(consentimientoId: string, motivo: string) {
        console.log(`[SERVICE] Anulando consentimiento ID: ${consentimientoId} por motivo: ${motivo}`);
        // Lógica: Actualizar estado a 'ANULADO' en DB.
        const consentimientoInvalidado = { id: consentimientoId, estado: 'ANULADO', motivoAnulacion: motivo };
        return consentimientoInvalidado;
    }
}

export const consentimientosService = new ConsentimientosService();