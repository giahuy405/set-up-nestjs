import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FoodModule } from './food/food.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, FoodModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
