import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaClient, nguoi_dung } from '@prisma/client';
import { UserLogin } from './entities/auth.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {


  constructor(
    private jwtService: JwtService,
    private configService: ConfigService
  ){}

  private prisma = new PrismaClient();

    
  async login(userLogin:UserLogin):Promise<string>{
    const {email,password }= userLogin;
    let checkUser = await this.prisma.nguoi_dung.findFirst({
      where:{
        email
      }
    });

    if(checkUser){
      if(checkUser.mat_khau==password){
        // generate token
        let token = this.jwtService.signAsync({data:checkUser},{
          expiresIn:'5m',secret:this.configService.get('SECRET_KEY')
        })
        return token;
      }
    }


     throw new HttpException('Mật khẩu ko đúng',400);
  }

  signUp(nguoiDung : nguoi_dung){

  }
}
