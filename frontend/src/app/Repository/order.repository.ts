import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { RestDataSource } from '../Model/rest.datasource';
import { Order } from '../Model/order.model';


@Injectable() 

export class OrderRepository {

    private orders: Order[] = [] ;
    private loaded = false;

    constructor(private dataSource: RestDataSource) {

    }

    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders().subscribe( orders => this.orders = orders);
    }

    getOrders(): Order[] {
        if(! this.loaded)
         return this.orders ;
    }
    
    saveOrder( order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }

    updateOrder(order: Order) {
        this.dataSource.updateOrder(order).subscribe(order =>
            {
                this.orders.splice(this.orders.findIndex(o => o.orderID == order.orderID), 1, order);
            });
    }

    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).subscribe(o =>
            {
                this.orders.splice(this.orders.findIndex(o => o.orderID == id), 1);
            });
    }

}