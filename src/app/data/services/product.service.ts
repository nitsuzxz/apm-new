import { Injectable } from "@angular/core";
import { IProduct } from "../models/products";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
  
    getProduct():IProduct[]{
        return[
            {
                "productId":2,
                "productName":"Garden Cart",
                "productCode":"GDN-123",
                "releaseDate":"March 12, 2023",
                "description":"14 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating":3,
                "imageUrl": "assets/images/garden_cart.png"
              },
              {
                "productId":4,
                "productName":"Hammer",
                "productCode":"HMMR3-123",
                "releaseDate":"June 12, 2023",
                "description":"Its just a hammer",
                "price": 99.99,
                "starRating": 4.8,
                "imageUrl": "assets/images/hammer.png"
              }
        ]
    }
}