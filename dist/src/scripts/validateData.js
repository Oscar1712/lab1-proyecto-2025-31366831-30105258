import { z } from 'zod';
import { createPersonaSchema } from '../schemas/persona.schema.js';
export async function validatePersonaData(data) {
    try {
        const result = await createPersonaSchema.parseAsync({
            body: data,
        });
        return {
            success: true,
            data: result.body,
        };
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.issues.map((issue) => ({
                    path: issue.path.join('.'),
                    message: issue.message,
                })),
            };
        }
        throw error;
    }
}
export async function validateBatchData(data, schema) {
    const valid = [];
    const invalid = [];
    for (const item of data) {
        const result = schema.safeParse(item);
        if (result.success) {
            valid.push(result.data);
        }
        else {
            invalid.push({
                data: item,
                errors: result.error.issues.map((issue) => issue.message),
            });
        }
    }
    return { valid, invalid };
}
