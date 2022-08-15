import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, InjectRepository } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, MockUser } from './user.entity';
import { Repository } from 'typeorm';

describe('UsersController', () => {
  let controller: UsersController;
  //let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: MockUser,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);

    //service = new UsersService();
    //controller = new UsersController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  //it('/GET users/all')
});
