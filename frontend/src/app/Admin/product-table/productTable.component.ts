// This component is responsible for showing a list of products to administrator to edit, delete or add a product

import { Component } from '@angular/core';
import { Product } from 'src/app/Model/product.model';
import { ProductRepository } from 'src/app/Repository/product.repository';


@Component({
  templateUrl: './productTable.component.html'
})

export class ProductTableComponent {
  constructor( private repository: ProductRepository) {
    
  }

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct( id: number) {
    this.repository.deleteProduct(id);
  }
}