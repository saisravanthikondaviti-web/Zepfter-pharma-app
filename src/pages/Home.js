import React, { useState, useEffect } from "react";
import "./Home.css";
import WhyZepfterModal from "../components/WhyZepfterModal";

function Home() {
    const [index, setIndex] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const slides = [
        {
            title: "Pharma + Technology",
            text: "Bridging Life Sciences with Digital Innovation"
        },
        {
            title: "Industry Ready Skills",
            text: "Learn GMP, QA, AI, Data Science & more"
        },
        {
            title: "Smart Pharma Platform",
            text: "Training, Compliance & Informatics in one place"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home">

            {/* 🌟 HERO CAROUSEL */}
            <section className="hero">
                <div className="hero-content">
                    <h1>{slides[index].title}</h1>
                    <p>{slides[index].text}</p>

                    <button onClick={() => setOpenModal(true)}>
                        Why Zepfter?
                    </button>
                </div>
            </section>

            {/* 💡 FEATURES PREVIEW */}
            <section className="features">
                <h2>What We Offer</h2>

                <div className="feature-grid">
                    <div className="card">🧪 Pharma Training</div>
                    <div className="card">💻 IT Skills</div>
                    <div className="card">📊 Data Analytics</div>
                    <div className="card">🧾 Compliance Systems</div>
                </div>
            </section>

            {/* 🚀 CTA */}
            <section className="cta">
                <h2>Start Your Pharma-Tech Journey</h2>
                <p>Learn. Apply. Comply. Grow.</p>
            </section>

            {/* MODAL */}
            <WhyZepfterModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            />

        </div>
    );
}

export default Home;