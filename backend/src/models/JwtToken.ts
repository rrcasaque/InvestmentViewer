export class JwtToken {
  constructor(
    private expirationTime: number, //data de expiração do token
    private notBefore: number, //data em que o token começa a ser válido
    private issuedAt: number, //data em que o token foi emitido
    private userIP: string //endereço de ip do usuário
  ) {
    this.expirationTime = this.expirationTime;
    this.notBefore = this.notBefore;
    this.issuedAt = this.issuedAt;
    this.userIP = this.userIP;
  }
  getExpirationTime() {
    return this.expirationTime;
  }
  getNotBefore() {
    return this.notBefore;
  }
  getIssedAt() {
    return this.issuedAt;
  }
  getUserIP() {
    return this.userIP;
  }
}
