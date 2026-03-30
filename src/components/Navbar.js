import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            {/* Logo */}
            <div className="logo">
                <Link to="/">
                    {/* We assume the provided logo image will be saved as logo.png in the public folder */}
                    <img src="/logo.png" alt="Zepfter Logo" className="logo-img" />
                </Link>
            </div>

            {/* Menu */}
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/solutions">Solutions</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            {/* CTA Button */}
            <div className="nav-btn">
                <Link to="/auth">
                    <button>Get Started</button>
                </Link>
            </div>

        </nav>
    );
}

export default Navbar;