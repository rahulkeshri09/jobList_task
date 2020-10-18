import React from 'react';
class Navbar extends React.Component{

    render(){
        return (
            <div id="nav">
                <div id="logo">
                    <img src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_960_720.png"
                    alt="logo"
                    />
                </div>
                <div class="navLinks">
                    <div>Post a job</div>
                    <div>Broadcast</div>
                    <div>Expert support</div>
                </div>
                <div style={styles.st}>Sign-up / Sign-in</div>
            </div>
        )
    }
}
const styles={
    st:{
        color:"chocolate",
        backgroundColor:"",
        height:20,
        margin:"auto",
        marginLeft:120,
        fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        fontSize:24
    }
}
export default Navbar;