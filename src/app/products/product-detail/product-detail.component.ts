import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/data/models/products';
import { ProductService } from 'src/app/data/services/product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string="Product Details";
  product:IProduct | undefined;
  errorMessage:string='';
  sub!: Subscription;

  constructor(private route:ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {

    const id= Number(this.route.snapshot.paramMap.get("id"));
    this.pageTitle+=`: ${id}`;
    this.getProduct(id);
  }

  onBack():void{
    this.sub.unsubscribe();
    this.router.navigate(["/products"]);
  }

  getProduct(id:number):void{

    this.sub=this.productService.getProduct(id).subscribe({
      next: product => {
        this.product= product;
        
      },
      error: err => this.errorMessage =err
    })
  }
}
