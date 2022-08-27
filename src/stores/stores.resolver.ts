import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ProductsService } from '../products/products.service';
//import { StoresService } from './stores.service';

@Resolver('Store')
export class StoresResolver {
  constructor(private productsService: ProductsService) {}

  @ResolveField()
  products(@Parent() store) {
    const { id } = store;

    return this.productsService.productsByStore(id);
  }
}
