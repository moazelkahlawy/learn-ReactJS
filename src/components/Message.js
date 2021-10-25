import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Welcome Moaz'
        }
    }
    
    changeMessage(){
        this.setState({
            message: 'Welcome Abdo'
        })
    }

    render() {
        const {message} = this.state
        return (
            <div>
                <h1>{message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message