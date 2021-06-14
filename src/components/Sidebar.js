import React, { useState } from "react";
import anime from "animejs";
import "../styles/sidebar.css";
import { db } from "../firebase";
import History from "./History";

const Sidebar = (props) => {
    const [hovered, setHovered] = useState(false);
    const [cities, setCities] = useState([]);

    const handleMouseOver = () => {
        setHovered(true);
        anime({
            targets: [".sidebar"],
            width: "12em",
            duration: 500,
            elasticity: 1,
            easing: "easeOutCirc",
        });
    };

    const handleMouseleave = () => {
        setHovered(false);
        anime({
            targets: [".sidebar"],
            width: "4em",
            duration: 500,
            direction: "normal",
            easing: "easeInCirc",
        });
    };

    db.collection("cities")
        .orderBy("createdAt", "desc")
        .limit(10)
        .get()
        .then((docs) => {
            let arr = [];
            docs.forEach((i) => arr.push(i.data()));
            setCities(arr);
        });

    return (
        <aside
            className="sidebar"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseleave}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                id="icon-sidebar"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
            {hovered ? (
                <div className="sidebar-nav">
                    <div className="history">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="history-icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="sidebar-option">History</p>
                    </div>
                    <History data={cities} onClick={props.onClick} />
                </div>
            ) : null}
        </aside>
    );
};

export default Sidebar;
