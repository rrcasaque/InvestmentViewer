import { Request, Response } from 'express';
import { UserType, Validation } from '../services/Validation';
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';
import { ZodError } from 'zod';
import { HandleError } from '../services/HandleError';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, profileImage } = req.body as UserType;
    Validation.User.parse({
      name: name,
      email: email,
      password: password,
      profileImage: profileImage,
    });
    const userObj = new User(name, email, password, profileImage);
    const findEmail = await UserRepository.findFirst({
      where: { email: email },
    });
    if (findEmail) throw new Error('this email is already in use');
    const user = await UserRepository.create({
      data: {
        email: userObj.getEmail(),
        name: userObj.getName(),
        password: userObj.getPassword(),
        profileImage: userObj.getProfileImage(),
      },
    });
    return res.status(201).json(user);
  } catch (error: any) {
    const errors = HandleError.getErrors(error);
    res.status(errors.status).json(errors.message);
  }
};
