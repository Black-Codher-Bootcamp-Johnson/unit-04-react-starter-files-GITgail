import React, { useState } from 'react';
import Book from "./Book"
import bookData from '../models/books.json';


function BookList (props) {
    console.log(props.books)

    return props.books.map(bookItem => <Book key={bookItem.id}
    book={bookItem}/>);
    // return props.books.map(bookItem => <div>I am</div>)
}






export default BookList;

