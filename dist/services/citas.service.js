// src/services/citas.service.ts
// 🟢 Importamos el cliente Prisma
import prisma from '../config/database.js';
export class CitasService {
    /**
     * Crea una nueva cita y registra el cambio inicial en el historial.
     */
    // 💡 NOTA: Forzamos la presencia de 'inicio' y 'fin' si el esquema Zod los garantiza.
    async createCita(data, userId) {
        // 1. Construir el historial de cambios inicial
        const historial = [
            {
                // 💡 CORRECCIÓN 1: Convertir Date a string para JSON
                timestamp: new Date().toISOString(),
                responsableId: userId,
                accion: 'creada',
                observacion: data.motivo || 'Cita creada inicialmente.',
            },
        ];
        // 2. Construir los datos para Prisma usando CitaUncheckedCreateInput
        // Usamos el cast 'as' para asegurar que el objeto cumpla los requisitos de Prisma.
        const citaData = {
            ...data,
            // 💡 CORRECCIÓN 2: Asegurar que inicio/fin existan si son requeridos en el modelo.
            // Si el schema Zod garantiza que están, esto es seguro.
            inicio: data.inicio,
            fin: data.fin,
            historialCambios: historial,
            estado: 'solicitada',
        };
        try {
            const cita = await prisma.cita.create({
                data: citaData,
            });
            return cita;
        }
        catch (error) {
            console.error('Error al crear cita:', error);
            throw new Error('No se pudo crear la cita debido a un error en la base de datos.');
        }
    }
    /**
     * Actualiza una cita existente y registra el cambio en el historial.
     */
    async updateCita(id, data, userId) {
        // 1. Prepara el registro de historial
        const nuevoRegistro = {
            // 💡 CORRECCIÓN 1: Convertir Date a string para JSON
            timestamp: new Date().toISOString(),
            responsableId: userId,
            accion: 'actualizada',
            observacion: `Campos modificados: ${Object.keys(data).join(', ')}.`,
        };
        // 2. Construir los datos para la actualización
        const updateData = {
            ...data,
            // Forma correcta de hacer PUSH, asegurando que el tipo es JsonValue.
            historialCambios: {
                push: nuevoRegistro,
            },
        };
        try {
            const cita = await prisma.cita.update({
                where: { id },
                data: updateData,
            });
            return cita;
        }
        catch (error) {
            console.error('Error al actualizar cita:', error);
            throw new Error('No se pudo actualizar la cita.');
        }
    }
    /**
     * Obtiene citas por profesional en un día específico.
     */
    async getCitasPorProfesional(profesionalId, fecha) {
        const startOfDay = new Date(fecha);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(fecha);
        endOfDay.setHours(23, 59, 59, 999);
        return prisma.cita.findMany({
            where: {
                profesionalId,
                inicio: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
            orderBy: {
                inicio: 'asc',
            },
        });
    }
    // --- Métodos de Estado ---
    async actualizarEstado(id, nuevoEstado, userId, observaciones, inicio, fin) {
        const observacionHistorial = observaciones || `Estado cambiado a ${nuevoEstado}.`;
        // 💡 CORRECCIÓN 3: Asegurar que todas las fechas que van al JSONB sean strings.
        const datosAdicionales = (inicio && fin)
            ? { inicio: inicio.toISOString(), fin: fin.toISOString() }
            : undefined;
        const nuevoRegistro = {
            timestamp: new Date().toISOString(),
            responsableId: userId,
            accion: `cambio_estado_${nuevoEstado}`,
            observacion: observacionHistorial,
            datosAdicionales: datosAdicionales
        };
        // Datos a actualizar
        const data = {
            estado: nuevoEstado,
            historialCambios: {
                push: nuevoRegistro,
            },
            ...(inicio && { inicio }),
            ...(fin && { fin }),
        };
        try {
            return await prisma.cita.update({
                where: { id },
                data: data,
            });
        }
        catch (error) {
            console.error(`Error al cambiar estado de cita ${id} a ${nuevoEstado}:`, error);
            throw new Error(`No se pudo ${nuevoEstado} la cita.`);
        }
    }
    async confirmarCita(id, userId, observaciones) {
        return this.actualizarEstado(id, 'confirmada', userId, observaciones);
    }
    async cancelarCita(id, userId, observaciones) {
        return this.actualizarEstado(id, 'cancelada', userId, observaciones);
    }
    async reprogramarCita(id, inicio, fin, userId) {
        const obs = `Cita reprogramada de ${inicio.toISOString()} a ${fin.toISOString()}`;
        return this.actualizarEstado(id, 'solicitada', userId, obs, inicio, fin);
    }
}
//# sourceMappingURL=citas.service.js.map