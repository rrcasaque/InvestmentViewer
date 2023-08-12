import { Request, Response } from 'express';
import { UserType, Validation } from '../services/Validation';
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';
import { HandleError } from '../services/HandleError';
import { JsonWebToken } from '../services/JsonWebToken';
import { JwtToken } from '../models/JwtToken';
import { Bcrypt } from '../services/Bcrypt';

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
        password: await Bcrypt.encrypt(
          userObj.getPassword(),
          parseInt(process.env.SALT_NUMBER as string)
        ),
      },
    });
    const JwtPayload = new JwtToken(
      userObj.getEmail(),
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
    if (!user) throw new Error('invalid credentials');

    const autorized = await Bcrypt.decrypt(password, user.password);

    if (!autorized)
      throw new Error('unauthorized access, password is incorrect');

    const JwtPayload = new JwtToken(
      email,
      keepConnected
        ? new Date(new Date().getTime() + 3600 * 24 * 30).getTime()
        : new Date(new Date().getTime() + 3600 * 24).getTime(),
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
