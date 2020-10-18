import React from 'react';
import Msg from "./Msg";
class User extends React.Component{
    constructor(){
        super();
        this.state={
            user:"empty",
            msg:"nothing"
        }
    }
    jobSeeker=() =>{
        this.setState({
            user:"job-seeker",
            msg:"nothing"
        })
    }
    recruiter=() =>{
        this.setState({
            user:"recruiter",
            msg:"nothing"
        })
    }
    jobSeekerMsg=() =>{
        this.setState({
            user:"nothing",
            msg:"There are 300 recruiters similar to your skills, would you like to “ review” or broadcast”"
        })
    }
    recruiterMsg=() =>{
        this.setState({
            user:"nothing",
            msg:"Post a job"
        })
    }
    render(){
        console.log(this.props.userPage);
        return(
            <div>
                {this.state.user==="empty" && 
                    <div className="user">
                        <h2> Welcome In this web</h2>
                        <div className="userBtn" onClick={this.jobSeeker}>
                            Job Seeker
                        </div>
                        <div className="userBtn" onClick={this.recruiter}>
                            Recruiter
                        </div>
                    </div>
                }  
                {
                    this.state.user==="job-seeker" && 
                    <div className="form">
                        <h2>Sign for applying</h2>
                            <input type="text" placeholder="Name" required focus/>
                            <input type="email" placeholder="Email" required />
                            <input type="text" placeholder="Phone" required/> 
                            <input type="text" placeholder="Location" required/>
                            <div>
                                <input type="radio" name="exp" />Fresher
                                <input type="radio" name="exp" />Experence  
                            </div>  
                            <button onClick={this.jobSeekerMsg}>Brodcast</button>                        
                                
                        
                    </div>
                }
                {
                    this.state.user==="recruiter" && 
                    <div className="form">
                        <h2>Sign for posting job</h2>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Phone" />
                            <input type="text" placeholder="Company" /> 
                            <input type="text" placeholder="Prefferd location" />
                            <h4>Majorly hire</h4>
                            <div className="company-hire">
                                <input type="radio" name="exp" />Fresher
                                <input type="radio" name="exp" />junior to mid
                                <input type="radio" name="exp" />Senior
                                 
                            </div>
                            <h4>Blue color workforce</h4>
                            <div className="company-hire">
                                <input type="radio" name="exp" />Yes
                                <input type="radio" name="exp" />No  
                            </div>    
                            <button onClick={this.recruiterMsg}>Brodcast</button>                         
                        
                    </div>
                } 
                {
                    this.state.msg==="There are 300 recruiters similar to your skills, would you like to “ review” or broadcast”" &&
                    <Msg msg={this.state.msg} userPage={this.props.userPage}/>
                }
                {
                    this.state.msg==="Post a job" &&
                    <Msg msg={this.state.msg} userPage={this.props.userPage} />
                }
            </div>
        )
    }
}
export default User;