import { NextFunction, Request, Response } from 'express';
import { HandleError } from '../services/HandleError';
import { JsonWebToken } from '../services/JsonWebToken';
import { Validation } from '../services/Validation';

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
