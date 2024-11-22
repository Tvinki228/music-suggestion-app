import React from "react";
import { NavLink } from "react-router-dom";
import bgLogo from "../../assets/home-logo.webp";
import "./Home.css";

function Home() {
    return (
        <div>
            <h1>
                Welcome to the <span>Music</span> Suggestion App
            </h1>
            <div>
                <img className="home-image" src={bgLogo} alt="home-image" />
            </div>
            <p className="home-text">
                Explore some <NavLink to="/music">artists!</NavLink>
            </p>
        </div>
    );
}

export default Home;
