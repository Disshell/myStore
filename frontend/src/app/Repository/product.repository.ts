import { Injectable } from '@angular/core';
import { Product } from '../Model/product.model';
import { RestDataSource } from '../Model/rest.datasource';

@Injectable()

export class ProductRepository {
    private products: Product[] = [] ;
    private categories: string[] = [] ;

    constructor(private ds: RestDataSource) {
        ds.getProducts().subscribe( data => {
            this.products = data;
            this.categories = data.map(p => p.category)
                .filter( (c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    // get the list of products belonging to the given category
    getProducts(category: string = null): Product[] {
        return this.products
            .filter(p => category == null || category == p.category);
    }

    // get a specific product matching the given product id
    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }

    // get all categories
    getCategories(): string[] {
        return this.categories;
    }

    // Admin functions

    saveProduct(product: Product) {
        if(product.id == null || product.id == 0) // product does not exist in the repository
        {
            this.ds.saveProduct(product).subscribe(p => this.products.push(p));
        }
        else // product already exists in the repository. Update it
        {
            this.ds.updateProduct(product).subscribe (p =>
                {
                    this.products.splice(this.products.findIndex(p => p.id == product.id), 1, product);
                });
        }
    }

    deleteProduct(id: number) {
        this.ds.deleteProduct(id).subscribe(p =>
            {
                this.products.splice(this.products.findIndex(p => p.id == id), 1);
            });
    }
}
