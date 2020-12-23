import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { RestDataSource } from '../Model/rest.datasource';
import { Order } from '../Model/order.model';
// import { StaticDataSource } from './static.datasource';

@Injectable() 

export class OrderRepository {

    private orders: Order[] = [] ;
    private loaded = false;

    constructor(private ds: RestDataSource) {

    }

    loadOrders() {
        this.loaded = true;
        this.ds.getOrders().subscribe( orders => this.orders = orders);
    }

    getOrders(): Order[] {
        if(! this.loaded)
         return this.orders ;
    }
    
    saveOrder( order: Order): Observable<Order> {
        return this.ds.saveOrder(order);
    }

    // Admin funcitons

    updateOrder(order: Order) {
        this.ds.updateOrder(order).subscribe(order =>
            {
                this.orders.splice(this.orders.findIndex(o => o.orderID == order.orderID), 1, order);
            });
    }

    deleteOrder(id: number) {
        this.ds.deleteOrder(id).subscribe(o =>
            {
                this.orders.splice(this.orders.findIndex(o => o.orderID == id), 1);
            });
    }

}