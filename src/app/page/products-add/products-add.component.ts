import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent {

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
  ) { }
  formProduct = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    price: [0]
  })
  onSubmit() {
    const product: IProduct = {
      name: this.formProduct.value.name || '',
      price: this.formProduct.value.price || 0
    }
    this.productService.addProduct(product).subscribe(product => {
      console.log(product);

    })
  }
}
