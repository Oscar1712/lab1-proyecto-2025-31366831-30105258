// src/config/database.ts

// Usar la importación nombrada estándar
import PrismaClient from '@prisma/client';
// import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient({ 
    log: ['query', 'error', 'warn'],
});

export default prisma;

export async function connectDB() {
    try {
        await prisma.$connect();
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}