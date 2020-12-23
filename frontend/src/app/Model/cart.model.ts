import { Injectable } from "@angular/core";
import { Product } from './product.model';

@Injectable()

export class Cart {
    public lines: CartLine[] = [] ;
    public itemCount = 0;
    public cartPrice = 0;

    // add product line to the cart
    addLine( product: Product, quantity: number = 1) {
        let line = this.lines.find(line => line.prod.id == product.id);

        if (line == undefined) {    // there is no product from this line yet in the cart
            this.lines.push(new CartLine(product, quantity));
        }
        else {      // add the quantity to the already added product
            line.quantity += quantity ;
        }
        // recalculate the cart price
        this.recalculate();
    }

    // Update the quantity of the product already in the cart
    updateQuantity( product: Product, quantity: number) {
        let line = this.lines.find(line => line.prod.id == product.id);

        if (line != undefined) {    
            line.quantity = quantity ;
        }

        // recalculate the cart price
        this.recalculate();
    }

    // Remove product from the cart
    removeLine(productId: number) {
        let index = this.lines.findIndex(line => line.prod.id == productId) ;
        this.lines.splice(index, 1);

        // recalculate the cart price
        this.recalculate();
    }

    // Clear the cart - remove all products from the cart
    clearCart() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    // Recalculate the cart price
    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach (item =>
            {
                this.itemCount += item.quantity;
                this.cartPrice += item.quantity * item.prod.price ;
            });
    }

}

export class CartLine {

    constructor (public prod: Product, public quantity: number) {

    }

    get productCost(): number {
        return this.quantity * this.prod.price ;
    }
}