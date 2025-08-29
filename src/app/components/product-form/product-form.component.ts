import { Component, EventEmitter, Output } from '@angular/core';
// Necesario para usar ngModel
import { FormsModule } from '@angular/forms';
import { Product } from '../products/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form', // Selector: <app-product-form>
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]// Importamos FormsModule para ngModel
})
export class ProductFormComponent {
  // Output para enviar productos al componente padre
  @Output() addProduct = new EventEmitter<Product>();

  // Variables enlazadas a los inputs del formulario
  name: string = ''; 
  price: number | null = null;
  image: string = ''; 
  category: string = '';
  description: string = '';
  quantity: number | null = null; // corregido

  // Función que se ejecuta al enviar el formulario
  onSubmit() {
    if (
      !this.name ||
      !this.price ||
      !this.image ||
      !this.category ||
      !this.description ||
      !this.quantity
    ) {
      alert('Por favor, completa todos los campos');
      return;
    }

    // Creamos un nuevo producto
    const newProduct: Product = {
      name: this.name,
      price: this.price,
      image: this.image,
      category: this.category,
      description: this.description,
      quantity: this.quantity // corregido
    };

    // Emitimos el producto al componente padre
    this.addProduct.emit(newProduct);

    // Limpiamos los inputs
    this.name = '';
    this.price = null;
    this.image = '';
    this.category = '';
    this.description = '';
    this.quantity = null;
  }
}
