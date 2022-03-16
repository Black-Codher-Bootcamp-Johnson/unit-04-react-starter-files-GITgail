import Header from '../components/Header';
import BookList from '../components/BookList';

const HomePage = (props) => {
    const { books, addBook } = props;
    return (
        <>
            <Header />
            <h2>Welcome to the Bookcase App HomePage</h2>
            <BookList books={books} addBook={addBook}></BookList>
        </>
    );
}
export default HomePage;