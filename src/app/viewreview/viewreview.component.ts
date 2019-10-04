import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Text } from '../text';

@Component({
  selector: 'app-viewreview',
  templateUrl: './viewreview.component.html',
  styleUrls: ['./viewreview.component.css']
})
export class ViewreviewComponent implements OnInit {
  reviewdisp: Text[] = [];
  idview: number;

  constructor(private svc: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idview = parseInt(this.route.snapshot.paramMap.get('id'));
    this.reviewdisp = this.svc.reviewarray;
    console.log(this.reviewdisp);
  }

}
