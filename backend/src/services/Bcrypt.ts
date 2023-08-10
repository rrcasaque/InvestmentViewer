import { ICryptography } from './interfaces/ICryptography';

export class Bcrypt implements ICryptography {
  encrypt(password: string): string {
    throw new Error('Method not implemented.');
  }
  decode(encryptedPassword: string): string {
    throw new Error('Method not implemented.');
  }
  verify(password: string, encryptedPassword: string): boolean {
    throw new Error('Method not implemented.');
  }
}
