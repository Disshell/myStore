import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/Shared/services/auth.service';

@Component({
  templateUrl: './admin.component.html'
})

export class AdminComponent {

  constructor(private auth: AuthService) {

   }
}