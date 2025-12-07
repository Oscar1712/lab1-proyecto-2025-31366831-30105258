# ----------------------------------------------------------------------
# ETAPA 1: BUILD (Compilación de TypeScript y Generación de Prisma)
# ----------------------------------------------------------------------
FROM node:20-alpine AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# 1. Copia solo los archivos de manifiesto
COPY package.json package-lock.json ./

# 2. Copia los archivos necesarios para el postinstall de Prisma
# **ESTE PASO RESUELVE EL ERROR DE "SCHEMA NOT FOUND"**
COPY prisma/ ./prisma/
COPY .env ./.env
COPY src/ ./src/
COPY tsconfig.json ./

# 3. Instala las dependencias de producción y desarrollo
# Esto ejecuta automáticamente 'prisma generate' (postinstall)
RUN npm install

# 4. Compila el código TypeScript a JavaScript
RUN npm run build


# ----------------------------------------------------------------------
# ETAPA 2: PRODUCCIÓN (Runtime Final)
# Se usa una imagen base ligera para el entorno de ejecución.
# ----------------------------------------------------------------------
FROM node:20-alpine AS production

# Establece el directorio de trabajo
WORKDIR /app

# 1. Copia el manifiesto de dependencias
COPY package.json ./

# 2. Instala solo las dependencias de producción
RUN npm install --only=production

# 3. Copia el código compilado (dist) y el cliente de Prisma generado
# Copia los archivos JavaScript compilados
COPY --from=build /app/dist ./dist

# Copia los binarios y librerías del cliente de Prisma (esenciales para la conexión)
COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma
COPY --from=build /app/src/generated /app/src/generated

# 4. Copia el archivo .env para inyección de variables (aunque Docker Compose ya lo maneja)
COPY .env ./.env

# Puerto de la API
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]