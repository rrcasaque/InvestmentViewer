import { ICryptography } from './interfaces/ICryptography';
import bcrypt from 'bcrypt';

export class Bcryptography implements ICryptography {
  encrypt(password: string, saltRounds: number): Promise<string> {
    const hash = bcrypt.hash(password, saltRounds);
    return hash;
  }
  decrypt(password: string, encryptedPassword: string): Promise<boolean> {
    const result = bcrypt.compare(password, encryptedPassword);
    return result;
  }
}

export const Bcrypt = new Bcryptography();
