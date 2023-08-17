import { NextFunction, Request, Response } from 'express';
import { HandleError } from '../services/HandleError';
import { JsonWebToken } from '../services/JsonWebToken';
import { Validation } from '../services/Validation';
import { Email } from '../models/Email';
import { NodeMailer } from '../services/NodeMailer';
import { RecoveryCodeRepository } from '../repositories/RecoveryCodeRepository';
import { UserRepository } from '../repositories/UserRepository';
import { Error } from '../models/Error';
import { Utils } from '../services/Utils';

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
    const user = await UserRepository.findFirst({
      where: { email: userEmail },
    });
    if (!user) throw new Error('user email not found', 404);
    const recoveryCode = parseInt(Utils.getRandomCode(6));
    const emailContent = NodeMailer.generateHTMLEmail(recoveryCode);
    const email = new Email('código para recuperação de senha', emailContent);
    await RecoveryCodeRepository.create({
      data: {
        value: recoveryCode,
        userEmail: userEmail,
        expires: new Date(new Date().getTime() + 1000 * 60 * 5).getTime(), // 5 minutes
      },
    });
    await NodeMailer.sendEmail(userEmail, email);
    return res.send('email enviado!');
  } catch (error: any) {
    const errors = HandleError.getErrors(error);
    res.status(errors.status).json(errors.message);
  }
};
