import React, { Component } from 'react'

export default class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        let name
        if (this.state.isLoggedIn) {
            name = <div>moaz</div>
        } else {
            name = <div>Abdo</div>
        }
        return <div>{name}</div>
        // return (
        //     <div>
                
        //     </div>
        // )
    }
}
