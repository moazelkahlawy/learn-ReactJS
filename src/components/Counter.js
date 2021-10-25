import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }
   
    
    render() {
        return (
            <div>
               <div>count - {this.state.count}</div>
               <button onClick={() => this.increment()}>Inc</button>
            </div>
        )
    }
}
