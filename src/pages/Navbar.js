import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="main-menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/user-form">User Form</Link>
                </li>
                <li>
                    <Link to="/user-list">User List</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;