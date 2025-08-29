import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from '../product-form/product-form.component';
import { Product } from '../products/product.model';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule, ProductFormComponent, FilterPipe]
})
export class ProductListComponent {
  filterText: string = '';
  products: Product[] = [
    { 
      name: 'Manzana', 
      price: 3.5, 
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg',
      description: 'Manzana roja fresca y jugosa',
      category: 'Fruta',
      quantity: 10
    },
    { 
      name: 'Banana', 
      price: 2.0, 
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
      description: 'Banana madura lista para comer',
      category: 'Fruta',
      quantity: 20
    },
    { 
      name: 'Naranja', 
      price: 4.0, 
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg',
      description: 'Naranja dulce y jugosa',
      category: 'Fruta',
      quantity: 15
    }
  ];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProduct(index: number): void {
    this.products.splice(index, 1);
  }
  searchText: string = '';
}
