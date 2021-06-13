import React, { useRef, useState, useEffect } from "react";
import "../styles/form.css";

export default function Form(props) {
    const buttonElement = useRef();

    const [hovered, setHovered] = useState(false);

    const handleMouseOver = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    useEffect(() => {
        document.addEventListener("keydown", () => {
            document.getElementById("input").focus();
        });

        return () => {
            document.removeEventListener("keydown", () => {
                document.getElementById("input").focus();
            });
        };
    }, []);

    return (
        <div className="form">
            <h1>Weather</h1>
            <form onSubmit={props.onSubmit}>
                <p>City Name</p>
                <input
                    ref={buttonElement}
                    type="text"
                    placeholder="City"
                    id="input"
                    autoComplete="off"
                    spellCheck="false"
                    value={props.city}
                    onChange={props.onChange}
                />
                <button
                    id="search"
                    type="submit"
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                >
                    {!hovered ? (
                        <>
                            <p>Search</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon-search icon"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-search icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    )}
                </button>
            </form>
            <footer className="footer">
                <p>
                    © <a href="https://github.com/dnrm">Daniel Medina</a> 2021
                </p>
            </footer>
        </div>
    );
}
