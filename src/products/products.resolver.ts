import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { StoresService } from '../stores/stores.service';

@Resolver('Product')
export class ProductsResolver {
  constructor(
    private productsService: ProductsService,
    private storesService: StoresService,
  ) {}

  @Query()
  async products() {
    return this.productsService.productsAll();
  }

  @ResolveField()
  async stores(@Parent() product) {
    const { id } = product;

    return this.storesService.storesByProduct(id);
  }
}
