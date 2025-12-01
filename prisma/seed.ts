// ============================================
// ARCHIVO: prisma/seed.ts
// ============================================
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  const hashedPassword = await bcrypt.hash('Admin123!', 10);
  
  const admin = await prisma.usuario.upsert({
    where: { email: 'admin@hospital.com' },
    update: {},
    create: {
      email: 'admin@hospital.com',
      password: hashedPassword,
      rol: 'admin',
    },
  });
  console.log('✅ Usuario admin creado:', admin.email);

  const profesional1 = await prisma.profesional.create({
    data: {
      nombres: 'Juan Carlos',
      apellidos: 'Pérez García',
      registroProfesional: 'MED-001-2024',
      especialidad: 'Medicina General',
      correo: 'jperez@hospital.com',
      telefono: '+34 600 123 456',
      agendaHabilitada: true,
    },
  });

  const profesional2 = await prisma.profesional.create({
    data: {
      nombres: 'María Elena',
      apellidos: 'Rodríguez López',
      registroProfesional: 'MED-002-2024',
      especialidad: 'Cardiología',
      correo: 'mrodriguez@hospital.com',
      telefono: '+34 600 123 457',
      agendaHabilitada: true,
    },
  });
  console.log('✅ Profesionales creados');

  const unidad1 = await prisma.unidadAtencion.create({
    data: {
      nombre: 'Consultorio 1 - Medicina General',
      tipo: 'consultorio',
      direccion: 'Planta 2, Ala Norte',
      telefono: '+34 91 123 4567',
      horarioReferencia: 'L-V 08:00-20:00',
    },
  });

  const unidad2 = await prisma.unidadAtencion.create({
    data: {
      nombre: 'Consultorio 2 - Cardiología',
      tipo: 'consultorio',
      direccion: 'Planta 3, Ala Sur',
      telefono: '+34 91 123 4568',
      horarioReferencia: 'L-V 09:00-18:00',
    },
  });
  console.log('✅ Unidades de atención creadas');

  const paciente1 = await prisma.personaAtendida.create({
    data: {
      tipoDocumento: 'DNI',
      numeroDocumento: '12345678A',
      nombres: 'Pedro',
      apellidos: 'González Martínez',
      fechaNacimiento: new Date('1980-05-15'),
      sexo: 'M',
      correo: 'pedro.gonzalez@email.com',
      telefono: '+34 600 111 222',
      direccion: 'Calle Mayor 123, Madrid',
      contactoEmergencia: 'Ana González - +34 600 111 223',
      alergias: 'Penicilina',
    },
  });

  const paciente2 = await prisma.personaAtendida.create({
    data: {
      tipoDocumento: 'DNI',
      numeroDocumento: '87654321B',
      nombres: 'Laura',
      apellidos: 'Fernández Sánchez',
      fechaNacimiento: new Date('1992-08-20'),
      sexo: 'F',
      correo: 'laura.fernandez@email.com',
      telefono: '+34 600 333 444',
      direccion: 'Avenida de la Paz 45, Madrid',
      contactoEmergencia: 'Carlos Fernández - +34 600 333 445',
    },
  });
  console.log('✅ Pacientes creados');

  const mañana = new Date();
  mañana.setDate(mañana.getDate() + 1);
  mañana.setHours(9, 0, 0, 0);

  const finMañana = new Date(mañana);
  finMañana.setHours(14, 0, 0, 0);

  await prisma.bloqueAgenda.create({
    data: {
      profesionalId: profesional1.id,
      unidadId: unidad1.id,
      inicio: mañana,
      fin: finMañana,
      capacidad: 10,
      estado: 'abierto',
    },
  });
  console.log('✅ Bloques de agenda creados');

  const inicioCita = new Date(mañana);
  inicioCita.setHours(10, 0, 0, 0);
  const finCita = new Date(inicioCita);
  finCita.setMinutes(30);

  await prisma.cita.create({
    data: {
      personaId: paciente1.id,
      profesionalId: profesional1.id,
      unidadId: unidad1.id,
      inicio: inicioCita,
      fin: finCita,
      motivo: 'Consulta de control anual',
      canal: 'presencial',
      estado: 'confirmada',
      historialCambios: JSON.stringify([
        { fecha: new Date(), estado: 'solicitada', usuario: 'sistema' },
        { fecha: new Date(), estado: 'confirmada', usuario: 'recepcionista' },
      ]),
    },
  });
  console.log('✅ Cita creada');

  console.log('🎉 Seed completado');
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });