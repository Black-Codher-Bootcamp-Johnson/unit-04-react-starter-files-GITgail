import Header from '../components/Header';
import BookList from '../components/BookList';
import { Link } from 'react-router-dom'; 

const Home = (props) => {
    const { books, addBook } = props;
    return (
        <>
            {/* <Header />  */}
            <div className="header">
            <h1>My Bookcase App</h1>
            
            </div>
            <div className="breadcrumb"></div>
            <div className="searchBar">
                <form>
                <input type="submit" value="Search" />
                    <label>
                        <input type="text" placeholder="Enter name, author, keyword or genre..."
                        name="search" />
                    </label>
                         {/* <input type="submit" value="Search" /> */}
                         <button>Find</button>
                </form>
                    <h1></h1>
            </div> 
            <BookList books={books} addBook={addBook} iAmOnBookList={true}></BookList>
            
        </>

        
    );
}
export default Home;







            {/* <div className="breadcrumb">
             <Link to="/"> Home </Link>  " |"
                <Link to="/about"> About </Link> " |"
                <Link to="/bookcase" className="bookLink">
                    {" "}
                 Bookcase ({props.bookLength})
                </Link>
             </div> */}
