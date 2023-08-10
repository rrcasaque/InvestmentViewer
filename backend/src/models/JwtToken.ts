export class JwtToken {
  constructor(
    private issuer: string, //emissor do token
    private subject: string, //id do user a qual o token se refere
    private expirationTime: Date, //data de expiração do token
    private notBefore: Date, //data em que o token começa a ser válido
    private issuedAt: Date, //data em que o token foi emitido
    private userIP: string
  ) {}
}
