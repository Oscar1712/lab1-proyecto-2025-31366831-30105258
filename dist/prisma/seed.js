// prisma/seed.ts
import { PrismaClient } from '../src/generated/prisma/client';
// 1. Inicializar el cliente de Prisma
const prisma = new PrismaClient();
// 2. Definición de Datos de Prueba usando los tipos generados por Prisma
// Usamos "ModeloCreateInput" para datos de creación.
const usuariosIniciales = [
    { email: 'admin@clinic.com', password: 'hashed_password_123', rol: 'admin' },
    { email: 'medico@clinic.com', password: 'hashed_password_456', rol: 'medico' },
    { email: 'recepcionista@clinic.com', password: 'hashed_password_789', rol: 'recepcionista' },
];
const personasIniciales = [
    {
        tipoDocumento: 'CC',
        numeroDocumento: '1001',
        nombres: 'Ana',
        apellidos: 'García',
        // Las fechas deben ser objetos Date de JavaScript
        fechaNacimiento: new Date('1990-05-15T00:00:00.000Z'),
        sexo: 'Femenino',
        estado: 'activo',
    },
    {
        tipoDocumento: 'TI',
        numeroDocumento: '2002',
        nombres: 'Pedro',
        apellidos: 'Ramírez',
        fechaNacimiento: new Date('2005-01-20T00:00:00.000Z'),
        sexo: 'Masculino',
        estado: 'activo',
    },
];
const profesionalesIniciales = [
    {
        nombres: 'Dr. Javier',
        apellidos: 'Pérez',
        registroProfesional: 'MP-12345',
        especialidad: 'Medicina General',
        agendaHabilitada: true,
    },
];
const unidadesIniciales = [
    {
        nombre: 'Sede Principal',
        tipo: 'Sede',
        direccion: 'Calle Falsa 123',
        estado: 'activo',
    },
    {
        nombre: 'Consultorio 301',
        tipo: 'Consultorio',
        direccion: 'Piso 3',
        estado: 'activo',
    },
];
/**
 * Función principal para poblar la base de datos (Seeder)
 */
async function main() {
    console.log(`\n-- Iniciando Seeding --`);
    // --- Inserción de Usuarios ---
    console.log(`\nInsertando ${usuariosIniciales.length} Usuarios...`);
    for (const user of usuariosIniciales) {
        await prisma.usuario.upsert({
            where: { email: user.email },
            update: {},
            create: user,
        });
    }
    console.log('✅ Usuarios insertados.');
    // --- Inserción de Pacientes ---
    console.log(`Insertando ${personasIniciales.length} Pacientes...`);
    for (const persona of personasIniciales) {
        await prisma.personaAtendida.upsert({
            where: { numeroDocumento: persona.numeroDocumento },
            update: {},
            create: persona,
        });
    }
    console.log('✅ Pacientes insertados.');
    // --- Inserción de Profesionales ---
    console.log(`Insertando ${profesionalesIniciales.length} Profesionales...`);
    for (const profesional of profesionalesIniciales) {
        await prisma.profesional.upsert({
            where: { registroProfesional: profesional.registroProfesional },
            update: {},
            create: profesional,
        });
    }
    console.log('✅ Profesionales insertados.');
    // --- Inserción de Unidades de Atención ---
    console.log(`Insertando ${unidadesIniciales.length} Unidades...`);
    for (const unidad of unidadesIniciales) {
        await prisma.unidadAtencion.upsert({
            where: { nombre: unidad.nombre },
            update: {},
            create: unidad,
        });
    }
    console.log('✅ Unidades insertadas.');
    // --- EJEMPLO con Relaciones (Bloques de Agenda) ---
    const drPerez = await prisma.profesional.findUnique({ where: { registroProfesional: 'MP-12345' } });
    const sedePrincipal = await prisma.unidadAtencion.findUnique({ where: { nombre: 'Sede Principal' } });
    if (drPerez && sedePrincipal) {
        console.log(`\nInsertando Bloque de Agenda...`);
        await prisma.bloqueAgenda.create({
            data: {
                profesionalId: drPerez.id,
                unidadId: sedePrincipal.id,
                inicio: new Date('2025-12-10T08:00:00.000Z'),
                fin: new Date('2025-12-10T12:00:00.000Z'),
                capacidad: 10,
                estado: 'abierto', // Usamos el valor del ENUM (minúscula)
            },
        });
        console.log('✅ Bloque de Agenda insertado.');
    }
    console.log(`\n-- Seeding Completo --`);
}
// 3. Manejo de Ejecución y Desconexión
main()
    .catch((e) => {
    // eslint-disable-next-line no-console
    console.error('❌ Error en el proceso de seeding:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
