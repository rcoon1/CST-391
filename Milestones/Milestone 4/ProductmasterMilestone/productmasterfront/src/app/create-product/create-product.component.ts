import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductServiceService } from '../service/product-service.service';
import { products } from '../models/products';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  wasSubmitted: boolean = false;
  products: products = new products(Math.floor(Math.random() * 1000000), '', -1, '', -1,'');
  constructor(private service: ProductServiceService) { }

  ngOnInit() { }

  public onSubmit() {
    this.service.createProducts(this.products, this.test);
    console.log('The return from createProduct was ' + status);
    this.wasSubmitted = true;
  }

  test() {

  }


}