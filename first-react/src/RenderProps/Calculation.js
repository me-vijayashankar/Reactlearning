import React, { Component } from 'react'

export class Calculation extends Component {
    constructor(props) {
        super(props)        
        this.state = {
          output: this.props.operation(props.value1+props.value2)
        };
    }
    
    render() {
        return (
            <div>
                <p>{this.state.output}</p>
            </div>
        )
    }
}

export default Calculation
