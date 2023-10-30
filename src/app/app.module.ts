import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { StarRatingComponent } from './star-rating/star-rating.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    StarRatingComponent,
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
