import React from 'react';
import Home from './Home';
import HomeContents from './HomeContents';
class Msg extends React.Component{
    constructor(){
        super();
        this.state={
            msg:true
        }
    }
    componentDidMount(){
        setTimeout(displayHome,2000);
        const state=this;
        function displayHome(){
            state.setState({
                msg:false
            })
        }
    }
    render(){
        const msg=this.props.msg;
        console.log(this.props)
        return(
            <div> 
                {this.state.msg && 
                    <div className="msg">
                        {msg}
                    </div>
                }
                {!this.state.msg &&
                    <div>
                        <Home />
                    </div> 
                }
            </div>
        )
    }
}
export default Msg;