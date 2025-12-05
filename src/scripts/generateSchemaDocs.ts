import fs from 'fs';
import path from 'path';
import { z } from 'zod';
import * as schemas from '../schemas/';
import { fileURLToPath } from 'url';

interface SchemaDoc {
  name: string;
  description: string;
  fields: Array<{
    name: string;
    type: string;
    required: boolean;
    description: string;
    validations: string[];
  }>;
  examples: any;
}

function generateSchemaDocs() {
  const docs: SchemaDoc[] = [];

  // Persona Schema
  const personaFields = Object.entries(schemas.personaAtendidaSchema.shape).map(([key, value]) => {
    const field = value as z.ZodTypeAny;
    const validations: string[] = [];

    if (field instanceof z.ZodString) {
      field._def.checks?.forEach((check: any) => {
        if (check.kind === 'min') validations.push(Mínimo ${check.value} caracteres);
        if (check.kind === 'max') validations.push(Máximo ${check.value} caracteres);
        if (check.kind === 'regex') validations.push('Formato específico');
        if (check.kind === 'email') validations.push('Email válido');
      });
    }

    if (field instanceof z.ZodEnum) {
      validations.push(Valores permitidos: ${field._def.values.join(', ')});
    }

    if (field instanceof z.ZodNumber) {
      field._def.checks?.forEach((check: any) => {
        if (check.kind === 'min') validations.push(Mínimo ${check.value});
        if (check.kind === 'max') validations.push(Máximo ${check.value});
      });
    }

    return {
      name: key,
      type: field._def.typeName.replace('Zod', ''),
      required: !(field instanceof z.ZodOptional),
      description: getFieldDescription(key),
      validations,
    };
  });

  docs.push({
    name: 'PersonaAtendida',
    description: 'Schema para personas atendidas (pacientes)',
    fields: personaFields,
    examples: {
      create: {
        tipoDocumento: 'DNI',
        numeroDocumento: '12345678',
        nombres: 'Juan',
        apellidos: 'Pérez',
        fechaNacimiento: '1990-01-15',
        sexo: 'M',
        correo: 'juan@example.com',
        telefono: '+5491122334455',
        direccion: 'Calle Falsa 123',
        contactoEmergencia: 'María González - +5491155667788',
      },
      update: {
        telefono: '+5491199887766',
        direccion: 'Nueva Dirección 456',
      },
    },
  });

  // Resolver __dirname en ES Modules
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Escribir documentación a archivo
  const outputPath = path.join(__dirname, '../../docs/schemas.json');
  fs.writeFileSync(outputPath, JSON.stringify(docs, null, 2));

  // Generar documentación en Markdown
  const markdown = generateMarkdownDocs(docs);
  fs.writeFileSync(path.join(__dirname, '../../docs/SCHEMAS.md'), markdown);

  console.log('✅ Documentación de esquemas generada exitosamente');
}

function getFieldDescription(fieldName: string): string {
  const descriptions: Record<string, string> = {
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

return descriptions[fieldName] 
'-'} |\n`;
    });

    markdown += '\n### Ejemplos\n\n';
    markdown += '```json\n';
    markdown += JSON.stringify(doc.examples, null, 2);
    markdown += '\n```\n\n';
    markdown += '---\n\n';
  });

  return markdown;
}

// Ejecutar si se llama directamente
if (require.main === module) {
  generateSchemaDocs();
}

export { generateSchemaDocs };
