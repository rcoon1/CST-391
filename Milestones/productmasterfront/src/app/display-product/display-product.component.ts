import { products } from './../models/products';
import { Component, Input } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service'

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})

  export class DisplayProductComponent {

    @Input() products: products | null = null;
    //sold: boolean = false;
    editProducts: products | null = null;
  
    constructor(private service: ProductServiceService) { }
  
    ngOnInit() {
      console.log("Getting data ....");
      console.log("Product", this.products);
    }
    public onEditProduct(products: products) {
      this.editProducts = products;
    }
  
  }