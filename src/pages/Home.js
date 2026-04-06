import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

/* 🎯 HERO SLIDES */
const heroSlides = [
    {
        title: "Transform Your Career in Pharma + Technology",
        text: "Master pharmaceutical systems, compliance workflows, and digital tools.",
        image: "https://pharmamachinecn.com/wp-content/uploads/2025/07/pharmaceutical-bottle-filling-line.webp"
    },
    {
        title: "Learn Real Industry Systems",
        text: "Hands-on training with LIMS, QMS, and data-driven pharma tools.",
        image: "https://www.manufacturingtodayindia.com/cloud/2025/01/15/pharma-manufacturing.jpg"
    },
    {
        title: "Become Job-Ready",
        text: "Build practical skills that pharma companies actually demand.",
        image: "https://www.biolaxienzymes.com/wp-content/uploads/2024/10/Enzymes-in-the-Pharmaceutical-Industry-compressed.jpg"
    }
];

function Home() {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    /* 🔁 AUTO SLIDE */
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroSlides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home">

            {/* 🌟 HERO BACKGROUND CAROUSEL */}
            <section className="hero">

                {/* 🖼️ BACKGROUND SLIDES */}
                {heroSlides.map((slide, i) => (
                    <div
                        key={i}
                        className={`hero-bg ${i === index ? "active" : ""}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}

                {/* 🌑 OVERLAY CONTENT */}
                <div className="hero-content">
                    <h1>{heroSlides[index].title}</h1>
                    <p>{heroSlides[index].text}</p>

                    <div className="hero-buttons">
                        <button onClick={() => navigate("/auth")}>
                            Get Started
                        </button>
                        <button
                            className="outline"
                            onClick={() => navigate("/whyzepfter")}
                        >
                            View Platform
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div><h3>50+</h3><p>Courses</p></div>
                        <div><h3>10+</h3><p>Domains</p></div>
                        <div><h3>100%</h3><p>Practical</p></div>
                    </div>
                </div>

                {/* 🔘 DOTS */}
                <div className="hero-dots">
                    {heroSlides.map((_, i) => (
                        <span
                            key={i}
                            className={i === index ? "dot active" : "dot"}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>

            </section>


            {/* 🔥 TRUST STRIP */}
            <section className="trust">
                <p>Trusted Learning in Pharma Technology & Compliance Systems</p>
            </section>



            {/* 🚀 ABOUT / WHY ZEPFTER */}
            <section className="about">
                <div className="about-img">
                    <img
                        src="https://www.lifevisionchandigarh.com/storage/app/public/Blogs/ZqaMTZYjX3t68D0Qeif4mAcqnuP9E7L4wPGbF3Qa.jpeg"
                        alt="Pharma Lab"
                    />
                    <div className="about-badge">Industry Ready Training</div>
                </div>

                <div className="about-text">
                    <h2>
                        Transform Learning into <span>Real Industry Experience</span>
                    </h2>

                    <p className="about-subtext">
                        Most education stops at theory. Zepfter goes beyond — giving you
                        hands-on exposure to real pharmaceutical systems, workflows, and
                        compliance environments used by top companies.
                    </p>

                    <div className="about-features">
                        <div className="feature-card">
                            <h4>🧪 Real Systems</h4>
                            <p>Work with LIMS, QMS, and real pharma tools used in industry.</p>
                        </div>

                        <div className="feature-card">
                            <h4>📊 Practical Learning</h4>
                            <p>Scenario-based training with real workflows & case studies.</p>
                        </div>

                        <div className="feature-card">
                            <h4>🚀 Job Ready</h4>
                            <p>Build skills that directly match industry job requirements.</p>
                        </div>
                    </div>

                    <button
                        className="about-btn"
                        onClick={() => navigate("/auth")}
                    >
                        Explore Programs →
                    </button>
                </div>
            </section>

            <hr
                style={{
                    border: "none",
                    width: "700px",
                    margin: "20px auto",
                    height: "3px",
                    backgroundImage: "repeating-linear-gradient(to right, #14b8a6 0 10px, transparent 10px 20px)"
                }}
            />

            {/* 💡 MODULES */}
            <section className="modules">
                <h2>
                    Explore Our <span>Platform Modules</span>
                </h2>

                <p className="modules-subtext">
                    A complete ecosystem combining pharmaceutical expertise with cutting-edge technology.
                </p>

                <div className="module-grid">
                    <div className="module-card">
                        <div className="module-icon">🧪</div>
                        <h3>Pharma Training</h3>
                        <p>GMP, QA, validation & compliance workflows.</p>
                    </div>

                    <div className="module-card">
                        <div className="module-icon">💻</div>
                        <h3>IT Skills</h3>
                        <p>Data science, AI & digital pharma tools.</p>
                    </div>

                    <div className="module-card">
                        <div className="module-icon">📊</div>
                        <h3>Analytics</h3>
                        <p>Data-driven decision making in pharma.</p>
                    </div>

                    <div className="module-card">
                        <div className="module-icon">📁</div>
                        <h3>Document Systems</h3>
                        <p>SOPs, reports & audit-ready documentation.</p>
                    </div>
                </div>
            </section>

            {/* 📊 DATA */}
            <section className="data">
                <h2>
                    Our <span>Platform Impact</span>
                </h2>

                <p className="data-subtext">
                    Real results driven by practical learning and industry-focused training.
                </p>

                <div className="data-grid">
                    <div className="data-card">
                        <h1>5000+</h1>
                        <p>Learning Hours</p>
                    </div>

                    <div className="data-card">
                        <h1>100+</h1>
                        <p>Use Cases</p>
                    </div>

                    <div className="data-card">
                        <h1>95%</h1>
                        <p>Skill Improvement</p>
                    </div>

                    <div className="data-card">
                        <h1>24/7</h1>
                        <p>Access</p>
                    </div>
                </div>
            </section>

            {/* 🧬 FEATURES */}
            <section className="features">
                <div className="feature-left">
                    <img
                        src="https://anangpuria.com/wp-content/uploads/2022/06/top-pharmaceutical-companies-in-baddi.jpg"
                        alt="data"
                    />
                    <div className="feature-overlay">
                        Real Pharma Environment
                    </div>
                </div>

                <div className="feature-right">
                    <h2>
                        Experience <span>Real Industry Workflows</span>
                    </h2>

                    <p className="feature-subtext">
                        Gain hands-on exposure to systems and processes used in modern pharmaceutical and tech-driven environments.
                    </p>

                    <div className="feature-list">
                        <div className="feature-item">
                            <span>🧪</span>
                            <p>LIMS Simulation & Lab Systems</p>
                        </div>

                        <div className="feature-item">
                            <span>📋</span>
                            <p>Compliance & Audit Tracking</p>
                        </div>

                        <div className="feature-item">
                            <span>📊</span>
                            <p>Data Analytics Dashboards</p>
                        </div>

                        <div className="feature-item">
                            <span>⚙️</span>
                            <p>Real Workflow Training</p>
                        </div>
                    </div>
                </div>
            </section>


            <hr
                style={{
                    border: "none",
                    width: "700px",
                    margin: "20px auto",
                    height: "3px",
                    backgroundImage: "repeating-linear-gradient(to right, #14b8a6 0 10px, transparent 10px 20px)"
                }}
            />

            {/* 🔄 WORKFLOW */}
            <section className="workflow">
                <h2>
                    How <span>It Works</span>
                </h2>

                <p className="workflow-subtext">
                    A structured learning journey designed to take you from beginner to industry-ready professional.
                </p>

                <div className="workflow-grid">

                    <div className="step">
                        <div className="step-number">01</div>
                        <h3>Learn</h3>
                        <p>Understand core pharma concepts, compliance, and systems.</p>
                    </div>

                    <div className="step">
                        <div className="step-number">02</div>
                        <h3>Practice</h3>
                        <p>Work on simulations like LIMS, QMS, and real workflows.</p>
                    </div>

                    <div className="step">
                        <div className="step-number">03</div>
                        <h3>Apply</h3>
                        <p>Implement your skills in real-world case studies and projects.</p>
                    </div>

                    <div className="step">
                        <div className="step-number">04</div>
                        <h3>Grow</h3>
                        <p>Become job-ready with industry-level expertise and confidence.</p>
                    </div>

                </div>
            </section>

            {/* 🚀 CTA */}
            <section className="cta">
                <div className="cta-container">

                    <h2>
                        Ready to Become <span>Industry Ready?</span>
                    </h2>

                    <p className="cta-subtext">
                        Join thousands of learners building real-world pharma + tech skills
                        with hands-on training, live simulations, and industry workflows.
                    </p>

                    <div className="cta-buttons">
                        <button
                            className="primary-btn"
                            onClick={() => navigate("/auth")}
                        >
                            Start Learning →
                        </button>

                        <button
                            className="secondary-btn"
                            onClick={() => navigate("/courses")}
                        >
                            Explore Programs
                        </button>
                    </div>

                    <div className="cta-trust">
                        <span>✔ No prior experience needed</span>
                        <span>✔ Learn at your pace</span>
                        <span>✔ Industry-focused curriculum</span>
                    </div>

                </div>
            </section>

        </div>
    );
}

export default Home;