import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import profileIcon from "../assets/icon.png";
import "./Navbar.css";
import SolutionsModal from "./SolutionsModal";

function Navbar() {
    const [openModal, setOpenModal] = useState(false);
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem("user"));
    });
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();

    // ✅ Listen for login/logout changes
    useEffect(() => {
        const syncUser = () => {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            setUser(storedUser);
        };

        window.addEventListener("authChanged", syncUser);

        return () => {
            window.removeEventListener("authChanged", syncUser);
        };
    }, []);

    // ✅ Protect navigation
    const handleNavClick = (e, path) => {
        if (!user && path !== "/") {
            e.preventDefault();
            navigate("/auth");
        }
    };

    // ✅ Logout
    const handleLogout = () => {
        localStorage.removeItem("user");
        window.dispatchEvent(new Event("authChanged"));
        navigate("/auth");
    };

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

                    <li>
                        <Link
                            to="/whyzepfter"
                            className="nav-link-btn"
                            onClick={(e) => handleNavClick(e, "/whyzepfter")}
                        >
                            Why Zepfter
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/services"
                            onClick={(e) => handleNavClick(e, "/services")}
                        >
                            Services
                        </Link>
                    </li>

                    <li>
                        <button
                            className="nav-link-btn"
                            onClick={() => {
                                if (!user) return navigate("/auth");
                                setOpenModal(true);
                            }}
                        >
                            Solutions
                        </button>
                    </li>

                    <li>
                        <Link
                            to="/courses"
                            onClick={(e) => handleNavClick(e, "/courses")}
                        >
                            Courses
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/contact"
                            onClick={(e) => handleNavClick(e, "/contact")}
                        >
                            Contact
                        </Link>
                    </li>

                </ul>

                {/* Right Section */}
                <div className="nav-btn">

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
                                    <button onClick={handleLogout}>
                                        Logout
                                    </button>
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