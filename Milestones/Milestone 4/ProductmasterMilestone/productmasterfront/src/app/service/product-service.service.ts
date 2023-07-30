import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { products } from '../models/products';

@Injectable({ providedIn: 'root' })
export class ProductServiceService {

    private host = "http://localhost:3000"

    constructor(private http: HttpClient) {

    }



    public getProducts(callback: (products: products[]) => void): void {
        this.http.get<products[]>(this.host + "/products").subscribe((products: products[]) => {
            callback(products);
        });
    }



    public createProducts(product: products, callback: () => void): void {
        this.http.post<products>(this.host + "/products", product).subscribe((data) => {
            callback();
        });
    }

    public updateProducts(product: products, callback: () => void): void {
        this.http.put<products>(this.host + "/products", product).subscribe((data) => {
            callback();
        });
    }

    public deleteProduct(id: number, callback: () => void): void {
        this.http.delete(this.host + "/products/" + id).subscribe((data) => {
            callback();
        });
    }
}