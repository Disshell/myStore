import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()

export class AdminGuard {

    constructor(private route: Router, private auth: AuthService) {   
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (!this.auth.authenticated || !this.auth.isAdmin) {
            this.route.navigateByUrl('/auth')
            return false;
        }
        return true;
    }
}
