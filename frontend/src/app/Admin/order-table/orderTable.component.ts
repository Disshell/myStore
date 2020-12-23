import { Component } from '@angular/core';
import { Order } from 'src/app/Model/order.model';
import { OrderRepository } from 'src/app/Repository/order.repository';


@Component({
  templateUrl: './orderTable.component.html'
})

export class OrderTableComponent {

  shipped = false;

  constructor(private repository: OrderRepository) {

  }

  getOrders() : Order[] {
    return this.repository.getOrders().filter(o => !o.shipped || this.shipped);
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }

  deleteOrder(id: number) {
    this.repository.deleteOrder(id);
  }

}
