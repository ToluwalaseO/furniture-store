import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import "./part1.css"

const Part1 = () => {
    return (
        <div
            className="part1"
            style={{
                backgroundImage: 'url(/room.png)', // Use the public folder path
                backgroundSize: 'cover', // Ensure it covers the area
                backgroundPosition: 'center', // Position it at the center
            }}
        >
            <div className="content">
                <h1>Discovering The Best</h1>
                <h2>Furniture For Your Home</h2>
                <p>
                    Our practice is designing complete environments,
                    exceptional buildings,
                </p>
                <p1>
                    communities and places in special situations,
                    here a unique history.
                </p1>
                <button className="dc">
                    100% Free
                    <p>Design Consultations</p>
                </button>
                <button className="arrow">
                    <FontAwesomeIcon icon={faArrowDown} style={{ color: "#ffffff" }} />
                </button>
            </div>
        </div>
    );
}

export default Part1;
