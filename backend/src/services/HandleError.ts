import { ZodError } from 'zod';

export class HandleError {
  static getErrors(error: any) {
    if (error.message === 'unauthorized access, password is incorrect')
      return {
        status: 401,
        message: { message: error.message },
      };
    if (error.message.split(':')[0] === 'invalid token')
      return {
        status: 401,
        message: {
          message: `unauthorized access: ${error.message.split(':')[1]}`,
        },
      };
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
