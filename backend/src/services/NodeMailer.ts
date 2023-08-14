import { Email } from '../models/Email';
import { IManageEmail } from './interfaces/IManageEmail';
import nodemailer from 'nodemailer';

export class ManageEmail implements IManageEmail {
  generateHTMLEmail(recoveryCode: number): string {
    return `          
    <h3>
    Olá! Recebemos uma solicitação para redefinir a senha da sua conta, para
    continuar o processo de recuperação de senha copie o código abaixo:
  </h3>
  <h1>${recoveryCode}</h1>  
  <h3>
    Mas, se por acaso, não foi você que pediu qualquer tipo de alteração de
    senha em nosso sistema, recomendamos, por segurança, que você altere
    imediatamente sua senha de acesso.    
  </h3>
  <h3>
  Importante: O código de recuperação é valido por 5 minutos, passando 
  esse tempo é necessário solicitar um novo código
  </h3>
    `;
  }
  async sendEmail(to: string, email: Email): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: process.env.TRANSPORTER_SERVICE,
      auth: {
        user: process.env.TRANSPORTER_AUTH_USER,
        pass: process.env.TRANSPORTER_AUTH_PASS,
      },
    });

    const mailOptions = {
      from: process.env.TRANSPORTER_AUTH_USER,
      to,
      subject: email.getSubject(),
      html: email.getContent(),
    };
    await transporter.sendMail(mailOptions);
  }
}

export const NodeMailer = new ManageEmail();
