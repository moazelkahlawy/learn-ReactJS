import React from 'react'
import Person from './Person';
function NameList() {
    const persons = [
        {
            id: 1,
            name: 'moaz',
            age: 25,
            skill: 'vue'
        },
        {
            id: 1,
            name: 'abdo',
            age: 17,
            skill: 'html'
        },
        {
            id: 1,
            name: 'emad',
            age: 35,
            skill: 'css'
        },
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
            <div>{personList}</div>
        </div>
    )
}

export default NameList
