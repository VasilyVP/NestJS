import { Injectable } from '@nestjs/common';

const storesData = [
  {
    id: 1,
    name: 'Store 1',
    products: [1],
  },
  {
    id: 2,
    name: 'Store 2',
    products: [1, 2],
  },
];

@Injectable()
export class StoresService {
  storesByProduct(productId: number) {
    return storesData.filter((store) => store.products.includes(productId));
  }

  getProductIdsByStore(storeId: number) {
    return storesData.find((store) => store.id === storeId).products;
  }
}
