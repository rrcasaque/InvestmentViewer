import { Email } from '../models/Email';
import { IManageEmail } from './interfaces/IManageEmail';
import nodemailer from 'nodemailer';

export class ManageEmail implements IManageEmail {
  generateHTMLEmail(recoveryCode: number): string {
    return `
    <!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recuperação de senha</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        width: 600px;
        background-color: rgba(0, 0, 0, 0.85);
        color: white;
      }
      header {
        background-color: blueviolet;
        display: flex;
        align-items: center;
        padding-left: 30px;
        height: 75px;
      }
      footer {
        background-color: blueviolet;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 75px;
        font-family: sans-serif;
      }
      main {
        margin: 35px 0;
      }
      .infoText {
        text-align: justify;
        margin: 15px 30px;
        font-weight: 100;
        font-family: sans-serif;
        line-height: 35px;
        font-size: 18px;
      }

      .infoText2 {
        text-align: center;
        margin: 15px 30px;
        font-weight: 700;
        font-family: sans-serif;
        line-height: 35px;
        font-size: 18px;
      }

      .recoveryCode {
        display: flex;
        justify-content: center;
      }

      .recoveryCode > div:hover {
        cursor: pointer;
      }

      .recoveryCode > div {
        text-align: center;
        width: 200px;
        background-color: rgb(238, 72, 22);
        border-radius: 15px;
      }
    </style>
  </head>
  <body>
    <header>logo da empresa</header>
    <main>
      <p class="infoText">
        Olá! Recebemos uma solicitação para redefinir a senha da sua conta, para
        continuar o processo de recuperação de senha copie o código abaixo:
      </p>
      <article class="recoveryCode">
        <div><h1>${recoveryCode}</h1></div>
      </article>
      <p class="infoText2">Clique na caixa acima para copiar o código</p>
      <hr class="infoText" />
      <p class="infoText">
        Mas, se por acaso, não foi você que pediu qualquer tipo de alteração de
        senha em nosso sistema, recomendamos, por segurança, que você altere
        imediatamente sua senha de acesso.
      </p>
    </main>
    <footer>&copy; Investment Viewer by rrcasaque - 2023</footer>
  </body>  
</html>

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
