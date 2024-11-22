import React from "react";
import { NavLink } from "react-router-dom";
import vinylRecord from "../../assets/icons/vinyl-record.png";
import "./Header.css";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/music"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Music
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/add-musician"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Add
                        </NavLink>
                    </li>
                </ul>
                <div>
                    <a href="/">
                        <img className="main-logo" src={vinylRecord} alt="" />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
