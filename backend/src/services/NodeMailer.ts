import { Email } from '../models/Email';
import { IManageEmail } from './interfaces/IManageEmail';
import nodemailer from 'nodemailer';

export class ManageEmail implements IManageEmail {
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
