import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Product } from "./products.model"

@Injectable()
export class ProdcutService{
    private products: Product[] = [{
        id: "1",
        title: "Product 1",
        image: "http://via.placeholder.com/450x300",
        price: "40",
        description: "Product 1 Description"

      },
      {
        id: "2",
        title: "Product 2",
        image: "http://via.placeholder.com/450x300",
        price: "20",
        description: "Product 2 Description"
      },
      {
        id: "3",
        title: "Product 3",
        image: "http://via.placeholder.com/450x300",
        price: "55",
        description: "Product 3 Description"
      },
      {
        id: "4",
        title: "Product 4",
        image: "http://via.placeholder.com/450x300",
        price: "22",
        description: "Product 4 Description"
    }];

    public getListings(): Observable<Product[]> {
        const listingObservable: Observable<Product[]> = new Observable((observer)=> {
            setTimeout(()=> {
                observer.next(this.products);
            },100);
            setTimeout(()=> {
                observer.error("Error--- Observable");
            },100);
            setTimeout(()=> {
                observer.complete();
            },100);
        });
        return listingObservable;
    }
}