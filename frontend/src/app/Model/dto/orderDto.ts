import { Injectable } from '@angular/core';

@Injectable()

export class OrderDto {
    public orderId: number ;
    public name:  string ;
    public street: string ;
    public city: string ; 
    public state: string ;
    public zipCode: string ;
    public isShipped: boolean;
    public cart: string;
}