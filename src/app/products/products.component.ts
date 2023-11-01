import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../data/models/products';
import { ProductService } from '../data/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit, OnDestroy {

  pageTitle: string = "Product Management";
  imageWidth: number=50;
  imageMargin: number=2;
  showImage: boolean=false;
  errorMessage: string="";
  sub!: Subscription;
  
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
   
    this.sub=this.productService.getProduct().subscribe({
      next: products => {
        this.products = products;
        this.filteredProduct= products;
      },
      error: err => this.errorMessage =err
    });
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
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
