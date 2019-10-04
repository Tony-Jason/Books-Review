import { Injectable } from '@angular/core';
import { Book } from './book'
import { Text } from './text';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  bookarray: Book [] = [];
  reviewarray : Text [] = [];
  id: number = 1;

  constructor() { }

  create(b: Book) {
    b.id = this.id;
    ++this.id;
    this.bookarray.push(b);
  }

  createrev(r: Text){
    this.reviewarray.push(r);
  }
}
