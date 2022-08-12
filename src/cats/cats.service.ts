import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll() {
    return this.cats;
  }
}

const cat: CreateCatDto = {
  name: 'Murzik',
  age: 4,
  breed: 'usual',
};

export const MockCatsService = {
  cats: [cat],

  findAll() {
    return this.cats;
  },
};
