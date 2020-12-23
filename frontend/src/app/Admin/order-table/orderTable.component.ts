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

  // get unshipped orders
  getOrders() : Order[] {
    return this.repository.getOrders().filter(o => !o.shipped || this.shipped);
  }

  // Mark the order in respository as shipped 
  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }

  // Delete order from the respository
  deleteOrder(id: number) {
    this.repository.deleteOrder(id);
  }

}
