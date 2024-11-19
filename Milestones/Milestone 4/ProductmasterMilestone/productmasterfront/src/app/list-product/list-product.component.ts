import { ProductServiceService } from '../service/product-service.service';
import { products } from './../models/products';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  @Input() products: products | null = null;
  product: products[] = [];
  selectedProduct: products | null = null;
  constructor(private service: ProductServiceService) { }


  ngOnInit() {
    console.log("Getting data...");
    this.service.getProducts((product: products[]) => {
      this.product = product;
      console.log('this.product', this.product);

    });
  }

  public onSelectProduct(product: products) {
    this.selectedProduct = product;
  }
}