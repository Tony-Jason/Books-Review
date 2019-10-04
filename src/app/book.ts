import { Text } from './text';

export class Book {
    id:number;
    author:string;
    title:string;
    price:number;
    // reviews:Text[];
    
    constructor(id:number,author:string,title:string,price:number){
        this.id = id;
        this.author = author;
        this.title = title;
        this.price = price;
    }
}
