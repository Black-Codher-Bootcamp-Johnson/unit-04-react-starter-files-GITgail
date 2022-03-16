import React, { useState } from 'react';
import BookList from './components/BookList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Search from './components/Search';
import HomePage from './components/HomePage';
import bookdata from './models/books.json';


const App=()=> {
  const [keyword, setKeyword] = useState('');
  const [books, setBooks] = useState(bookdata);
  function addBook(title) {
    console.log('The Book ${title} was clicked');
    
  }
  
  async function findBook(keyword) {
    const value = 'food';
    const url = 
`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-eboo
ks&print-type=books&projection=lite`;
    const results = await fetch(url).then(res =>res.json());
      setBooks(results.items); 
  }

  return (
   <Router>
    <>
     <Search setKeyword={setkeyword} keyword={keyword} findBook={findBook} />
     <BookList />
        <Routes>
           <Route 
             exact 
             path="/" 
             element={<HomePage books={books} addBook={addBook}></HomePage>}
             />

         {/* <Route
          path="/bookcase"
          element={<BookcasePage books={books} 
  addBook={addBook}></BookcasePage>} 
        /> */}
           {/* <Route path="/about" element=[AboutUsPage />} /> */}
        </Routes>
      </>
    </Router>
  );  
};
export default App;

