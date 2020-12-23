import { Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable()

export class Order {
    public orderID: number ;
    public name:  string ;
    public street: string ;
    public city: string ; 
    public state: string ;
    public zip: string ;
    public shipped: boolean = false;

    constructor( public cart: Cart) {

    }

    clearOrder() {
        this.orderID = null;
        this.name = this.street = this.city = this.state = this.zip = null;
        this.shipped = false;
        this.cart.clearCart();
    }
}