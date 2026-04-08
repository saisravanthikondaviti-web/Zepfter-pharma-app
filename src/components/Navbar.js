import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import profileIcon from "../assets/icon.png";
import "./Navbar.css";
import SolutionsModal from "./SolutionsModal";

function Navbar() {
    const [openModal, setOpenModal] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user"));
    });

    const navigate = useNavigate();

    useEffect(() => {
        const syncUser = () => {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            setUser(storedUser);
        };

        window.addEventListener("authChanged", syncUser);
        return () => window.removeEventListener("authChanged", syncUser);
    }, []);

    const handleNavClick = (e, path) => {
        if (!user && path !== "/") {
            e.preventDefault();
            navigate("/auth");
        }
        setMenuOpen(false); // close menu on click
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.dispatchEvent(new Event("authChanged"));
        setMenuOpen(false);
        navigate("/auth");
    };

    return (
        <>
            <nav className="navbar">

                {/* Logo */}
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo-img" />
                    </Link>
                </div>

                {/* Hamburger */}
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>

                {/* Menu */}
                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

                    <li>
                        <Link to="/whyzepfter" onClick={(e) => handleNavClick(e, "/whyzepfter")}>
                            Why Zepfter
                        </Link>
                    </li>

                    <li>
                        <Link to="/services" onClick={(e) => handleNavClick(e, "/services")}>
                            Services
                        </Link>
                    </li>

                    <li>
                        <button
                            className="nav-link-btn"
                            onClick={() => {
                                if (!user) return navigate("/auth");
                                setOpenModal(true);
                                setMenuOpen(false);
                            }}
                        >
                            Solutions
                        </button>
                    </li>

                    <li>
                        <Link to="/courses" onClick={(e) => handleNavClick(e, "/courses")}>
                            Courses
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact" onClick={(e) => handleNavClick(e, "/contact")}>
                            Contact
                        </Link>
                    </li>

                    {/* 👇 Mobile Profile/Login Section */}
                    <li className="mobile-auth">
                        {!user ? (
                            <button
                                onClick={() => navigate("/auth")}
                                style={{
                                    backgroundColor: "#14b8a6",
                                    color: "#fff",
                                    padding: "10px 20px",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer"
                                }}
                            >
                                Get Started
                            </button>
                        ) : (
                            <div className="mobile-profile">
                                <div className="profile-info">
                                    <img src={profileIcon} alt="Profile" />
                                    <p>{user?.email}</p>
                                </div>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </li>

                </ul>

                {/* Desktop Right Section */}
                <div className="nav-btn desktop-only">
                    {!user ? (
                        <Link to="/auth">
                            <button>Get Started</button>
                        </Link>
                    ) : (
                        <div className="profile-container">
                            <div
                                className="profile-icon"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                <img src={profileIcon} alt="Profile" />
                            </div>

                            {dropdownOpen && (
                                <div className="dropdown">
                                    <p className="user-email">{user?.email}</p>
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </nav>

            <SolutionsModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    );
}

export default Navbar;