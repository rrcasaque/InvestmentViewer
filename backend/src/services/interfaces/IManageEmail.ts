import { Email } from '../../models/Email';

export interface IManageEmail {
  sendEmail(to: string, from: string, email: Email): void;
}
