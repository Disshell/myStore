import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { Order } from './order.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

const PROTOCOL= 'http';
const PORT= 8080 ;

@Injectable()

export class RestDataSource {
    baseUrl: string;
    authToken: string;
    role: string;

    constructor(private http: HttpClient) {
        this.baseUrl= `${PROTOCOL}://${location.hostname}:${PORT}/`
    }

    getProducts(): Observable<Product[]> {
        console.log(this.authToken);
        return this.http.get<Product[]>(this.baseUrl + 'api/product', this.getOptions());
    }

    saveOrder(order: Order) : Observable<Order> {
        return this.http.post<Order>(this.baseUrl + 'orders', order);
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + 'api/auth/login', 
        { login: user, password: pass}).pipe(map(response =>
            {
                console.log(response)
                this.authToken = response.login != null ? this.authToken = response. authenticationToken: null;
                this.role = response.role
                console.log(response.login)
                if(response.login !=null)
                    return true;
                else
                    false;
            }));
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl + 'products', product, this.getOptions());
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>
            (`${this.baseUrl}products/${product.id}`, product, this.getOptions());
    }

    deleteProduct(id: number): Observable<Product> {
        return this.http.delete<Product> 
        (`${this.baseUrl}products/${id}`, this.getOptions());  
    }

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.baseUrl + 'orders', this.getOptions());
    }

    updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>
            (`${this.baseUrl}orders/${order.orderID}`, order, this.getOptions());
    }

    deleteOrder(id: number): Observable<Order>  
    {
        return this.http.delete<Order> 
        (`${this.baseUrl}orders/${id}`, this.getOptions());  
    }

   private getOptions() {
        return { 
            headers: new HttpHeaders
            ({
                'Authorization': `Bearer ${this.authToken}`
             })
        }
    }
}