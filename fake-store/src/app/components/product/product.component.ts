import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  product = input.required<Product>();

  productConsole() {
    console.log(`product id = ${JSON.stringify(this.product(), null, 4)}`);
  }
}
