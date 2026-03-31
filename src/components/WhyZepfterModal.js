import React from "react";
import "./WhyZepfter.css";

function WhyZepfterModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="why-overlay" onClick={onClose}>
            <div className="why-modal" onClick={(e) => e.stopPropagation()}>

                <button className="close-btn" onClick={onClose}>✕</button>

                <h2>Why Zepfter?</h2>

                <p>
                    Zepfter is a next-generation Pharmaceutical Training and Informatics Platform
                    bridging life sciences with technology.
                </p>

                <h3>🎯 Mission</h3>
                <p>Empower learners with real-world pharma & IT skills.</p>

                <h3>🌍 Vision</h3>
                <p>Build a global digital pharma learning ecosystem.</p>

                <h3>💡 Key Features</h3>

                <ul>
                    <li>🧪 Pharma Skills (GMP, QA, QC)</li>
                    <li>💻 IT Skills (Python, AI, Web)</li>
                    <li>📊 Data & Analytics</li>
                    <li>🧾 Compliance Systems</li>
                    <li>🧬 Mini LIMS</li>
                </ul>

                <h3>🚀 Who is it for?</h3>
                <p>Students, Professionals, Pharma Companies, Researchers</p>

            </div>
        </div>
    );
}

export default WhyZepfterModal;