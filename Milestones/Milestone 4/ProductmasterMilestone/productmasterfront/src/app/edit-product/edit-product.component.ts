import { Component, Input } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { products } from '../models/products';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

    wasSubmitted: boolean = false
    constructor(private service: ProductServiceService) { }
    @Input() product: products | null = null;
    ngOnInit() { }
  
    public onSubmit() {
      this.service.updateProducts(this.product!, this.test);
      console.log('The return from updateProduct() was ' + status);
      this.wasSubmitted = true;
    }
  
    test() {
  
    }
  }