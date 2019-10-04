import { Component, OnInit } from '@angular/core';
import { Text } from '../text';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
   
    id:number;
    review:string;
    newReview:Text ;
   

  constructor(private svc: DataService,private route: ActivatedRoute) { }

  ngOnInit() {
  }
  addReview(){
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
   this.newReview = new Text(this.id,this.review);
   this.svc.createrev(this.newReview);
   
  }
}
