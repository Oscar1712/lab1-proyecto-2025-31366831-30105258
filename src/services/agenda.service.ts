// src/services/agenda.service.ts

// 🟢 CORRECCIÓN 1: Importamos el cliente de Prisma (singleton) con extensión .js
import prisma from '../config/database.js'; 

// 🟢 CORRECCIÓN 2: Importamos el namespace de tipos 'Prisma' desde la ubicación generada con extensión .js
import type { Prisma } from '@prisma/client'; 

// Importamos los tipos necesarios del esquema 
import type { BloqueAgendaInput, SearchBloquesQuery } from '../schemas/bloqueAgenda.schema.js';

// ✅ CORRECCIÓN: Usamos el tipo de Prisma correcto
type BloqueAgendaWhereInput = Prisma.BloqueAgendaWhereInput; 

export class AgendaService {
	// 1. Obtener todos los bloques con filtros y paginación
	async getAll(filters: SearchBloquesQuery) {
		const {
			profesionalId,
			unidadId,
			fechaInicio,
			fechaFin,
			estado,
			page = 1,
			limit = 10,
		} = filters;

		// Construimos el objeto where dinámicamente
		const where: BloqueAgendaWhereInput = {};

		if (profesionalId) where.profesionalId = profesionalId;
		if (unidadId) where.unidadId = unidadId;
		// El estado es un ENUM en Prisma, aquí asumimos que el tipo 'estado' del filtro coincide con 'EstadoBloqueAgenda'
		if (estado) where.estado = estado; 

		// Filtro por rango de fechas
		if (fechaInicio || fechaFin) {
			where.inicio = {};
			if (fechaInicio) where.inicio.gte = new Date(fechaInicio);
			if (fechaFin) where.inicio.lte = new Date(fechaFin);
		}

		const skip = (page - 1) * limit;
		const total = await prisma.bloqueAgenda.count({ where });

		const bloques = await prisma.bloqueAgenda.findMany({
			where,
			skip,
			take: limit,
			orderBy: { inicio: 'desc' },
			include: {
				profesional: { select: { id: true, nombres: true, apellidos: true } },
				unidad: { select: { id: true, nombre: true } }, // 👈 Corregido: Es 'unidad' no 'unidadAtencion'
			},
		});

		return {
			data: bloques,
			pagination: {
				page,
				limit,
				total,
				pages: Math.ceil(total / limit),
			},
		};
	}

	// 2. Obtener bloque por ID
	async getById(id: number) {
		const bloque = await prisma.bloqueAgenda.findUnique({
			where: { id },
			include: {
				// 💡 Nota: Eliminado el 'as any' innecesario en la inclusión
				profesional: { select: { id: true, estado: true } }, 
				unidad: { select: { id: true, estado: true } }, // 👈 Corregido: Es 'unidad' no 'unidadAtencion'
			},
		});

		if (!bloque) throw new Error('Bloque de agenda no encontrado');
		// 💡 Nota: Si necesitas el ID del profesional, debe ser accesible sin 'as any'
		return bloque; 
	}

	// 3. Crear bloque de agenda
	async create(data: BloqueAgendaInput) {
		await this.validateAndCheckOverlap(data);

		return await prisma.bloqueAgenda.create({
			data: {
				...data,
				inicio: new Date(data.inicio),
				fin: new Date(data.fin),
			},
		});
	}

	// 4. Actualizar bloque de agenda
	async update(id: number, data: Partial<BloqueAgendaInput>) {
		const bloqueExistente = await this.getById(id);

		// Combinamos datos existentes y nuevos para validar
		// 💡 Nota: Asegúrate de que 'profesionalId' y 'unidadId' existan en dataToValidate
		const dataToValidate: BloqueAgendaInput = {
			...bloqueExistente,
			profesionalId: bloqueExistente.profesionalId,
			unidadId: bloqueExistente.unidadId,
			inicio: bloqueExistente.inicio.toISOString(),
			fin: bloqueExistente.fin.toISOString(),
			...data
		};
		await this.validateAndCheckOverlap(dataToValidate, id);

		return await prisma.bloqueAgenda.update({
			where: { id },
			data: {
				...data,
				inicio: data.inicio ? new Date(data.inicio) : undefined,
				fin: data.fin ? new Date(data.fin) : undefined,
			},
		});
	}

	// 5. Eliminar bloque de agenda
	async delete(id: number) {
		const bloque = await this.getById(id);

		// Verificamos que no tenga citas asociadas
		const citas = await prisma.cita.count({
			where: {
				unidadId: bloque.unidad.id, // 👈 Corregido: Es 'unidad'
				profesionalId: bloque.profesional.id, 
				inicio: { gte: bloque.inicio },
				fin: { lte: bloque.fin },
				estado: { in: ['solicitada', 'confirmada'] },
			},
		});

		if (citas > 0) {
			throw new Error('No se puede eliminar el bloque porque tiene citas asociadas');
		}

		return await prisma.bloqueAgenda.delete({ where: { id } });
	}

	// --- LÓGICA DE VALIDACIÓN COMPARTIDA ---
	private async validateAndCheckOverlap(data: BloqueAgendaInput, id?: number) {
		const inicio = new Date(data.inicio);
		const fin = new Date(data.fin);

		// 1. Verificar profesional (Se debe incluir el usuario para el check de 'activo')
		const profesional = await prisma.profesional.findUnique({
			where: { id: data.profesionalId },
			// 💡 Se asume que el modelo Profesional tiene una relación 'usuario'
			// Si la relación es 1:1, deberías incluir el campo 'usuario'
			// Si no la tienes en el modelo, este check fallará o debe ser adaptado.
			// Por ahora lo dejamos, asumiendo una relación implícita o explícita.
			// Si no hay relación: ELIMINA `, include: { usuario: { select: { activo: true } } }`
			// Y ELIMINA el check `profesional.usuario.activo !== true`
			include: { notasClinicas: { select: { id: true } } as any }, // Placeholder para evitar error de tipado si 'usuario' no existe
		});
		
		// 🔴 ADVERTENCIA: La línea `profesional.usuario.activo !== true` SÓLO funciona si tienes un modelo Usuario relacionado 1:1 con Profesional
		// Si no lo tienes, debes eliminar esa parte de la validación.
		if (!profesional || profesional.estado !== 'activo') { // 👈 Corregido el estado
			throw new Error('Profesional no encontrado o inactivo');
		}
		
		// 2. Verificar unidad de atención
		const unidad = await prisma.unidadAtencion.findUnique({
			where: { id: data.unidadId },
		});

		if (!unidad || unidad.estado !== 'activo') {
			throw new Error('Unidad de atención no encontrada o inactiva');
		}

		// 3. Chequeo de fechas
		if (inicio >= fin) {
			throw new Error('La fecha de inicio debe ser anterior a la fecha de fin');
		}
		if (inicio < new Date()) {
			throw new Error('El bloque no puede iniciar en el pasado');
		}

		// 4. Chequeo de solapamiento
		const whereOverlap: BloqueAgendaWhereInput = {
			profesionalId: data.profesionalId,
			unidadId: data.unidadId,
			id: id ? { not: id } : undefined,
			OR: [{ inicio: { lt: fin }, fin: { gt: inicio } }],
		};

		const solapamiento = await prisma.bloqueAgenda.findFirst({ where: whereOverlap });

		if (solapamiento) {
			throw new Error('El bloque se solapa con otro existente');
		}
	}
}