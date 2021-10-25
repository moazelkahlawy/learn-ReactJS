import React, { Component } from 'react'

export default class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: 'hello'
        }
    }

    clickHandler(){
        this.setState({
            message: 'good bay'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.clickHandler()}>Click</button>
            </div>
        )
    }
}
