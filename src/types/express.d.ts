import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface UserPayload extends JwtPayload {
      id: number;
      email: string;
      rol: string;
    }

    interface Request {
      user?: UserPayload;
    }
  }
}

export {};