import {
  Body,
  Controller,
  Get,
  //Param,
  //ParseIntPipe,
  Post,
  Query,
  /* HttpException,
  HttpStatus,
  UnauthorizedException, */
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SearchUserDto } from './dto/search-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async usersSearch(@Query() { search = '' }: SearchUserDto) {
    return this.usersService.user({
      search,
    });
  }

  @Get('/all') // /:param
  async usersAll(/* @Param('param', ParseIntPipe) param: number */) {
    //console.log('Param: ', param);
    //throw new UnauthorizedException('Text'); //HttpException('Forbidden resource', HttpStatus.FORBIDDEN);

    return this.usersService.usersAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
