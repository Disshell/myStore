import { AuthService } from 'src/app/Shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  logout() {
    this.auth.clear();
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
  }

}
