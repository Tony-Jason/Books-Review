import { Component, OnInit } from '@angular/core';
import { Book } from '../book'
import { DataService } from '../data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  id:number;
  bookdisp: Book[] = [];
  constructor(private svc: DataService) { }

  ngOnInit() {
    this.bookdisp = this.svc.bookarray;
  }
 

}
