import { JwtToken } from '../models/JwtToken';
import { IJWT } from './interfaces/IJWT';
import { decode, sign, JwtPayload } from 'jsonwebtoken';

class JWT implements IJWT {
  generateToken(tokenPayload: JwtToken): string {
    const JwtPayload: JwtPayload = {
      iss: process.env.JWT_ISSUER,
      exp: tokenPayload.getExpirationTime(),
      nbf: tokenPayload.getNotBefore(),
      iat: tokenPayload.getIssedAt(),
      aud: process.env.API_URL,
      jti: tokenPayload.getUserIP(),
    };
    const token = sign(JwtPayload, process.env.JWT_SECRET_KEY as string, {
      algorithm: 'HS256',
    });
    return token;
  }
  verifytoken(token: string, userIP: string): void {
    const JwtPayload = decode(token) as JwtPayload;
    if (JwtPayload.aud !== process.env.API_URL)
      throw new Error('invalid token: audience is not valid for this address');
    if ((JwtPayload.exp as number) <= new Date().getTime())
      throw new Error('invalid token: this token is expired');
    if ((JwtPayload.iat as number) >= new Date().getTime())
      throw new Error('invalid token: issuedAt property is invalid');
    if (JwtPayload.iss !== process.env.JWT_ISSUER)
      throw new Error('invalid token: issuer property is invalid');
    if (JwtPayload.jti !== userIP)
      throw new Error(
        'invalid token: the current IP address is invalid for this token'
      );
    if ((JwtPayload.nbf as number) >= new Date().getTime())
      throw new Error('invalid token: this token is not yet valid');
  }
}

export const JsonWebToken = new JWT();
