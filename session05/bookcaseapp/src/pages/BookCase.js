import Header from '../components/Header';
import BookList from '../components/BookList';
// import { Link } from "react-router-dom";

const BookCase = (props) => {
    const { books, addBook } = props;
    return (
        <>
            <Header />
            <h2>Welcome to my personal bookcase</h2>
            <BookList books={books} addBook={addBook}></BookList>
        </>
    );
}


export default BookCase;