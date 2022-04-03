import React from 'react';
const Search = (props) => {
    const {keyword, setKeyword, findBook} = props;
    return (
        <div>
           <form onSubmit={(e) => findBook(e)}>
                <p style = {{ color: "red" }}>
                    <em>{keyword && 'Keywords Typed: ' + keyword}</em>
                </p>   
            
                <label for="search">Search</label>
                <input 
                    type="text" 
                    value={keyword}
                   onChange={(e) => setKeyword(e.target.value)} />
                <input type="submit">submit</input>
            </form>
        </div>
    );
};
export default Search;