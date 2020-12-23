import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store/store.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ModelModule } from '../Model/model.module';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
    declarations: [
        StoreComponent,
        CartSummaryComponent,
        CartDetailsComponent,
        CheckoutComponent,
    ],
    
    imports: [
      BrowserModule,
      FormsModule,
      ModelModule,
      RouterModule,
      SharedModule
    ],
    
    exports: [
        StoreComponent, CartDetailsComponent, CheckoutComponent
    ]
  })

  export class StoreModule {

  }

