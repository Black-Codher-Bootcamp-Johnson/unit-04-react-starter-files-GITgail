import React, {useState} from "react";
import Book from  "./Book.js"
import data from '../models/books.json';


function BookList (props) {
    const [books] = useState(bookdata);
console.log("BookList props", props)    
    return books.map(bookItem => <Book book={bookItem} 
    addBook={props.addBook}/>);

}
export default BookList;


//  book={bookItem} addBook={props.addBook}/>);
// console.log{"BookList props" props};