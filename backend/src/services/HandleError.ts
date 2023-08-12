import { ZodError } from 'zod';

export class HandleError {
  static getErrors(error: any) {
    if (error.message === 'this email is already in use')
      return {
        status: 409,
        message: { message: error.message },
      };

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
