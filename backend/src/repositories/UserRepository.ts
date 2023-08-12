import { prismaClient } from './PrismaClient';

export const UserRepository = prismaClient.user;
