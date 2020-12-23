import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/app/Model/order.model';
import { OrderRepository } from 'src/app/Repository/order.repository';

@Component({
  templateUrl: './checkout.component.html'
})

export class CheckoutComponent implements OnInit {
  orderSent = false;
  orderSubmitted = false;

  constructor( public order: Order, public repo: OrderRepository) { }

  ngOnInit(): void {
  }

  submitOrder (form: NgForm) {
    this.orderSubmitted = true;
    if (form.valid) {
      this.repo.saveOrder(this.order).subscribe (order => {
        this.order.clearOrder();
        this.orderSent = true;
        this.orderSubmitted = false;
      })
    }
  }

}
