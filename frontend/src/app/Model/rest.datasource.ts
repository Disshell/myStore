import { Order } from 'src/app/Model/order.model';
import { OrderDto } from './dto/orderDto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Cart } from './cart.model';

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
        return this.http.get<Product[]>(this.baseUrl + 'api/product', this.getOptions());
    }

    saveOrder(order: Order) : Observable<Order> {
        return this.http.post<Order>(this.baseUrl + 'api/order', this.orderToDto(order), this.getOptions());
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + 'api/auth/login', 
        { login: user, password: pass}).pipe(map(response =>
            {
                this.authToken = response.login != null ? this.authToken = response. authenticationToken: null;
                this.role = response.role
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
            (`${this.baseUrl}products/${product.productId}`, product, this.getOptions());
    }

    deleteProduct(id: number): Observable<Product> {
        return this.http.delete<Product> 
        (`${this.baseUrl}products/${id}`, this.getOptions());  
    }

    getOrders(): Observable<Order[]> {
        return this.http.get<OrderDto[]>(this.baseUrl + 'api/order', this.getOptions()).pipe(map(
            response => {
                console.log(response)
                console.log(this.DtoToOrderArr(response))
                return this.DtoToOrderArr(response);
            }
        ));
    }

    updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>
            (`${this.baseUrl}orders/${order.orderId}`, order, this.getOptions());
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

    private orderToDto(order: Order): OrderDto{
        let orderDto = new OrderDto();
        orderDto.cart = JSON.stringify(order.cart);
        orderDto.city = order.city;
        orderDto.isShipped = order.isShipped;
        orderDto.name = order.name;
        orderDto.orderId = order.orderId;
        orderDto.state = order.state;
        orderDto.street = order.street;
        orderDto.zipCode = order.zipCode;
        return orderDto;
    }

    private DtoToOrderArr(orderDto: OrderDto[]): Order[]{
        let result: Order[] = new Array(orderDto.length);
        for (var i = 0; i < orderDto.length; i++) {
            let cart:Cart = JSON.parse(orderDto[i].cart);
            result[i]= new Order(cart)        
            result[i].city = orderDto[i].city;
            result[i].isShipped = orderDto[i].isShipped;
            result[i].name = orderDto[i].name;
            result[i].orderId = orderDto[i].orderId;
            result[i].state = orderDto[i].state;
            result[i].street = orderDto[i].street;
            result[i].zipCode = orderDto[i].zipCode;
        }
        return result;
    }
}