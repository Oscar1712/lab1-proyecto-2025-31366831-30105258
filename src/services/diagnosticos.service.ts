// src/services/diagnosticos.service.ts

import prisma from '../config/database.js'; // 🟢 Correcto: Usando el Singleton
// 🟢 CORRECCIÓN: Importamos tipos desde la ubicación generada con extensión .js
import type { Prisma, Diagnostico as PrismaDiagnostico, EpisodioAtencion } from '@prisma/client'; 

import type { DiagnosticoInput } from '../schemas/diagnostico.schema.js';

type DiagnosticoWhereInput = Prisma.DiagnosticoWhereInput;
type Diagnostico = PrismaDiagnostico;


export class DiagnosticoService {

	// ... (Métodos getAllByEpisode, getById, create, update, delete son funcionales) ...

	// --- LÓGICA DE VALIDACIÓN COMPARTIDA ---
	
	/**
	 * Verifica que el Episodio de Atención al que se intenta vincular el diagnóstico exista.
	 * @param episodioId ID del Episodio de Atención.
	 */
	private async validateEpisodioExistence(episodioId: number): Promise<void> {
		const episodio = await prisma.episodioAtencion.findUnique({
			where: { id: episodioId },
		});

		if (!episodio) {
			throw new Error(`Episodio de atención ID ${episodioId} no encontrado`);
		}
	}
    
    // 1. Obtener todos los diagnósticos (generalmente, se buscarán por episodio)
	async getAllByEpisode(episodioId: number): Promise<Diagnostico[]> {
		return await prisma.diagnostico.findMany({
			where: { episodioId },
			orderBy: { principal: 'desc' }, // Mostrar principal primero
		});
	}

	// 2. Obtener diagnóstico por ID
	async getById(id: number): Promise<Diagnostico> {
		const diagnostico = await prisma.diagnostico.findUnique({
			where: { id },
		});

		if (!diagnostico) {
			throw new Error(`Diagnóstico ID ${id} no encontrado`);
		}
		return diagnostico; 
	}

	// 3. Crear nuevo diagnóstico
	async create(data: DiagnosticoInput): Promise<Diagnostico> {
		// Validación de negocio: Asegurar que el episodio exista
		await this.validateEpisodioExistence(data.episodioId);
		
		return await prisma.diagnostico.create({
			data: data,
		});
	}

	// 4. Actualizar diagnóstico
	async update(id: number, data: Partial<DiagnosticoInput>): Promise<Diagnostico> {
		await this.getById(id); // Verifica existencia del diagnóstico
		
		// Si se intenta cambiar el episodioId, validamos su existencia
		if (data.episodioId) {
			await this.validateEpisodioExistence(data.episodioId);
		}

		return await prisma.diagnostico.update({
			where: { id },
			data: data,
		});
	}

	// 5. Eliminar diagnóstico
	async delete(id: number): Promise<Diagnostico> {
		await this.getById(id); // Verifica existencia
		return await prisma.diagnostico.delete({ where: { id } });
	}
}