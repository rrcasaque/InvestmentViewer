import { NextFunction, Request, Response } from 'express';
import { HandleError } from '../services/HandleError';
import { JsonWebToken } from '../services/JsonWebToken';
import { UserType, Validation } from '../services/Validation';
import { Email } from '../models/Email';
import { NodeMailer } from '../services/NodeMailer';
import { RecoveryCodeRepository } from '../repositories/RecoveryCodeRepository';
import { UserRepository } from '../repositories/UserRepository';
import { Error } from '../models/Error';
import { Utils } from '../services/Utils';
import { Bcrypt } from '../services/Bcrypt';
import { JwtToken } from '../models/JwtToken';
import { User } from '../models/User';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body as UserType;
    Validation.User.parse({
      name: name,
      email: email,
      password: password,
    });
    const userObj = new User(name, email, password);
    const findEmail = await UserRepository.findFirst({
      where: { email: email },
    });
    if (findEmail) throw new Error('this email is already in use', 409);
    const user = await UserRepository.create({
      data: {
        email: userObj.getEmail(),
        name: userObj.getName(),
        password: await Bcrypt.encrypt(
          userObj.getPassword(),
          parseInt(process.env.SALT_NUMBER as string)
        ),
      },
    });
    const JwtPayload = new JwtToken(
      new Date(new Date().getTime() + 3600 * 24).getTime(),
      new Date().getTime(),
      new Date().getTime(),
      req.socket.remoteAddress as string
    );
    const token = JsonWebToken.generateToken(JwtPayload);
    return res.status(201).json({ user, token });
  } catch (error) {
    const errors = HandleError.getErrors(error);
    res.status(errors.status).json(errors.message);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password, keepConnected } = req.body;
    Validation.User.parse({
      email: email,
      password: password,
      name: 'userNameUnecessary',
    });

    const user = await UserRepository.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) throw new Error('user email not found', 404);

    const autorized = await Bcrypt.decrypt(password, user.password);

    if (!autorized)
      throw new Error('unauthorized access, password is incorrect', 401);

    const JwtPayload = new JwtToken(
      keepConnected
        ? new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30).getTime()
        : new Date(new Date().getTime() + 1000 * 60 * 60 * 24).getTime(),
      new Date().getTime(),
      new Date().getTime(),
      req.socket.remoteAddress as string
    );

    const token = JsonWebToken.generateToken(JwtPayload);
    return res.status(200).json({ user, token });
  } catch (error) {
    const errors = HandleError.getErrors(error);
    res.status(errors.status).json(errors.message);
  }
};

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
    const { userEmail } = req.params;
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
