import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {
  private productsSubject = new BehaviorSubject<Product[] | null>(null);

  get products$(): Observable<Product[] | null> {
    return this.productsSubject.asObservable();
  }

  setProducts(products: Product[]): void {
    this.productsSubject.next(products);
  }

  getSnapshot(): Product[] | null {
    return this.productsSubject.value;
  }

  clear(): void {
    this.productsSubject.next(null);
  }
}
