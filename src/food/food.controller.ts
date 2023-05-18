import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}
  



  @UseInterceptors(FileInterceptor("file",{ // tên trùng tới bên FE gửi lên
    storage:diskStorage({
      destination:process.cwd() + "/public/imgs",
      filename:(req,file,callback)=>callback(null,Date.now() + "_" + file.originalname)
    })
  }))

  @Post('upload-avatar')
  uploadAvatar(@UploadedFile() file:Express.Multer.File) {
  return file
  }
 

  @UseGuards(AuthGuard("jwt"))
  @Get()
  findAll(@Req() req:Request) {
    let token = req.user;
    return token
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodService.update(+id, updateFoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodService.remove(+id);
  }
}
