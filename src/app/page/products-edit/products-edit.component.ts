import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent {
  product!: IProduct;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: ActivatedRoute,
  ) {
    this.router.paramMap.subscribe((params => {
      const id = Number(params.get('id'));
      this.productService.getProduct(id).subscribe(data => {
        this.product = data

        this.formProduct.patchValue({
          name: data.name,
          price: data.price
        })


      }, error => console.log(error.message)
      )
    }))
  }
  formProduct = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6)]],
    price: [0]
  })
  onSubmit() {
    const product: IProduct = {
      id: this.product.id,
      name: this.formProduct.value.name || '',
      price: this.formProduct.value.price || 0
    }
    this.productService.updateProduct(product).subscribe(product => {
      console.log(product);

    })
  }
}
