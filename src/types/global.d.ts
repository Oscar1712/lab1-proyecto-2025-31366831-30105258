// src/types/global.d.ts

import { PrismaClient } from '@prisma/client';

// Extender la interfaz Global para agregar nuestra propiedad
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}