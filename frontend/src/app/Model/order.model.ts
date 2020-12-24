import { Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable()

export class Order {
    public orderId: number ;
    public name:  string ;
    public street: string ;
    public city: string ; 
    public state: string ;
    public zipCode: string ;
    public isShipped: boolean = false;

    constructor( public cart: Cart) {

    }

    clearOrder() {
        this.orderId = null;
        this.name = this.street = this.city = this.state = this.zipCode = null;
        this.isShipped = false;
        this.cart.clearCart();
    }
}