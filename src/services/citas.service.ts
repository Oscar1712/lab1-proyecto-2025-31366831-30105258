// src/services/citas.service.ts

// 🟢 CORRECCIÓN 1: Importamos el cliente Prisma (singleton) con extensión .js
import prisma from '../config/database.js'; 

// 🟢 CORRECCIÓN 2: Importamos los tipos generados de Prisma desde la ubicación generada con extensión .js
import type { 
    Prisma,
    Cita as PrismaCita, 
    EstadoCita // 👈 Asumimos que es un ENUM de Prisma, debe ser importado
} from '@prisma/client'; 

// 🟢 Importamos los tipos de entrada desde el esquema Zod
import type { CreateCitaInput, UpdateCitaInput } from '../schemas/cita.schema.js'; 

type Cita = PrismaCita;
type CitaUncheckedCreate = Prisma.CitaUncheckedCreateInput;
type CitaUncheckedUpdate = Prisma.CitaUncheckedUpdateInput;

export class CitasService {
    
    /**
     * Crea una nueva cita y registra el cambio inicial en el historial.
     */
    async createCita(data: CreateCitaInput, userId: number): Promise<Cita> {
        
        // 1. Construir el historial de cambios inicial
        const historial: Prisma.JsonArray = [
            {
                timestamp: new Date().toISOString(), 
                responsableId: userId,
                accion: 'creada',
                observacion: data.motivo || 'Cita creada inicialmente.',
            },
        ];

        // 2. Construir los datos para Prisma
        const citaData: CitaUncheckedCreate = {
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
        } catch (error) {
            console.error('Error al crear cita:', error);
            throw new Error('No se pudo crear la cita debido a un error en la base de datos.');
        }
    }

    /**
     * Actualiza una cita existente y registra el cambio en el historial.
     */
    async updateCita(id: number, data: UpdateCitaInput, userId: number): Promise<Cita> {
        
        // 1. Prepara el registro de historial
        const nuevoRegistro = {
            timestamp: new Date().toISOString(),
            responsableId: userId,
            accion: 'actualizada',
            observacion: `Campos modificados: ${Object.keys(data).join(', ')}.`,
        };

        // 2. Construir los datos para la actualización
        const updateData: CitaUncheckedUpdate = {
            ...data,
            // Convertir fechas de entrada a Date si existen
            inicio: data.inicio ? new Date(data.inicio) : undefined,
            fin: data.fin ? new Date(data.fin) : undefined,
            
            // Forma correcta de hacer PUSH
            historialCambios: {
                push: nuevoRegistro as Prisma.JsonValue, 
            },
        };

        try {
            const cita = await prisma.cita.update({
                where: { id },
                data: updateData,
            });
            return cita;
        } catch (error) {
            console.error('Error al actualizar cita:', error);
            throw new Error('No se pudo actualizar la cita.');
        }
    }
    
    // ... resto del servicio ...

    // --- Métodos de Estado ---
    
    private async actualizarEstado(
        id: number, 
        nuevoEstado: EstadoCita, 
        userId: number, 
        observaciones?: string,
        inicio?: Date,
        fin?: Date,
    ): Promise<Cita> {
        
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
        const data: CitaUncheckedUpdate = {
            estado: nuevoEstado,
            historialCambios: {
                push: nuevoRegistro as Prisma.JsonValue,
            },
            ...(inicio && { inicio }), 
            ...(fin && { fin }),
        };

        try {
            return await prisma.cita.update({
                where: { id },
                data: data,
            });
        } catch (error) {
            console.error(`Error al cambiar estado de cita ${id} a ${nuevoEstado}:`, error);
            throw new Error(`No se pudo ${nuevoEstado} la cita.`);
        }
    }

    async confirmarCita(id: number, userId: number, observaciones?: string): Promise<Cita> {
        // ... (El resto de los métodos de estado están correctos)
        return this.actualizarEstado(id, 'confirmada', userId, observaciones);
    }
    
    async cancelarCita(id: number, userId: number, observaciones?: string): Promise<Cita> {
        return this.actualizarEstado(id, 'cancelada', userId, observaciones);
    }
    
    async reprogramarCita(id: number, inicio: Date, fin: Date, userId: number): Promise<Cita> {
        const obs = `Cita reprogramada de ${inicio.toISOString()} a ${fin.toISOString()}`;
        return this.actualizarEstado(id, 'solicitada', userId, obs, inicio, fin);
    }
    
    async getCitasPorProfesional(profesionalId: number, fecha: Date): Promise<Cita[]> {
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