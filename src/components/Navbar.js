import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";
import SolutionsModal from "./SolutionsModal";
import WhyZepfterModal from "./WhyZepfterModal"; // ✅ ADD THIS

function Navbar() {
    const [openModal, setOpenModal] = useState(false);
    const [openWhyModal, setOpenWhyModal] = useState(false); // ✅ ADD THIS

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

                    {/* 🔥 UPDATED ONLY THIS */}
                    <li>
                        <button
                            className="nav-link-btn"
                            onClick={() => setOpenWhyModal(true)}
                        >
                            Why Zepfter
                        </button>
                    </li>

                    <li><Link to="/services">Services</Link></li>

                    <li>
                        <button
                            className="nav-link-btn"
                            onClick={() => setOpenModal(true)}
                        >
                            Solutions
                        </button>
                    </li>

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

            {/* ✅ MODALS */}
            <SolutionsModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            />

            {/* ✅ NEW WHY MODAL */}
            <WhyZepfterModal
                isOpen={openWhyModal}
                onClose={() => setOpenWhyModal(false)}
            />
        </>
    );
}

export default Navbar;