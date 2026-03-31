import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand Section */}
                <div className="footer-brand">
                    <Link to="/">
                        <img src={logo} alt="Zepfter Logo" className="footer-logo" />
                    </Link>
                    <p>
                        Bridging healthcare and technology for a smarter tomorrow. We provide cutting-edge solutions for modern challenges.
                    </p>
                    <div className="social-icons">
                        <a href="#" className="social-icon">IN</a>
                        <a href="#" className="social-icon">FB</a>
                        <a href="#" className="social-icon">TW</a>
                        <a href="#" className="social-icon">IG</a>
                    </div>
                </div>

                {/* Links Section */}
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Why Zepfter</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/solutions">Solutions</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Email: info@zepfter.com</li>
                        <li>Phone: +1 234 567 8900</li>
                        <li>Location: 123 Health Tech Ave, Innovation City, CA 90210</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Zepfter. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
