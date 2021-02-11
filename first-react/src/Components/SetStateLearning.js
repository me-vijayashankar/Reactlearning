import React, { Component } from 'react'

export class SetStateLearning extends Component {
    constructor(){
        super();
        this.state={
            count  : 0
        }
    }
    increment(){
        // this.state.count = this.state.count+1;
        console.log(this.state.count);
    }
    show(){
        this.setState({
            count:this.state.count
        })
    }
    render() {
        return (
            <div>
                <h2>
                    Welcome to the Count Application
                </h2>
                <h4> Count : {this.state.count}</h4>
                <div>
                    <button onClick={()=> this.increment()}>Increment</button>
                    <button onClick={()=>this.show()}>Show</button>
                </div>
            </div>
        )
    }
}

export default SetStateLearning
