import { Component, Input } from '@angular/core';
import { ProductServiceService } from '../service/product-service.service';
import { products } from '../models/products';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {

  products: products = new products(-1, '',-1,'',-1,'');
  wasSubmitted: boolean = false;

  constructor(private service: ProductServiceService) { }
  @Input() product: products | null = null;
  
  ngOnInit() { }

  public onSubmit() {
    this.service.deleteProduct(this.products.productId, this.test);
    console.log('The return from deleteProduct was ' + status);
    this.wasSubmitted = true;
  }

  test() {

  }
}