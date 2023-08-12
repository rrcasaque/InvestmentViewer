import { z } from 'zod';

export type UserType = z.infer<typeof Validation.User>;

export type JWTTokenType = z.infer<typeof Validation.JWTToken>;

export class Validation {
  static User = z.object({
    name: z.string({ required_error: 'name property is required' }),
    email: z
      .string({ required_error: 'email property is required' })
      .email({ message: 'invalid email' }),
    password: z
      .string({ required_error: 'password property is required' })
      .min(8, { message: 'minimum 8 digits' })
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        { message: 'password must be stronger' }
      ),
    profileImage: z
      .string()
      .url({ message: 'profileImage must be a valid url address' })
      .optional(),
  });
  static JWTToken = z.string({
    required_error: 'token is required to access this route',
  });
}
