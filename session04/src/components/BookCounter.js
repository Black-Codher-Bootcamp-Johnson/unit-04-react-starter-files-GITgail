import React from 'react';

import './BookCounter.css';

const BookCounter = (props) => {

  return (
    <main>
      <h2>{props.library.name}'s Books</h2>
      <button onClick={() => props.refreshBooks()}>Refresh Books</button>
      <ul>
      {props.library.books.map((book) => (
        <li>
          <h3>{book.volumeinfo.title}</h3>
          <img src={book.volumeInfo.imgLinks.smallThumbnail} alt={book.volumeInfo.title}/>
          <p>Description: {book.volumeInfo.description}</p>
          <ul>
            {book.volumeInfo.authors.map((author) => (
              <li>{author}</li>
            ))}
          </ul> 
          <span>Price: £{book.saleInfo.retailPrice && book.saleInfo.retailPrice.amount}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default BookCounter;
