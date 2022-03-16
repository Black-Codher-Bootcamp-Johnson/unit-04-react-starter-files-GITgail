import Header from './Header';
import BookList from './BookList';

const BookCase = (props) => {
    const { books, addBook } = props;
    return (
        <>
            <Header />
            <h2>Welcome to the Bookcase, Bookcase</h2>
            <BookList books={books} addBook={addBook}></BookList>
        </>
    );
}
export default BookCase