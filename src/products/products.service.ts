import { Injectable } from '@nestjs/common';
import { StoresService } from './stores/stores.service';

const productsData = [
  {
    id: 1,
    name: 'Product 1',
    price: 1.1,
    balance: 11,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 2.2,
    balance: 22,
  },
];

@Injectable()
export class ProductsService {
  constructor(private storesService: StoresService) {}

  productsAll() {
    return productsData;
  }

  productsByStore(storeId: number) {
    const productIds = this.storesService.getProductIdsByStore(storeId);

    return productIds.map((productId) => {
      return productsData.find((product) => product.id === productId);
    });
  }
}
