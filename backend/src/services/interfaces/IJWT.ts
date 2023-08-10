import { JwtToken } from '../../models/JwtToken';

export interface IJWT {
  generateToken(): string;
  verifytoken(token: JwtToken): boolean;
}
