import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url : string = "http://localhost:8090/api/products";

  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.url + "/" + id);
  }
}
