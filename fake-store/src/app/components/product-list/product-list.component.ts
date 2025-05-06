import { Component, input } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../models/product.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = input.required<Product[]>();

}
