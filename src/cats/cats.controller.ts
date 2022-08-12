import {
  Body,
  Controller,
  Get,
  //Header,
  //HttpCode,
  //Param,
  Post,
  //Query,
  //Req,
  //Res,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CatsService } from './cats.service';
//import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(
    private catsService: CatsService,
    private usersService: UsersService,
  ) {}

  @Get()
  async findAll() {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
