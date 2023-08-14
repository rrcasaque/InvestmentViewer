import { NextFunction, Request, Response } from 'express';
import { HandleError } from '../services/HandleError';
import { JsonWebToken } from '../services/JsonWebToken';
import { Validation } from '../services/Validation';
import { Email } from '../models/Email';
import { NodeMailer } from '../services/NodeMailer';
import { getRandomValues } from 'crypto';

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1] as string;
    const userIP = req.socket.remoteAddress as string;
    Validation.JWTToken.parse(token);
    JsonWebToken.verifytoken(token, userIP);
    next();
  } catch (error) {
    const errors = HandleError.getErrors(error);
    res.status(errors.status).json(errors.message);
  }
};

export const getRecoveryCode = async (req: Request, res: Response) => {
  try {
    const userEmail = req.query.email as string;
    Validation.RecoveryEmail.parse(userEmail);
    const emailContent = NodeMailer.generateHTMLEmail(
      getRandomValues(new Uint16Array(1))[0]
    );
    const email = new Email('código para recuperação de senha', emailContent);
    await NodeMailer.sendEmail(userEmail, email);
    return res.send('email enviado!');
  } catch (error: any) {
    const errors = HandleError.getErrors(error);
    res.status(errors.status).json(errors.message);
  }
};
