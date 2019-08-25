import React from 'react'
import './index.scss'

const Person = (props) => {
    return(
        <div className="person-container">
            <div className="person-row">
                <p>Nombre: {props.person.name}</p>
            </div>
            <div className="person-row">
                <p>Apellidos: {props.person.lastName}</p>
            </div>
            <div className="person-row">
                <p>Edad: {props.person.age}</p>
            </div>
            <div className="person-row">
                <p>Email: {props.person.email}</p>
            </div>
        </div>
    )
}

export default Person