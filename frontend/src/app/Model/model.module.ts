
import { RestDataSource } from './rest.datasource';
import { NgModule } from '@angular/core';
import { Order } from './order.model';
import { HttpClientModule } from '@angular/common/http';
import { Cart } from './cart.model';
import { OrderRepository } from '../Repository/order.repository';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from '../Repository/product.repository';
import { AuthService } from '../Shared/services/auth.service';

@NgModule ({
    imports: [ HttpClientModule],
    providers: [ ProductRepository, Cart, Order, OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource}, RestDataSource, AuthService]
})

export class ModelModule {

}
