import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [AuthComponent, NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class SharedModule { }
