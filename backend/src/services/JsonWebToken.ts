import { JwtToken } from '../models/JwtToken';
import { IJWT } from './interfaces/IJWT';
import { sign, JwtPayload } from 'jsonwebtoken';

class JWT implements IJWT {
  generateToken(tokenPayload: JwtToken): string {
    const JwtPayload: JwtPayload = {
      iss: tokenPayload.getIssuer(),
      sub: tokenPayload.getSubject(),
      exp: tokenPayload.getExpirationTime(),
      nbf: tokenPayload.getNotBefore(),
      iat: tokenPayload.getIssedAt(),
      aud: 'api address here',
      jti: tokenPayload.getUserIP(),
    };
    const token = sign(JwtPayload, process.env.JWT_SECRET_KEY as string, {
      algorithm: 'HS256',
    });
    return token;
  }
  verifytoken(token: string): boolean {
    throw new Error('Method not implemented.');
  }
}

export const JsonWebToken = new JWT();
