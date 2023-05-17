import { Injectable } from '@nestjs/common';
import { PrismaClient, user } from '@prisma/client';

interface UserTypes {
  user_id: number;
  email: string;
  password: string;
  fullname: string;
  age: number;
  avatar: string;
}

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();
  async getUser(): Promise<user[]> {
    const data : user[] = await this.prisma.user.findMany();
    return data;
  }
}
