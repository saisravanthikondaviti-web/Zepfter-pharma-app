import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";
import SolutionsModal from "./SolutionsModal";

function Navbar() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <nav className="navbar">

                {/* Logo */}
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Zepfter Logo" className="logo-img" />
                    </Link>
                </div>

                {/* Menu */}
                <ul className="nav-links">

                    {/* ✅ UPDATED: Now routes to page */}
                    <li>
                        <Link to="/whyzepfter" className="nav-link-btn">
                            Why Zepfter
                        </Link>
                    </li>

                    <li>
                        <Link to="/services">Services</Link>
                    </li>

                    <li>
                        <button
                            className="nav-link-btn"
                            onClick={() => setOpenModal(true)}
                        >
                            Solutions
                        </button>
                    </li>

                    <li>
                        <Link to="/courses">Courses</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                {/* CTA Button */}
                <div className="nav-btn">
                    <Link to="/auth">
                        <button>Get Started</button>
                    </Link>
                </div>

            </nav>

            {/* ✅ Solutions Modal (unchanged) */}
            <SolutionsModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    );
}

export default Navbar;