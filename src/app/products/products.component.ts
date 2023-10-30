import { Component, OnInit } from '@angular/core';
import { IProduct } from '../data/models/products';
import { ProductService } from '../data/services/product.service';

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

  constructor(private productService: ProductService) { }

  get listFilter():string{
    
    return this._listFilter;

  }
  
  set listFilter(value:string){

    this._listFilter=value;
    this.filteredProduct=this.performFilter(value);

  }

  products: IProduct[] =[];
  filteredProduct: IProduct[]=[];

  ngOnInit(): void {
   
    this.products= this.productService.getProduct();
    this.filteredProduct= this.products;
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
  
  

 

}
