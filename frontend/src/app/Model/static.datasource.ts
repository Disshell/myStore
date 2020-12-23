import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';

@Injectable()

export class  StaticDataSource {

    private products: Product[] = [
        new Product(101, 'Nike Lace up Shoe', 'Sportswear', 'Sneaker Shoe (Sportswear)', 99.99),
        new Product(102, 'T-shirt', 'Sportswear', 'Sports T-shirt High Quality (Sportswear)', 39.99),
        new Product(103, 'TR Trail Shoe', 'Sportswear', 'Running Shoe (Sportswear)', 89.99),
        new Product(104, 'Cooler', 'Sportswear', 'High Quality Cooler (Sportswear)', 49.99),
        new Product(105, 'Graphic T-shirt Grey L', 'Sportswear', 'Cotton casual T-shirt (Sportswear)', 29.99),
        new Product(201, 'Euphoria EDP 100 ml', 'Perfumes', 'Liquid Amber, black violet (Perfumes)', 19.99),
        new Product(202, 'Eternity Moment EDP 100 ml', 'Perfumes', 'Brazilian Rose Wood, Cashmere Wood, Musk (Perfumes)', 18.99),
        new Product(203, 'In Red EDT 100 ml', 'Perfumes', 'Jasmene, Violet Leaf, Lily,  (Perfumes)', 19.99),
        new Product(204, 'Flower Pink EDT 100 ml', 'Perfumes', 'Othmani Rose (Perfumes)', 19.99),
        new Product(205, 'Musk EDC 100 ml', 'Perfumes', 'Musk EDC 100 ml (Perfumes)', 29.99),
        new Product(301, 'Head & Shouder Shampoo 13.5 fl oz', 'Cosmetics', 'Clinical strength dandruff Shampoo (Cosmetics)', 19.99),
        new Product(302, 'Dove Body Wash 22 oz', 'Cosmetics', 'Dove Body Wash For Dry Skin Deep Moisture (Cosmetics)', 12.99)
    ] ;

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        return from([order]);
    }
}
