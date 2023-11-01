import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponent,
    StarRatingComponent,
    ProductDetailComponent  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"products", component:ProductsComponent},
      {path:"products/id", component:ProductDetailComponent},
      {path:"welcome", component:WelcomeComponent},
      {path:"", redirectTo:"welcome", pathMatch:"full"},
      {path:"**", redirectTo:"welcome", pathMatch:"full"},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
