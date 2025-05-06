import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'https://fakestoreapi.com/products';
  http = inject(HttpClient);
  
  getProductsFromApi() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
}
