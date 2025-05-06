import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsStoreService } from '../../services/products-store.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [NgIf],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: ProductsStoreService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const snapshot = this.store.getSnapshot();

    if (snapshot) {
      this.product = snapshot.find(p => p.id === id);
    } else {
      // optionally: fetch or redirect
    }
  }
}