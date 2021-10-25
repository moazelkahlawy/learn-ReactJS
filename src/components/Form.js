import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: ''
        }
    }
    
    handleUsernameChaange = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }

    
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <div>
                   <label>Username</label>
                   <input type="text" value={this.state.username} onChange={this.handleUsernameChaange}/>
               </div>
               <button type='submit'>Submit</button>
           </form>
        )
    }
}
