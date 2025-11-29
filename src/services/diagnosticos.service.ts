// services/diagnosticos.service.ts

// import { Diagnostico } from '../models/Diagnostico';

class DiagnosticosService {
    // 1. Crear un nuevo diagnóstico asociado a un episodio
    async createDiagnostico(data: { episodioId: string, profesionalId: string, codigoCie10: string, descripcion: string }) {
        console.log(`[SERVICE] Registrando diagnóstico ${data.codigoCie10} para Ep. ${data.episodioId}`);
        // Lógica: Validar el código CIE-10 (si aplica) y guardar en DB.
        const newDiagnostico = { id: 'd345', ...data, esPrincipal: true, activo: true };
        return newDiagnostico;
    }

    // 2. Obtener un diagnóstico específico
    async getDiagnosticoById(diagnosticoId: string) {
        const diagnostico = { id: diagnosticoId, codigoCie10: 'F32.9', descripcion: 'Depresión sin especificar' };
        if (!diagnostico) throw new Error('Diagnóstico no encontrado');
        return diagnostico;
    }

    // 3. Obtener todos los diagnósticos de un episodio
    async getDiagnosticosByEpisodio(episodioId: string) {
        console.log(`[SERVICE] Obteniendo diagnósticos de Episodio ID: ${episodioId}`);
        return [{ codigoCie10: 'F32.9' }, { codigoCie10: 'Z00.0' }];
    }

    // 4. Marcar un diagnóstico como inactivo (no se borra por trazabilidad legal)
    async deleteDiagnostico(diagnosticoId: string) {
        console.log(`[SERVICE] Marcando diagnóstico ID: ${diagnosticoId} como inactivo`);
        // Lógica: Actualizar campo 'activo' a false en DB.
        const diagnosticoEliminado = { id: diagnosticoId, activo: false };
        return diagnosticoEliminado;
    }
}

export const diagnosticosService = new DiagnosticosService();