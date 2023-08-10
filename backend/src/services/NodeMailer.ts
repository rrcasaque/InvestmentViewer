import { Email } from '../models/Email';
import { IManageEmail } from './interfaces/IManageEmail';

export class NodeMailer implements IManageEmail {
  sendEmail(to: string, from: string, email: Email): void {
    throw new Error('Method not implemented.');
  }
}
