import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaClient, nguoi_dung } from '@prisma/client';

@Injectable()
export class AuthService {
  private prisma = new PrismaClient();


  login(){
    throw new HttpException('Email ko đúng',404);
    throw new HttpException('Email ko đúng',HttpStatus.AMBIGUOUS);
    throw new NotFoundException('Email ko đúng')
  }

  signUp(nguoiDung : nguoi_dung){

  }
}
