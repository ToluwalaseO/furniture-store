import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import "./part1.css"

const Part1 = () => {
    return (
        <div
            className="part1"
            style={{
                backgroundImage: 'url(/room.png)', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="content">
                <h1>Discovering The Best</h1>
                <h2>Furniture For Your Home</h2>
                <p>
                    Our practice is designing complete environments,
                    exceptional buildings,
                </p>
                <p className = "special-p">
                    communities and places in special situations,
                    here a unique history.
                </p>
                <div className="dc">
                    <p className="ner-p">100% Free</p>
                    <p className="ner-p">Design Consultations</p>
                </div>
                <button className="arrow">
                    <FontAwesomeIcon icon={faArrowDown} style={{ color: "#ffffff" }} />
                </button>
            </div>
        </div>
    );
}

export default Part1;
