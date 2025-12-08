import bcrypt from 'bcryptjs';
import { ENV } from '../config/env.js';
// Hashear una contraseña
export async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(ENV.BCRYPT_SALT_ROUNDS);
        return await bcrypt.hash(password, salt);
    }
    catch (error) {
        console.error('❌ Error hasheando contraseña:', error);
        throw new Error('Error al procesar la contraseña');
    }
}
// Comparar contraseña con hash
export async function comparePassword(password, hashedPassword) {
    try {
        return await bcrypt.compare(password, hashedPassword);
    }
    catch (error) {
        console.error('❌ Error comparando contraseñas:', error);
        return false;
    }
}
/**
 * Validar fortaleza de contraseña
 */
export function validatePasswordStrength(password) {
    const errors = [];
    if (password.length < 8) {
        errors.push('La contraseña debe tener al menos 8 caracteres');
    }
    if (!/[A-Z]/.test(password)) {
        errors.push('Debe contener al menos una letra mayúscula');
    }
    if (!/[a-z]/.test(password)) {
        errors.push('Debe contener al menos una letra minúscula');
    }
    if (!/\d/.test(password)) {
        errors.push('Debe contener al menos un número');
    }
    return {
        isValid: errors.length === 0,
        errors,
    };
}
//# sourceMappingURL=bcrypt.util.js.map