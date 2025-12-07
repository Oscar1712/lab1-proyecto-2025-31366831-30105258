// src/services/profesionales.service.ts

import prisma from '../config/database.js'; // 🟢 Correcto: Usando el Singleton
// 🟢 CORRECCIÓN: Importamos el namespace de tipos Prisma
import type { Prisma } from '@prisma/client'; 
import { CreateProfesionalInput, UpdateProfesionalInput } from '../schemas/profesional.schema.js';

// ✅ Tipado Estricto: Usamos el tipo de Prisma correcto
type ProfesionalWhereInput = Prisma.ProfesionalWhereInput;

export class ProfesionalesService {
	async getAll(filters: {
		especialidad?: string;
		estado?: string;
		page?: number;
		limit?: number;
	}) {
		const { especialidad, estado, page = 1, limit = 10 } = filters;

		// 🟢 Usamos el tipo correcto
		const where: ProfesionalWhereInput = {};

		if (especialidad) {
			where.especialidad = { contains: especialidad };
		}

		if (estado) {
			where.estado = estado;
		}

		const skip = (page - 1) * limit;
		const total = await prisma.profesional.count({ where });

		const profesionales = await prisma.profesional.findMany({
			where,
			skip,
			take: limit,
			orderBy: { createdAt: 'desc' },
			include: {
				bloques: {
					take: 5,
					orderBy: { inicio: 'desc' },
					select: {
						id: true,
						inicio: true,
						fin: true,
						estado: true,
					},
				},
				citas: {
					take: 5,
					orderBy: { inicio: 'desc' },
					select: {
						id: true,
						inicio: true,
						estado: true,
					},
				},
			},
		});

		return {
			data: profesionales,
			pagination: {
				page,
				limit,
				total,
				pages: Math.ceil(total / limit),
			},
		};
	}

	async getById(id: number) {
		const profesional = await prisma.profesional.findUnique({
			where: { id },
			include: {
				bloques: {
					orderBy: { inicio: 'asc' },
					include: {
						unidad: {
							select: {
								id: true,
								nombre: true,
							},
						},
					},
				},
				citas: {
					orderBy: { inicio: 'desc' },
					include: {
						persona: {
							select: {
								id: true,
								nombres: true,
								apellidos: true,
							},
						},
						unidad: {
							select: {
								id: true,
								nombre: true,
							},
						},
					},
				},
				notasClinicas: {
					orderBy: { fecha: 'desc' },
					take: 10,
					select: {
						id: true,
						fecha: true,
                        // El resto de la selección que tenías antes
                    },
				},
			},
		});

        if (!profesional) {
            throw new Error('Profesional no encontrado');
        }

		return profesional;
	}

	async create(data: CreateProfesionalInput) {
        // Verificar unicidad de registro profesional
        const existing = await prisma.profesional.findUnique({
            where: { registroProfesional: data.registroProfesional },
        });

        if (existing) {
            throw new Error('Ya existe un profesional con este registro');
        }

		return await prisma.profesional.create({
			data: {
				...data,
			},
		});
	}

	async update(id: number, data: UpdateProfesionalInput) {
        const profesional = await this.getById(id);

        // Si se actualiza el registro profesional, verificar unicidad
        if (data.registroProfesional && data.registroProfesional !== profesional.registroProfesional) {
            const existing = await prisma.profesional.findUnique({
                where: { registroProfesional: data.registroProfesional },
            });
            if (existing) {
                throw new Error('Ya existe otro profesional con este registro');
            }
        }

		return await prisma.profesional.update({
			where: { id },
			data: data,
		});
	}

	async delete(id: number) {
        // En una aplicación real, probablemente harías una eliminación suave (estado: inactivo)
        // en lugar de una eliminación dura para mantener la integridad referencial (citas, notas).
		return await prisma.profesional.delete({ where: { id } });
	}
}