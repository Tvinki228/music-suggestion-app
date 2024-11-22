import React from "react";
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
                Explore some <a href="/music">artists!</a>{" "}
            </p>
        </div>
    );
}

export default Home;
