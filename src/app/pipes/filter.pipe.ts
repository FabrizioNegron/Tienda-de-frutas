import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../components/products/product.model';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], searchText: string): Product[] {
    if (!searchText) return products;

    searchText = searchText.toLowerCase();

    return products.filter(product =>
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText)
    );
  }
}