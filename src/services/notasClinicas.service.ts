// src/services/notasClinicas.service.ts

// Importamos la instancia centralizada
import prisma from '../config/database';
import * as PrismaTypes from '@prisma/client'; 

// Definición de Tipos
type NotaClinica = PrismaTypes.NotaClinica; // Usamos el tipo real de Prisma

class NotasClinicasService {
    // Crear una nota clínica asociada a un episodio
    async createNota(data: { episodioId: number, profesionalId: number, contenido: string, tipo: string }): Promise<NotaClinica> {
        
        // Lógica de Prisma
        const newNota = await prisma.notaClinica.create({
            data: {
                ...data,
                // Asumiendo que se gestione fechas
            },
        });
        
        return newNota;
    }

    // Obtener una nota específica
    async getNotaById(notaId: number): Promise<NotaClinica | null> {
        
        const nota = await prisma.notaClinica.findUnique({
            where: { id: notaId },
        });
        
        if (!nota) return null; // No lanzar error, dejar que el controlador maneje el 404
        return nota;
    }

    // Obtener todas las notas de un episodio
    async getNotasByEpisodio(episodioId: number): Promise<NotaClinica[]> {
        
        const notas = await prisma.notaClinica.findMany({
            where: { episodioId: episodioId },
            orderBy: { fechaCreacion: 'desc' },
        });

        return notas;
    }

    // Actualizar el contenido de una nota 
    async updateNota(notaId: number, data: { contenido?: string, tipo?: string }): Promise<NotaClinica | null> {
        
        const notaActualizada = await prisma.notaClinica.update({
            where: { id: notaId },
            data: data,
        });
        
        return notaActualizada;
    }
}

export const notasClinicasService = new NotasClinicasService();