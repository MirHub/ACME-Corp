import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    public getProducts(): Observable<any> {
        return this.http.get('/api/v1/products');
    }
}