import {Link} from 'react-router-dom';
import './About.css';

function AboutUs () {
    return(
    <h1>About</h1>
         <h1>About</h1>
         <div class='breadcrumb'>
    <Link to="/">Header</Link>
        <div class="page">Welcome to the Bookcase Application</div>
    <p>This application was created by Gelly.
This bookcase app displays a list of books that a user can
save to a local bookcase</p>
      <p>Click on the "Add + " button to add a book to your bookcase.
Use the search bar to find the latest books by name, author
or description</p>  
    
    <button className='add-button'>+ Add</button>
    </>

    )
}

export default AboutUs 
















