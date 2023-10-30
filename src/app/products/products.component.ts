import { Component, OnInit } from '@angular/core';
import { IProduct } from '../data/models/products';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  pageTitle: string = "Product List";
  imageWidth: number=50;
  imageMargin: number=2;
  showImage: boolean=false;
  
  private _listFilter: string='';

  get listFilter():string{
    
    return this._listFilter;

  }
  
  set listFilter(value:string){

    this._listFilter=value;
    this.filteredProduct=this.performFilter(value);

  }

  products: IProduct[] =[
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
  ];

  filteredProduct: IProduct[]=[];

  ngOnInit(): void {
   
    this.listFilter="";
  }

  toggleImage():void{
    this.showImage=!this.showImage;
  }

  performFilter(filterBy : string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => {
      return product.productName.toLocaleLowerCase().includes(filterBy);
    });
  }

  onRatingClicked(message : string):void{
    this.pageTitle="Product List:"+ message;
  }
  
  constructor() { }

 

}
