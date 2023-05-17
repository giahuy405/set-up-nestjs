import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ConfigService } from '@nestjs/config';
interface UserTypes {
  user_id: number;
  email: string;
  password: string;
  fullname: string;
  age: number;
  avatar: string;
}
@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private configService: ConfigService,
  ) {}

  @Get('get-user')
  getUser(): Promise<UserTypes[]> {
    return this.userService.getUser();
  }

  @Get('get-env')
  getEnv(): string {
    let data: string = this.configService.get('TITLE'); 
    return data;
  }
}
