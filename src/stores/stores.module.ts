import { Module } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { StoresResolver } from './stores.resolver';
import { StoresService } from './stores.service';

@Module({
  providers: [StoresResolver, StoresService, ProductsService],
  exports: [StoresService],
})
export class StoresModule {}
