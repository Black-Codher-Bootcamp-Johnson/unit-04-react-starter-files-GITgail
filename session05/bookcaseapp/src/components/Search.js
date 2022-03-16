import React from 'react';
const Search = (props) => {
    const {keyword, setKeyword, handleSubmit} = props;
    return (
        <div>
           <form> 
                <p style = {{ color: "red" }}>
                    <em>{keyword && 'Keywords Typed: ' + keyword}</em>
                </p>   
                  {/* form onSubmit={(e) => handleSubmit(e)}> */}
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






