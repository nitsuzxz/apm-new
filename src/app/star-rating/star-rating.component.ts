import { Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'pm-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})

export class StarRatingComponent implements OnChanges {
  
  cropWidth:number=65;
  
  @Input() rating:number=0;
  @Output() ratingClicked:EventEmitter<string>= new EventEmitter<string>();
  

  constructor() { }
 
  ngOnChanges(): void {
    this.cropWidth=this.rating * 65/5;
  }

  onClick():void{
   
    this.ratingClicked.emit(` The rating ${this.rating} was clicked`);
  } 



}
