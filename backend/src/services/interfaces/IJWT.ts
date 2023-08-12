import { JwtToken } from '../../models/JwtToken';

export interface IJWT {
  generateToken(tokenPayload: JwtToken): string;
  verifytoken(token: string, userIP: string, userId: string): void;
}
