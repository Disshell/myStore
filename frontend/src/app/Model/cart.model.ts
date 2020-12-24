import { Injectable } from "@angular/core";
import { Product } from './product.model';

@Injectable()

export class Cart {
    public lines: CartLine[] = [] ;
    public itemCount = 0;
    public cartPrice = 0;

    addLine( product: Product, quantity: number = 1) {
        let line = this.lines.find(line => line.prod.productId == product.productId);

        if (line == undefined) {
            this.lines.push(new CartLine(product, quantity));
        }
        else {
            line.quantity += quantity ;
        }
        this.recalculate();
    }


    updateQuantity( product: Product, quantity: number) {
        let line = this.lines.find(line => line.prod.productId == product.productId);

        if (line != undefined) {    
            line.quantity = quantity ;
        }

        this.recalculate();
    }

    removeLine(productId: number) {
        let index = this.lines.findIndex(line => line.prod.productId == productId) ;
        this.lines.splice(index, 1);

        this.recalculate();
    }

    clearCart() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

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