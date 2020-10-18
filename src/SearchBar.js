import React from 'react';
class SearchBar extends React.Component{
    render(){
        return(
            <div className="search-container">
                <input type="text" placeholder="Skills" />
                <input type="text" placeholder="Location" />
                <input type="text" placeholder="Near me" />
                <input type="text" placeholder="Pin Code" />
                <button type="submit">SUBMIT</button>
            </div>
        )
    }
}
export default SearchBar;