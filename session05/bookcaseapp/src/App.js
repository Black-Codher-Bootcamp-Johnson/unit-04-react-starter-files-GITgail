import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Book from "./components/Book";
import Header from "./components/Header";
import bookData from "./models/books.json";
import BookCase from "./pages/BookCase";
import Home from "./pages/Home";
import About from "./pages/About";

// import Home from './pages/Home';
// import BookCase from './pages/BookCase';

function App() {
  const [books, setBooks] = useState(bookData);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element = {
            <>
              <Header />
              {/* <h2>Welcome to my Bookcae App</h2> */}

              <Home books={books} addBook={addBook}></Home>
            </>
          }
          />
        
        <Route
          path="/bookcase"
          element = {
            <>
              <Header />
              {/* <h2>This is my personal bookcase</h2> */}
              <BookCase books={books} addBook={addBook}></BookCase>
            </>
          }
        />
        <Route
          path="/about"
          element = {
            <>
              <Header />
              {/* <h2>This is my personal bookcase</h2> */}
              <About ></About>
            </>
          }
        />
      </Routes>
    </Router>
  );

  function addBook(title) {
    console.log(`The Book ${title} was clicked`);
  }
}

export default App;

// import React, { useState, useEffect, Fragment } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import 'App.css';
// import Header from './components/Header';
// import Book from './components/Book';
// import BookList from './components/BookList';
// import About from './pages/About';
// import Search from './components/Search';
// import bookData from './models/local-books.json';
// import Home from './pages/Home'

// const App = () => {
//   const [keyword, setKeyword] = useState('');
//   const [books, setBooks] = useState(bookData);
//   const [bookcase, setBookcase] = useState([]);

//   return (
//         <div>
//         <React.Fragment>
//             <Link to="/" className='breadcrumb'>Home</Link>
//                <Link to="/bookcase" className="bookLink">BookCase</Link>
//                <Link to="/about" className="aboutLink">About</Link>
//          </React.Fragment>

//         <Router>
//           <Header />
//           <Search keyword={keyword} setKeyword={setKeyword} findBooks={findBooks} setBooks={setBooks} />
//           <Routes >
//             <Route
//               exact
//               path="/"
//               element={
//                 <>
//                   <Home books={books} addBook={addBook}></Home>
//                 </>
//               }
//               />
//               <Bookcase
//                 path="/bookcase"
//                 element={<Bookcase books={books} addBook={addBook}}
//                 />
//                 <Route path="/" element={<About />} />

//             </Routes>
//         </Router>
//         </div>
//    );
// }
//     function addBook(title) {
//       console.log('The Book ${title} was clicked');
//     }

//     async function findBook(keyword) {
//      const value = 'food';
//      const url =
//       `https://www.googleapis.com/books/v1/volumes?q=${title}&filter=paid-eboo
//         ks&print-type=books&projection=lite`;
//       const results = await fetch(url).then(res  => res.json());
//        if (!results.error) {
//        setBooks(results.items);

//        return results;
//        };
//       };

// export default App;

{
  /* <Route exact path="/" render={() => (
  

  <Router>
      <div className="container">
        <Route exact path="/" render={() => (
          <Fragment>
            <Header bookLength={bookcase.length} />
            <Search/>
            <BookList books={books} stored="library" addToBookcase={addToBookcase} removeFromBookcase={removeFromBookcase} />
          </Fragment>
        )} />
        <Route path="/bookcase" render={() => (
          <Fragment>
            <Header bookLength={bookcase.length} />
            <BookList books={bookcase} stored="bookcase" addToBookcase={addToBookcase} removeFromBookcase={removeFromBookcase} />
          </Fragment>
        )} />
        <Route path="/about" component={() => <About bookLength={bookcase.length} />} />
      </div>
    </Router> */
}
