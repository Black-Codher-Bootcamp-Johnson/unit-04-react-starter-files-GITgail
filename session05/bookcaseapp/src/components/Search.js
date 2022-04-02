import React from "react";
const Search = (props) => {
    const { keyword, setKeyword, findBooks, setBooks } = props;
    const handleSubmit = (event) =>{
            event.preventDefault();
            console.log( 'Keyword: ${keyword}');
            setBooks(findBooks(keyword).items);
    }; 

    return (
        
        <div>
            <p style={{color:"red"}}><em>{keyword && 'Keywords Typed'}</em></p> 
           
        <form onSubmit={(e) => handleSubmit(e)}>
            <label for="search">Search</label>
            <input type="text" value={keyword}
            onChange={(e) => setKeyword(e.target.value)}/>
            <input type="text" name="searchBar" />
            <button>submit</button>
        </form>
     </div>
    )
};
export default Search;








//   return (
//     <div>
//         <form onSubmit={(e) => handleSubmit(e)}>
//             <p style={{ color: "red" }}>
//           <em>{keyword && "Keywords Typed: " + keyword}</em></p>

//             <p></p>
//              <label>Search</label>
//             <input
//           type="text" name="search" value={keyword}
//           onChange={(e) => setKeyword(e.target.value)} />
//         {/* <input type="submit" value="submit" /> */}

//         <form onSubmit={(e) => handleSubmit(e)}>
//            <p> 
//               <label for="search">Search:</label>
//               <input type="text" value={props-keyword} 
//               onChange={(e) => setKeyword(e.target.value)} />
//               <input value={props.keyword} onChange={(e) =>
//               props.setKeyword(e.target.value)}/>
//             </p>           
//              <p>   
//               <input type="submit" value="Search" />
//             </p>
//                <p style={{color:"red"}}><em>{keyword && 'Keyword typed: '+ keyword}</em></p>
//                  <button>submit</button>
//             </form>
//           </div>
//     );
// };   

//  export default Search;







{/* // import React from 'react';

// const Search = (props) => {
// const { keyword, setKeyword, findBooks, setBooks } = props;
// const handleSubmit = (event) =>{
//         event.preventDefault();
//         console.log( 'Keyword: ${keyword}')
//         setBooks(findBooks(keyword).items);
// };
return <div>      
      <form onSubmit={(e) => handleSubmit(e)}>
           <p> 
              <label for="search">Search:</label>
              <input type="text" value={props-keyword} 
              onChange={(e) => setKeyword(e.target.value)} />
              <input value={props.keyword} onChange={(e) =>
              props.setKeyword(e.target.value)}/>
            </p>           
            <p>   
              <input type="submit" value="Search" />
            </p>
             <p style={{color:"red"}}><em>{keyword && 'Keyword typed: '+ keyword}</em></p>
             <button>submit</button>
            </form>
          </div>
}

// export default Search; */}
