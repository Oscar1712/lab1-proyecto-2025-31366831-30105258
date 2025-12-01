// src/services/notasClinicas.service.ts

// 1. IMPORTACIÓN DE PRISMA Y TIPOS (Corregido para TS2305)
// Importamos la instancia centralizada
import prisma from '../config/database'; // ⬅️ SIN .ts al final
// Importamos el bundle solo para los tipos de la base de datos
import * as PrismaTypes from '@prisma/client'; 

// Definición de Tipos
type NotaClinica = PrismaTypes.NotaClinica; // Usamos el tipo real de Prisma

class NotasClinicasService {
    // 1. Crear una nota clínica asociada a un episodio
    // Asumo que episodioId y profesionalId son numbers en el schema de Prisma
    async createNota(data: { episodioId: number, profesionalId: number, contenido: string, tipo: string }): Promise<NotaClinica> {
        
        // Lógica de Prisma
        const newNota = await prisma.notaClinica.create({
            data: {
                ...data,
                // Asumiendo que Prisma gestiona fechas
            },
        });
        
        return newNota;
    }

    // 2. Obtener una nota específica
    // 🛑 CORRECCIÓN DE TIPADO: Cambiado de 'string' a 'number'
    async getNotaById(notaId: number): Promise<NotaClinica | null> {
        
        const nota = await prisma.notaClinica.findUnique({
            where: { id: notaId },
        });
        
        if (!nota) return null; // No lanzar error, dejar que el controlador maneje el 404
        return nota;
    }

    // 3. Obtener todas las notas de un episodio
    // 🛑 CORRECCIÓN DE TIPADO: Cambiado de 'string' a 'number'
    async getNotasByEpisodio(episodioId: number): Promise<NotaClinica[]> {
        
        const notas = await prisma.notaClinica.findMany({
            where: { episodioId: episodioId },
            orderBy: { fechaCreacion: 'desc' },
        });

        return notas;
    }

    // 4. Actualizar el contenido de una nota 
    // 🛑 CORRECCIÓN DE TIPADO: Cambiado de 'string' a 'number'
    async updateNota(notaId: number, data: { contenido?: string, tipo?: string }): Promise<NotaClinica | null> {
        
        const notaActualizada = await prisma.notaClinica.update({
            where: { id: notaId },
            data: data,
        });
        
        return notaActualizada;
    }
}

export const notasClinicasService = new NotasClinicasService();