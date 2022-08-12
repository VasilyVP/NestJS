import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from 'src/users/users.module';
//import { UsersService } from '../users/users.service';
import { CatsController } from './cats.controller';
import { CatsService, MockCatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';

const moduleMocker = new ModuleMocker(global);

describe('CatsController', () => {
  let catsController: CatsController;
  //let catsService: CatsService;
  //let usersService: UsersService;

  /* const user = {
    userName: 'Vasily',
    email: 'vvp@gmail.com',
  }; */

  const cat: CreateCatDto = {
    name: 'Murzik',
    age: 4,
    breed: 'usual',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      //imports: [UsersModule],
      controllers: [CatsController],
      /* providers: [
        {
          provide: CatsService,
          useValue: MockCatsService,
        },
      ], */
    })
      .useMocker((token) => {
        if (token === CatsService) {
          return { findAll: jest.fn().mockResolvedValue([cat]) };
        }

        if (typeof token === 'function') {
          const mockMetadata = moduleMocker.getMetadata(token);
          const Mock = moduleMocker.generateFromMetadata(mockMetadata);

          return new Mock();
        }
      })
      .compile();

    //catsService = module.get(CatsService);
    catsController = module.get<CatsController>(CatsController);

    //catsController.create(cat);
  });

  describe('findAll', () => {
    it('should be defined', () => {
      expect(catsController).toBeDefined();
    });

    it('should return an array of cats', async () => {
      const result = [cat];

      //jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

      const cats = await catsController.findAll();

      expect(cats).toStrictEqual(result); // .toBe(result)
    });
  });
});
