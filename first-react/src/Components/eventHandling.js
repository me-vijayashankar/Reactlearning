import React, { Component } from "react";

export class EventHandling extends Component {

    constructor(){
        super();
        this.state ={
            message: "welcome to application"
        }
        // this.changeState = 
    }
    changeState=()=>{
        this.setState({
            message:"Thankyou!!"
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.changeState}>
                    LogOut
                </button>
            </div>
        );
    }
    
}

export default EventHandling;

//
