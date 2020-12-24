import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RestDataSource } from 'src/app/Model/rest.datasource';

@Injectable()

export class AuthService {
    constructor(private dataSource: RestDataSource) {
    }

    authenticate( username: string, password: string): Observable<boolean> {
        return this.dataSource.authenticate(username, password);
    }

    get authenticated(): boolean {
        return this.dataSource.authToken != null ;
    }

    clear() {
        this.dataSource.authToken = null;
        this.dataSource.role = null;
    }

    isAdmin():boolean{
        if(this.dataSource.role == "[ROLE_ADMIN]")
            return true;
        return false;
    }

}