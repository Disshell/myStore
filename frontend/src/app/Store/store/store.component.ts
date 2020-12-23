import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Model/cart.model';
import { Product } from 'src/app/Model/product.model';
import { ProductRepository } from 'src/app/Repository/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;
  public productsPerPage = 4 ;
  public selectedPage = 1;
  public arrayLength = 0;

  constructor( private repo: ProductRepository, private cart: Cart, private router: Router) { }

  ngOnInit(): void {
  }

  get Products() : Product[] {
    let pageIndex = (this.selectedPage -1) * this.productsPerPage ;
    return this.repo.getProducts(this.selectedCategory).
            slice(pageIndex, pageIndex + this.productsPerPage) ;
  }

  get Categories() : string[] {
    return this.repo.getCategories() ;
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = newSize;
  }

  getPageNumbers(): number[] {
    this.arrayLength = Math.ceil(this.repo.getProducts(this.selectedCategory).length / this.productsPerPage);
        return Array(this.arrayLength).fill(0).map((x,i) => i + 1) ;
  }

  addProductToCart(prod: Product) {
    this.cart.addLine(prod);
    this.router.navigateByUrl('/cart');
  }

}
