import Header from '../components/Header';
import BookList from '../components/BookList';
import { Link } from 'react-router-dom'; 

const Home = (props) => {
    const { books, addBook } = props;
    return (
        <>
            {/* <Header />  */}
            <div className="header">
            <h2>Welcome to my Bookcase App</h2>
            
            {/* <div className="breadcrumb">
             <Link to="/"> Home </Link>  " |"
                <Link to="/about"> About </Link> " |"
                <Link to="/bookcase" className="bookLink">
                    {" "}
                 Bookcase ({props.bookLength})
                </Link>
             </div> */}
            </div>
            <div class="searchBar">
                <form>
                    <label>
                        <input type="text" placeholder="Enter name, author, keyword or genre..."
                        name="search" />
                    </label>
                         <input type="submit" value="Find" />
                </form>
            </div> 
            <BookList books={books} addBook={addBook}></BookList>
        </>

        
    );
}
export default Home;




