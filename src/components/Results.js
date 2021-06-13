import React from "react";
import "../styles/results.css";

export default function Results(props) {
    return (
        <div
            className="results"
            style={{
                background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://source.unsplash.com/random?wallpaper,${props.city}')`,
            }}
        >
            <div className="darken">
                <h3>{props.city}</h3>
                <h1>{props.weather}</h1>
                <h1>
                    {props.temperature}{props.temperature ? 'º' : null}
                    {props.temperature
                        ? props.unit === "metric"
                            ? "C"
                            : props.unit === "imperial"
                            ? "F"
                            : null
                        : null}
                </h1>
            </div>
        </div>
    );
}
