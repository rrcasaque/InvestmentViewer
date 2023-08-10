import { JwtToken } from '../models/JwtToken';
import { IJWT } from './interfaces/IJWT';

export class JsonWebToken implements IJWT {
  generateToken(): string {
    throw new Error('Method not implemented.');
  }
  verifytoken(token: JwtToken): boolean {
    throw new Error('Method not implemented.');
  }
}
