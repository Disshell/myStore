
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Product } from 'src/app/Model/product.model';
import { ProductRepository } from 'src/app/Repository/product.repository';

@Component({
  templateUrl: './productEditor.component.html'
})

export class ProductEditorComponent {

  editing = false;
  product: Product = new Product();

  constructor( private repository: ProductRepository, private router: Router, activateRoute: ActivatedRoute) {
    this.editing = activateRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      Object.assign(this.product, repository.getProduct(activateRoute.snapshot.params['id']));
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

}
