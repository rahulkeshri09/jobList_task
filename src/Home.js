import React from 'react';
import Navbar from './Navbar';
import HomeContents from './HomeContents';
//import User from './User';
class Home extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <HomeContents />
            </div>
        )
    }
}
export default Home;