# ----------------------------------------------------------------------
# ETAPA 1: BUILD (Compilación de TypeScript y Generación de Prisma)
# ----------------------------------------------------------------------
FROM node:20-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# 1. Copia package.json y package-lock.json
COPY package.json package-lock.json ./

# 2. Copia los archivos necesarios para la instalación y compilación
# Esto es esencial para que 'prisma generate' (postinstall) y 'tsc' funcionen.
COPY prisma/ ./prisma/
COPY .env ./.env
COPY src/ ./src/
COPY tsconfig.json ./

# 3. Instala las dependencias (ejecuta prisma generate)
# El cliente de Prisma se genera aquí.
RUN npm install

# 4. Compila el código TypeScript a JavaScript (genera la carpeta 'dist')
RUN npm run build


# ----------------------------------------------------------------------
# ETAPA 2: PRODUCCIÓN (Runtime Final)
# ----------------------------------------------------------------------
FROM node:20-alpine AS production

# Establece el directorio de trabajo
WORKDIR /app

# 1. Copia el manifiesto de dependencias
COPY package.json ./

# 2. Instala solo las dependencias de producción, OMITIENDO los scripts.
# La bandera --ignore-scripts evita que 'prisma generate' se ejecute y falle.
# Ya no necesitamos el schema, porque el cliente ya fue generado en la etapa 'build'.
RUN npm install --only=production --ignore-scripts 

# 3. Copia el código compilado (dist) y el cliente de Prisma generado
# Copia los archivos JavaScript compilados
COPY --from=build /app/dist ./dist

# Copia los binarios y librerías del cliente de Prisma 
COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma 

# Copia la carpeta GENERADA por tu 'output' personalizado en schema.prisma
COPY --from=build /app/src/generated /app/src/generated 

# 4. Copia el archivo .env
COPY .env ./.env

# Puerto de la API
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]