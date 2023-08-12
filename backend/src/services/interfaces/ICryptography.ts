export interface ICryptography {
  encrypt(password: string, saltRounds: number): Promise<string>;
  decrypt(password: string, encryptedPassword: string): Promise<boolean>;
}
