import { productsUrl } from 'src/app/config/api';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

// const apiUrl = "http://localhost:3000/products";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }
}

