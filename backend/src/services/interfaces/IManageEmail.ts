import { Email } from '../../models/Email';

export interface IManageEmail {
  sendEmail(to: string, email: Email): void;
  generateHTMLEmail(recoveryCode: number): string;
}
