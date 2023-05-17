import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Param,
  Query,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

interface bodyApp {
  email: string;
  password: string;
}

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(200)
  @Get('hello/:id2/:name2')
  getHello(
    @Req() req: Request,
    @Query('id') id: string,
    @Query('name') name: string,
    @Param('id2') id2: string,
    @Query('name2') name2: string,
    @Body() body: bodyApp,
    @Headers('token') headers,
  ): string {
    let { email, password } = body;
    return this.appService.getHello();
  }
}
