import { Request, Response } from 'express';
import {
  RecoveryPasswordType,
  UserType,
  Validation,
} from '../services/Validation';
import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';
import { HandleError } from '../services/HandleError';
import { JsonWebToken } from '../services/JsonWebToken';
import { JwtToken } from '../models/JwtToken';
import { Bcrypt } from '../services/Bcrypt';
import { RecoveryCodeRepository } from '../repositories/RecoveryCodeRepository';
import { Error } from '../models/Error';
import { GCloudStorage } from '../services/GCloudStorage';
import { upload } from '../services/MulterUpload';

export const recoveryPassword = async (req: Request, res: Response) => {
  try {
    const { recoveryCode, email, newPassword } =
      req.body as RecoveryPasswordType;
    Validation.RecoveryPassword.parse({
      recoveryCode: recoveryCode,
      email: email,
      newPassword: newPassword,
    });

    const validateRecoveryCode = await RecoveryCodeRepository.findFirst({
      where: {
        value: recoveryCode,
      },
    });

    const user = await UserRepository.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) throw new Error('user email not found', 404);

    if (!validateRecoveryCode) throw new Error('recovery code not found', 404);
    if (validateRecoveryCode.userEmail !== email)
      throw new Error(
        'the recoveryCode sent does not belong to the email address provided',
        400
      );
    if (validateRecoveryCode.expires <= new Date().getTime())
      throw new Error('the recoveryCode already expired', 400);

    await UserRepository.update({
      where: {
        id: user.id,
      },
      data: {
        password: await Bcrypt.encrypt(
          newPassword,
          parseInt(process.env.SALT_NUMBER as string)
        ),
      },
    });
    res.status(200).json({ message: 'password updated successfully' });
  } catch (error) {
    const errors = HandleError.getErrors(error);
    res.status(errors.status).json(errors.message);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  if (req.file) {
    upload.single('profileImage');
  }
  try {
    const { name, email } = req.body as UserType;
    Validation.EditUser.parse({
      name: name,
    });
    const user = await UserRepository.findFirst({
      where: { email: email },
    });
    if (!user) throw new Error('user not found', 404);

    const cloud = new GCloudStorage(process.env.BUCKET_NAME as string);

    const userObj = new User(
      name,
      email,
      user.password,
      req.file
        ? await cloud.uploadFile()
        : user.profileImage
        ? user.profileImage
        : undefined
    );
    return res.status(201).json(
      await UserRepository.update({
        where: {
          id: user.id,
        },
        data: {
          email: userObj.getEmail(),
          name: userObj.getName(),
          profileImage: userObj.getProfileImage(),
        },
      })
    );
  } catch (error) {
    const errors = HandleError.getErrors(error);
    res.status(errors.status).json(errors.message);
  }
};
