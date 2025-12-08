// src/services/citas.service.ts
// 🟢 CORRECCIÓN 1: Importamos el cliente Prisma (singleton) con extensión .js
import prisma from '../config/database.js';
export class CitasService {
    /**
     * Crea una nueva cita y registra el cambio inicial en el historial.
     */
    async createCita(data, userId) {
        // 1. Construir el historial de cambios inicial
        const historial = [
            {
                timestamp: new Date().toISOString(),
                responsableId: userId,
                accion: 'creada',
                observacion: data.motivo || 'Cita creada inicialmente.',
            },
        ];
        // 2. Construir los datos para Prisma
        const citaData = {
            ...data,
            // Asegurando que los campos de fecha están como Date si el esquema lo requiere
            inicio: new Date(data.inicio),
            fin: new Date(data.fin),
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
            timestamp: new Date().toISOString(),
            responsableId: userId,
            accion: 'actualizada',
            observacion: `Campos modificados: ${Object.keys(data).join(', ')}.`,
        };
        // 2. Construir los datos para la actualización
        const updateData = {
            ...data,
            // Convertir fechas de entrada a Date si existen
            inicio: data.inicio ? new Date(data.inicio) : undefined,
            fin: data.fin ? new Date(data.fin) : undefined,
            // Forma correcta de hacer PUSH
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
    // ... resto del servicio ...
    // --- Métodos de Estado ---
    async actualizarEstado(id, nuevoEstado, userId, observaciones, inicio, fin) {
        const observacionHistorial = observaciones || `Estado cambiado a ${nuevoEstado}.`;
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
        // ... (El resto de los métodos de estado están correctos)
        return this.actualizarEstado(id, 'confirmada', userId, observaciones);
    }
    async cancelarCita(id, userId, observaciones) {
        return this.actualizarEstado(id, 'cancelada', userId, observaciones);
    }
    async reprogramarCita(id, inicio, fin, userId) {
        const obs = `Cita reprogramada de ${inicio.toISOString()} a ${fin.toISOString()}`;
        return this.actualizarEstado(id, 'solicitada', userId, obs, inicio, fin);
    }
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
}
//# sourceMappingURL=citas.service.js.map