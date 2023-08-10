export interface ICryptography {
  encrypt(password: string): string;
  decode(encryptedPassword: string): string;
  verify(password: string, encryptedPassword: string): boolean;
}
