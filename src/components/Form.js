import React from 'react'
import '../styles/form.css';

export default function Form(props) {
    return (
        <div className="form">
            <h1>Weather App</h1>
            <form onSubmit={props.onSubmit}>
                <p>City Name</p>
                <input type="text" placeholder="City"/>
                <button type="submit">Go</button>
            </form>
        </div>
    )
}
