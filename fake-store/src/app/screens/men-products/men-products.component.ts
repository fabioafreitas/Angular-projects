import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductsService } from '../../services/products.service';
import { ProductsStoreService } from '../../services/products-store.service';
import { FilterProductCategoryPipePipe } from '../../pipes/filter-product-category-pipe.pipe';

@Component({
  selector: 'app-men-products',
  imports: [ProductListComponent, FilterProductCategoryPipePipe],
  templateUrl: './men-products.component.html',
  styleUrl: './men-products.component.scss'
})
export class MenProductsComponent {
  category = signal(`men's clothing`);
  productsService = inject(ProductsService);
  products = signal<Product[]>([]);
  isDataReady = signal(false);

  constructor(
    private store: ProductsStoreService,
    private api: ProductsService
  ) {}

  ngOnInit(): void {
    const snapshot = this.store.getSnapshot();
    
    if (snapshot) {
      this.products.set(snapshot);
    } else {
      this.api.fetchProducts().subscribe((data) => {
        this.products.set(data);
        this.store.setProducts(data);
      });
    }
  }
}
