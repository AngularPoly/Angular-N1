import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IProduct } from '../interface/Product';
import { Observable } from 'rxjs';
import { ICategory } from '../interface/Category';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  AddProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`http://127.0.0.1:8080/api/products`, product)
  }
  getAllProduct(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://127.0.0.1:8080/api/products`)
  }
  getOneProduct(_id: any): Observable<IProduct> {
    return this.http.get<IProduct>(`http://127.0.0.1:8080/api/products/${_id}`)
  }
  deleteProduct(_id: any): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://127.0.0.1:8080/api/products/${_id}`)
  }
  UpdateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://127.0.0.1:8080/api/products/${product._id}`, product)
  }


  getAllCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`http://127.0.0.1:8080/api/categorys`)
  }
}
