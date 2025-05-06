import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filterProductCategoryPipe'
})
export class FilterProductCategoryPipePipe implements PipeTransform {

  transform(products: Product[], category: string): Product[] {
    if(!category) {
      return products;
    }
    const searchCategory = category.toLowerCase();
    return products.filter(product => {
      return product.category.toLowerCase() === searchCategory;
    });
  }

}
