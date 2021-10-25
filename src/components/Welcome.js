import React, { Component } from 'react'

export default class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        return (
            <div>
                <h1>hello {name} a.k.a {heroName}</h1>
            </div>
        )
    }
}
