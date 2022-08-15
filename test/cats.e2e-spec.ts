/* eslint-disable prettier/prettier */
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { CatsModule } from 'src/cats/cats.module';
import { CatsService } from 'src/cats/cats.service';
import * as request from 'supertest';

describe('Cats', () => {
  let app: INestApplication;
  const catsService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CatsModule],
    })
      .overrideProvider(CatsService)
      .useValue(catsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/GET cats', () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect(catsService.findAll());
  });

  afterAll(async () => {
    await app.close();
  });
});
