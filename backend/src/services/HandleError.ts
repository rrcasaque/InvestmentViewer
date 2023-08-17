import { ZodError } from 'zod';
import { Error } from '../models/Error';

export class HandleError {
  static getErrors(error: any) {
    if (error instanceof Error) {
      return {
        status: error.getStatus(),
        message: { message: error.getMessage() },
      };
    }
    if (error instanceof ZodError) {
      const simplifiedError = error.issues.map((err) => {
        return err.message;
      });

      return {
        status: 400,
        message: { message: simplifiedError },
      };
    }
    return {
      status: 500,
      message: 'Internal Server Error',
    };
  }
}
