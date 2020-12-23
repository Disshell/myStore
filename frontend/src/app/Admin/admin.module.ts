import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from '../Shared/auth/auth.component';
import { ProductEditorComponent } from './product-editor/productEditor.component';
import { ProductTableComponent } from './product-table/productTable.component';
import { OrderTableComponent } from './order-table/orderTable.component';
import { AdminGuard } from '../Shared/guards/admin.guard';
import { SharedModule } from '../Shared/shared.module';

let routing = RouterModule.forChild([
        { path: 'auth', component: AuthComponent } ,
        { path: 'main', component: AdminComponent, canActivate: [AdminGuard],
            children:[
                { path: 'products/:mode/:id',   component:ProductEditorComponent},
                { path: 'products/:mode',       component:ProductEditorComponent},
                { path: 'products',             component:ProductTableComponent},
                { path: 'orders',               component:OrderTableComponent},
                { path: '**',                   redirectTo: 'products' }
            ]
        },
        { path: '**', redirectTo: 'auth'}
    ]);

@NgModule ({
    imports: [CommonModule, routing, FormsModule, RouterModule, SharedModule],
    providers: [AdminGuard],
    declarations: [ProductEditorComponent, ProductTableComponent, OrderTableComponent, AdminComponent]
})

export class AdminModule {

}