import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RestDataSource } from 'src/app/Model/rest.datasource';

@Injectable()

export class AuthService {
    constructor(private ds: RestDataSource) {
    }

    authenticate( username: string, password: string): Observable<boolean> {
        return this.ds.authenticate(username, password);
    }

    // Getter methods to return authenticated property 
    get authenticated(): boolean {
        return this.ds.authToken != null ;
    }

    // clear the authentiated token
    clear() {
        this.ds.authToken = null;
    }

}