import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faMagnifyingGlass, faHeart, faStore, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const header = () => {
    return(
    <header className="header">
        <div className="logo">
        <img alt="Logo" width="70" height="40" src="/unnamed.png"/>

            <h1>DEWISH</h1>
            </div>
        <nav>
            <ul className ="bar">
                <li><b>What's New </b></li>
                <li>Wedding Registry</li>
                <li>Free Design Service</li>
                <li>The Personalization Shop</li>
            </ul>
            <ul className="iconss">
            <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
            <li><FontAwesomeIcon icon={faHeart} /></li>
            <li><FontAwesomeIcon icon={faStore} /></li>
            <li><FontAwesomeIcon icon={faUser} /></li>
            </ul>
        </nav>
    </header>
    )
}

export default header