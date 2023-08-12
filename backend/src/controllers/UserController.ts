import { Request, Response } from 'express';
import { UserType, Validation } from '../services/Validation';
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';
import { HandleError } from '../services/HandleError';
import { JsonWebToken } from '../services/JsonWebToken';
import { JwtToken } from '../models/JwtToken';

export const createUser = async (req: Request, res: Response) => {
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
    if (findEmail) throw new Error('this email is already in use');
    const user = await UserRepository.create({
      data: {
        email: userObj.getEmail(),
        name: userObj.getName(),
        password: userObj.getPassword(),
      },
    });
    const JwtPayload = new JwtToken(
      'rrcasaque@hotmail.com',
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

export const teste = async (req: Request, res: Response) => {
  try {
    const JwtPayload = new JwtToken(
      'rrcasaque@hotmail.com',
      new Date(new Date().getTime() + 3600 * 24).getTime(),
      new Date().getTime(),
      new Date().getTime(),
      req.socket.remoteAddress as string
    );
    const token = JsonWebToken.generateToken(JwtPayload);
    JsonWebToken.verifytoken(
      token,
      req.socket.remoteAddress as string,
      'rrcasaque@hotmail.co'
    );
    return res.send('certo');
  } catch (error) {
    const errors = HandleError.getErrors(error);
    res.status(errors.status).json(errors.message);
  }
};
