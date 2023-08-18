import { z } from 'zod';

export type UserType = z.infer<typeof Validation.User>;

export type JWTTokenType = z.infer<typeof Validation.JWTToken>;

export type RecoveryEmailType = z.infer<typeof Validation.RecoveryEmail>;

export type RecoveryPasswordType = z.infer<typeof Validation.RecoveryPassword>;

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
  static RecoveryEmail = z
    .string({ required_error: 'email property is required' })
    .email({ message: 'invalid email' });
  static RecoveryPassword = z.object({
    recoveryCode: z
      .number({ required_error: 'recoveryCode property is required' })
      .int({ message: 'recoveryCode must be a int number' }),
    email: z
      .string({ required_error: 'email property is required' })
      .email({ message: 'invalid email' }),
    newPassword: z
      .string({ required_error: 'password property is required' })
      .min(8, { message: 'minimum 8 digits' })
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        { message: 'password must be stronger' }
      ),
  });
  static Stock = z.object({
    refName: z.string({ required_error: 'refName property is required' }),
    buyValue: z
      .number({ required_error: 'buyValue property is required' })
      .nonnegative({ message: 'buyValue property dont cant be negative' }),
    amount: z
      .number({ required_error: 'amount property is required' })
      .nonnegative({ message: 'amount property dont cant be negative' }),
    category: z.string({ required_error: 'category property is required' }),
    subCategory: z.string().optional(),
  });
}
