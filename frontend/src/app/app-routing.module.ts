import { StoreModule } from './store/store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './Admin/admin.module';
import { StoreComponent } from './store/store/store.component';
import { FirstGuard } from './Shared/guards/first.guard';
import { CartDetailsComponent } from './store/cart-details/cart-details.component';
import { CheckoutComponent } from './store/checkout/checkout.component';

const routes: Routes = [
{ path:'store', component: StoreComponent, canActivate: [FirstGuard]},
{ path: 'cart', component: CartDetailsComponent, canActivate: [FirstGuard]},
{ path: 'checkout' , component: CheckoutComponent, canActivate: [FirstGuard]},
{ path: 'admin', loadChildren: () => AdminModule, canActivate: [FirstGuard]},
{ path: '**' , redirectTo: '/store'}
];

@NgModule({
  imports: [ BrowserModule, StoreModule, RouterModule.forRoot(routes)],
  providers: [FirstGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
