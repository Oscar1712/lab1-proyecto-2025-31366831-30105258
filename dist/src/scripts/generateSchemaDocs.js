import fs from 'fs';
import path from 'path';
import { z, ZodObject } from 'zod';
import * as schemaExports from '../schemas/index.js'; // Asegúrate que schemas/index.ts exporte todo
import { fileURLToPath } from 'url';
// ----------------------------------------------------------------------
// UTILS
// ----------------------------------------------------------------------
/**
 * Analiza un esquema ZodType para extraer detalles de validación.
 */
function analyzeField(key, field, descriptions) {
    const validations = [];
    let fieldType = 'Unknown';
    let isRequired = true;
    let baseField = field;
    // Si es opcional o nullable, encontramos el esquema base
    if (field instanceof z.ZodOptional || field instanceof z.ZodNullable) {
        baseField = field._def.innerType;
        isRequired = false;
    }
    fieldType = baseField.constructor.name.replace('Zod', '');
    // Extracción de validaciones específicas
    if (baseField instanceof z.ZodString) {
        baseField._def.checks?.forEach((check) => {
            if (check.kind === 'min')
                validations.push(`Mínimo ${check.value} caracteres`);
            if (check.kind === 'max')
                validations.push(`Máximo ${check.value} caracteres`);
            if (check.kind === 'regex')
                validations.push('Formato específico');
            if (check.kind === 'email')
                validations.push('Email válido');
        });
    }
    if (baseField instanceof z.ZodEnum) {
        const enumValues = baseField._def.values;
        if (Array.isArray(enumValues)) {
            validations.push(`Valores permitidos: ${enumValues.join(', ')}`);
        }
    }
    if (baseField instanceof z.ZodNumber) {
        baseField._def.checks?.forEach((check) => {
            if (check.kind === 'min')
                validations.push(`Mínimo ${check.value}`);
            if (check.kind === 'max')
                validations.push(`Máximo ${check.value}`);
            if (check.kind === 'int')
                validations.push('Número entero');
        });
    }
    return {
        name: key,
        type: fieldType,
        required: isRequired,
        description: descriptions[key] || '-',
        validations,
    };
}
/**
 * Genera la documentación de esquema para la salida Markdown.
 */
function generateMarkdownDocs(docs) {
    let markdown = '# 📝 Documentación de Esquemas (Zod)\n\n';
    markdown += 'Esta documentación es generada automáticamente a partir de los esquemas Zod.\n\n';
    markdown += '---\n\n';
    docs.forEach(doc => {
        markdown += `## ${doc.name}\n\n`;
        markdown += `${doc.description}\n\n`;
        markdown += '| Campo | Tipo | Requerido | Descripción | Validaciones |\n';
        markdown += '| :--- | :--- | :---: | :--- | :--- |\n';
        doc.fields.forEach(field => {
            markdown += `| **${field.name}** | ${field.type} | ${field.required ? '✅' : '❌'} | ${field.description} | ${field.validations.join(', ') || '-'} |\n`;
        });
        // Solo incluir ejemplos si existen
        if (doc.examples) {
            markdown += '\n### Ejemplos\n\n';
            markdown += '```json\n';
            markdown += JSON.stringify(doc.examples, null, 2);
            markdown += '\n```\n\n';
        }
        markdown += '---\n\n';
    });
    return markdown;
}
// Nota: Necesitarás extender esta función para soportar más esquemas
function getFieldDescriptions(schemaName) {
    // Puedes tener diferentes conjuntos de descripciones por esquema
    if (schemaName.includes('persona')) {
        return {
            tipoDocumento: 'Tipo de documento de identidad',
            numeroDocumento: 'Número único de documento',
            nombres: 'Nombres de la persona',
            apellidos: 'Apellidos de la persona',
            fechaNacimiento: 'Fecha de nacimiento en formato ISO',
            sexo: 'Sexo biológico',
            correo: 'Correo electrónico de contacto',
            telefono: 'Número de teléfono con código de país',
            direccion: 'Dirección completa',
            contactoEmergencia: 'Contacto en caso de emergencia',
            alergias: 'Alergias conocidas del paciente',
            antecedentesResumen: 'Resumen de antecedentes médicos',
            estado: 'Estado del registro',
        };
    }
    return {};
}
// ----------------------------------------------------------------------
// GENERADOR PRINCIPAL
// ----------------------------------------------------------------------
export function generateSchemaDocs() {
    const docs = [];
    // Iterar sobre todas las exportaciones del archivo index
    for (const key in schemaExports) {
        const schema = schemaExports[key];
        // Solo procesar esquemas Zod Object que terminan en 'Schema'
        if (schema instanceof ZodObject && key.endsWith('Schema')) {
            const schemaName = key.replace('Schema', '');
            const descriptions = getFieldDescriptions(schemaName);
            const fields = Object.entries(schema.shape).map(([fieldKey, fieldValue]) => {
                return analyzeField(fieldKey, fieldValue, descriptions);
            });
            // 🟢 CORRECCIÓN APLICADA: Declaración de tipo explícito para resolver el error.
            let examples = undefined;
            // Si el esquema es 'personaAtendidaSchema', añadimos ejemplos
            if (key === 'personaAtendidaSchema') {
                examples = {
                    create: { /* ... */},
                    update: { /* ... */},
                };
            }
            docs.push({
                name: schemaName,
                description: `Esquema de validación para la entidad ${schemaName}.`,
                fields: fields,
                examples: examples,
            });
        }
    }
    // Resolver __dirname en ES Modules
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    // Escribir documentación a archivo
    const outputDir = path.join(__dirname, '../../docs');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    const outputPathJson = path.join(outputDir, 'schemas.json');
    fs.writeFileSync(outputPathJson, JSON.stringify(docs, null, 2));
    const outputPathMd = path.join(outputDir, 'SCHEMAS.md');
    const markdown = generateMarkdownDocs(docs);
    fs.writeFileSync(outputPathMd, markdown);
    console.log('✅ Documentación de esquemas generada exitosamente en /docs');
}
// ----------------------------------------------------------------------
// Ejecutar si se llama directamente (ES Module style)
// ----------------------------------------------------------------------
// Verifica si el módulo se está ejecutando como el punto de entrada principal
if (import.meta.url === path.resolve(process.argv[1])) {
    generateSchemaDocs();
}
