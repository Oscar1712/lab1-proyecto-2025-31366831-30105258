// src/config/database.ts (Restaurado)
import { PrismaClient } from '@prisma/client'; 

// const prisma = new PrismaClient({
//      log: ['query', 'error', 'warn'], 
// });

const prisma = new PrismaClient();

export default prisma;

export async function connectDB() {
    try {
        await prisma.$connect();
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}