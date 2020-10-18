import React from 'react';
import SearchBar from './SearchBar';
class HomeContents extends React.Component{
    render(){
        return (
            <div className="home-contents">
                <SearchBar />
                <h1>JOB LISTING...</h1>
            </div>
        )
    }
}
export default HomeContents;