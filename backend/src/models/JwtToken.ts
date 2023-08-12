export class JwtToken {
  constructor(
    private subject: string, //id do user a qual o token se refere
    private expirationTime: number, //data de expiração do token
    private notBefore: number, //data em que o token começa a ser válido
    private issuedAt: number, //data em que o token foi emitido
    private userIP: string //endereço de ip do usuário
  ) {
    this.subject = this.subject;
    this.expirationTime = this.expirationTime;
    this.notBefore = this.notBefore;
    this.issuedAt = this.issuedAt;
    this.userIP = this.userIP;
  }
  getSubject() {
    return this.subject;
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
