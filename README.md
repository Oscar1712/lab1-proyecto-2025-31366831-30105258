## 🏥API de Gestión de Servicios Médicos
API REST completa para gestión integral de servicios médicos desarrollada con Node.js, Express, TypeScript, Prisma y MySQL. Incluye módulos para agendamiento clínico, atención ambulatoria, registro clínico electrónico y trazabilidad completa.

## 👥 Equipo de Desarrollo
Nombre	Cédula	Correo	Rol	Especialización
Oscar Rafael Palencia Rodríguez	31.366.831	1001.31366831.ucla@gmail.com	Backend Developer	Arquitectura API & Seguridad
Roberto Daniel Alvarez Barrios	30.105.258	1001.30105258.ucla@gmail.com	Database Architect	Modelado de Datos & Prisma
## 🚀 Stack Tecnológico
Backend & Runtime
- Runtime: Node.js 20+ LTS

- Framework: Express.js 5.x + TypeScript 5.x

- Autenticación: JWT + bcrypt + middlewares de autorización

- Documentación: Swagger/OpenAPI 3.0 con UI interactiva

- Seguridad: Helmet, CORS, Rate Limiting, Express Validator

Base de Datos & ORM
- Base de Datos: MySQL 8.0 con transacciones ACID

- ORM: Prisma 7.x con tipado fuerte

- Migraciones: Sistema de versionado de esquemas

- Cliente: Prisma Client con queries type-safe

Desarrollo & Calidad
Contenedores: Docker + Docker Compose

Linting: ESLint + Prettier + TypeScript ESLint

Hot Reload: Nodemon para desarrollo

Variables de Entorno: Dotenv con validación

## 📊 Módulos del Sistema
🔐 Módulo de Autenticación & Autorización
Login seguro con JWT

Roles: Admin, Médico, Recepcionista

Middlewares de autorización por ruta

Refresh tokens y manejo de sesiones

## 👥 Módulo de Gestión de Personas
Registro completo de pacientes

Documentación única por persona

Historial médico básico

Contactos de emergencia

## 👨‍⚕️ Módulo de Profesionales
Registro de profesionales de salud

Especialidades médicas

Control de agendas habilitadas

Información de contacto

## 📅 Módulo de Agenda & Citas
Bloques de agenda por profesional

Sistema de disponibilidad en tiempo real

Estados de cita: Solicitada, Confirmada, Cumplida, Cancelada

Control de conflictos de horarios

## 🏥 Módulo de Atención Clínica
Episodios de atención (SOAP)

Notas clínicas progresivas

Diagnósticos con codificación CIE-10

Seguimiento por episodio

## 📝 Módulo de Consentimientos
Consentimientos informados digitales

Múltiples métodos de aceptación

Trazabilidad completa

## 🛠️ Instalación y Configuración
Prerrequisitos
bash
# Verificar instalaciones
node --version    # ≥ 20.x
docker --version  # ≥ 24.x
docker-compose --version
1. Clonar y Configurar
bash
git clone https://github.com/Oscar1712/lab1-proyecto-2025-31366831-30105258.git
cd lab1-proyecto-2025-31366831-30105258

# Instalar dependencias
npm install

# Configurar ambiente
cp .env.example .env
2. Configuración de Variables de Entorno
env
# Server
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL="mysql://usuario:password@localhost:3306/medical_db"

# Security
JWT_SECRET=tu_jwt_secret_muy_seguro_aqui
JWT_EXPIRES_IN=24h

# Documentation
API_VERSION=v1
SWAGGER_ENABLED=true
3. Base de Datos con Docker
bash
# Levantar solo MySQL
docker-compose up -d mysql

# O levantar stack completo
docker-compose up -d

# Verificar contenedores
docker-compose ps
4. Configuración de Prisma
bash
# Generar cliente Prisma
npm run prisma:generate

# Ejecutar migraciones
npm run prisma:migrate

# Opcional: Poblar datos iniciales
npm run prisma:seed

# Abrir Prisma Studio (interfaz visual)
npm run prisma:studio
🚀 Ejecución del Proyecto
Modo Desarrollo
bash
# Hot reload con TypeScript
npm run dev

# Acceder a la aplicación
# http://localhost:3000

# Documentación Swagger
# http://localhost:3000/api-docs
Modo Producción
bash
# Compilar TypeScript
npm run build

# Ejecutar versión compilada
npm start

# Verificar salud del API
curl http://localhost:3000/health
📋 Comandos Disponibles
Comando	Descripción	Uso
npm run dev	# Servidor desarrollo con hot reload	Desarrollo
npm run build	# Compilación TypeScript → JavaScript	Producción
npm start	# Ejecutar versión compilada	Producción
npm run prisma:generate	# Generar cliente Prisma	Base de datos
npm run prisma:migrate	# Ejecutar migraciones	Base de datos
npm run prisma:studio	# Interfaz visual de BD	Base de datos
npm run lint	# Análisis estático de código	Calidad
npm run format	# Formateo automático de código	Calidad
## 🗄️ Estructura del Proyecto
src/
├── config/           # Configuraciones globales
│   ├── database.ts   # Cliente Prisma
│   ├── environment.ts # Validación de variables
│   └── swagger.ts    # Documentación OpenAPI
├── middleware/       # Middlewares personalizados
│   ├── auth.middleware.ts    # Autenticación JWT
│   ├── validation.middleware.ts # Validación de datos
│   ├── error.middleware.ts   # Manejo de errores
│   └── role.middleware.ts    # Control de acceso por roles
├── controllers/      # Lógica de endpoints
│   ├── auth.controller.ts
│   ├── personas.controller.ts
│   ├── profesionales.controller.ts
│   ├── citas.controller.ts
│   └── episodios.controller.ts
├── services/         # Lógica de negocio
│   ├── auth.service.ts
│   ├── personas.service.ts
│   ├── profesionales.service.ts
│   ├── agenda.service.ts
│   └── citas.service.ts
├── routes/           # Definición de rutas
│   ├── auth.routes.ts
│   ├── personas.routes.ts
│   ├── profesionales.routes.ts
│   └── citas.routes.ts
├── types/            # Tipos TypeScript
│   ├── express.d.ts  # Extensión de tipos Express
│   └── models.types.ts # Interfaces de datos
├── utils/            # Utilidades
│   ├── logger.ts     # Sistema de logging
│   ├── encryption.ts # Encriptación y JWT
│   ├── validators.ts # Validadores personalizados
│   └── constants.ts  # Constantes globales
└── server.ts         # Punto de entrada
📡 Endpoints Principales
Autenticación
text
POST /api/v1/auth/login
POST /api/v1/auth/refresh
POST /api/v1/auth/logout
Personas Atendidas
text
GET    /api/v1/personas
POST   /api/v1/personas
GET    /api/v1/personas/:id
PUT    /api/v1/personas/:id
GET    /api/v1/personas/:id/citas
GET    /api/v1/personas/:id/episodios
Profesionales
text
GET    /api/v1/profesionales
POST   /api/v1/profesionales  
GET    /api/v1/profesionales/:id
PUT    /api/v1/profesionales/:id
GET    /api/v1/profesionales/:id/agenda
GET    /api/v1/profesionales/:id/citas
Citas
text
POST   /api/v1/citas/solicitar
PUT    /api/v1/citas/:id/confirmar
PUT    /api/v1/citas/:id/cancelar
PUT    /api/v1/citas/:id/completar
GET    /api/v1/citas/persona/:personaId
GET    /api/v1/citas/profesional/:profesionalId
Episodios Clínicos
text
POST   /api/v1/episodios
POST   /api/v1/episodios/:episodioId/notas
POST   /api/v1/episodios/:episodioId/diagnosticos
PUT    /api/v1/episodios/:id/cerrar
## 🔒 Seguridad y Roles
Jerarquía de Permisos
Admin: Acceso completo al sistema

Médico: Gestión de pacientes, citas, episodios y notas clínicas

Recepcionista: Gestión de agenda, citas y registro de pacientes

Protecciones Implementadas
Validación JWT en todas las rutas protegidas

Rate limiting para prevención de ataques

CORS configurado para dominios específicos

Helmet para headers de seguridad HTTP

Sanitización de inputs con express-validator

🐳 Docker Compose
yaml
# docker-compose.yml
version: '3.8'
services:
  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=mysql://root:password@mysql:3306/medical_db
    depends_on:
      - mysql

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: medical_db
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
📚 Documentación API
La documentación interactiva está disponible en:

text
http://localhost:3000/api-docs
Incluye:

Especificación OpenAPI 3.0

Ejemplos de requests/responses

Esquemas de validación

Códigos de error

Autenticación integrada

🧪 Próximas Características
Tests unitarios con Jest

Tests de integración con Supertest

Logging estructurado con Winston

Métricas de performance

Sistema de notificaciones

Reportes y dashboards

Integración con sistemas externos

📄 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

📞 Soporte
Para soporte técnico o consultas sobre el proyecto, contactar a:

Oscar Palencia: 1001.31366831.ucla@gmail.com

Roberto Barrios: 1001.30105258.ucla@gmail.com

Laboratorio I - 2025-2 | Universidad Centroccidental Lisandro Alvarado

