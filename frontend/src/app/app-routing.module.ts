import { OrderTableComponent } from './Admin/order-table/orderTable.component';
import { StoreModule } from './store/store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './Admin/admin.module';
import { StoreComponent } from './store/store/store.component';
import { FirstGuard } from './Shared/guards/first.guard';
import { CartDetailsComponent } from './store/cart-details/cart-details.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { AuthGuard } from './Shared/guards/auth.guard';
import { AdminGuard } from './Shared/guards/admin.guard';
import { AuthComponent } from './Shared/auth/auth.component';

const routes: Routes = [
{ path: 'auth', component: AuthComponent } ,
{ path:'store', component: StoreComponent, canActivate: [AuthGuard]},
{ path: 'cart', component: CartDetailsComponent, canActivate: [FirstGuard, AuthGuard]},
{ path: 'checkout' , component: CheckoutComponent, canActivate: [FirstGuard, AuthGuard]},
{ path: 'admin', loadChildren: () => AdminModule, canActivate: [FirstGuard, AuthGuard, AdminGuard]},
{ path: 'order/:login', component: OrderTableComponent},
{ path: '**' , redirectTo: '/store'}
];

@NgModule({
  imports: [ BrowserModule, StoreModule, RouterModule.forRoot(routes)],
  providers: [FirstGuard, AuthGuard, AdminGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
