import React from 'react'

export default function Greeet(props) {
    const {name, heroName} = props
    return (
        <div>
            <h1>hello {name} a.k.a {heroName}</h1>
        </div>
    )
}

