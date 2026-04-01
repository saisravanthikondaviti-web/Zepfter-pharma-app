import React from "react";
import "./WhyZepfter.css";
import pharmaImg from "../assets/pharma.jpg";
import labImg from "../assets/lab.jpg";
import dataImg from "../assets/data.jpg";

function WhyZepfter() {
    return (
        <div className="why-page">

            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-overlay">
                    <h1>
                        Why <span className="brand">Zepfter</span>?
                    </h1>
                    <p>
                        Zepfter is a next-generation Pharmaceutical Training, Management, and Informatics Platform
                        designed to bridge the gap between life sciences and technology. It empowers individuals
                        and organizations with real-world skills, compliance knowledge, and digital expertise
                        required in modern pharmaceutical industries.
                    </p>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="why-section grid-2">
                <div className="card">
                    <h2>Our Mission</h2>
                    <p>
                        Equip pharma, life sciences, and IT professionals with industry-relevant, compliance-driven
                        training through interactive learning modules, real-time simulations, and hands-on experience
                        aligned with global pharmaceutical standards.
                    </p>
                </div>

                <div className="card">
                    <h2>Our Vision</h2>
                    <p>
                        To become a globally recognized digital ecosystem for pharmaceutical education and operations,
                        integrating advanced technologies such as LIMS, AI-driven analytics, and compliance automation
                        to transform how the industry learns and operates.
                    </p>
                </div>
            </section>

            {/* IMAGE + CONTENT */}
            <section className="image-section" style={{ backgroundColor: "#0d9488" }}>
                <img src={pharmaImg} alt="Pharma Training" />
                <div>
                    <h2 style={{ color: "#e2e8f0" }}>Integrated Pharma Learning</h2>
                    <p>
                        Zepfter combines pharmaceutical sciences with modern digital tools, enabling users to
                        understand real-world workflows such as quality control, regulatory compliance, and
                        laboratory data management. The platform bridges theoretical learning with practical
                        application, ensuring users are industry-ready from day one.
                    </p>
                </div>
            </section>

            {/* FEATURES */}
            <section className="why-section">
                <h2>What Makes Zepfter Unique</h2>

                <div className="card-grid">
                    <div className="card">
                        <h3>Pharmaceutical Skills</h3>
                        <p>
                            Learn core pharmaceutical concepts including GMP, GLP, QA/QC, and regulatory frameworks
                            with practical case studies and real-world scenarios.
                        </p>
                    </div>

                    <div className="card">
                        <h3>Digital & IT Skills</h3>
                        <p>
                            Gain expertise in Python, AI/ML, and data science tailored for pharmaceutical applications
                            such as drug discovery, analytics, and automation.
                        </p>
                    </div>

                    <div className="card">
                        <h3>Clinical Systems</h3>
                        <p>
                            Understand clinical research workflows, trial management systems, and medical coding
                            standards used in healthcare and CRO environments.
                        </p>
                    </div>

                    <div className="card">
                        <h3>Compliance Systems</h3>
                        <p>
                            Master compliance systems including CAPA management, audit trails, deviation handling,
                            and risk assessment aligned with global regulatory bodies.
                        </p>
                    </div>

                    <div className="card">
                        <h3>Document Management</h3>
                        <p>
                            Access centralized document systems for SOPs, validation reports, and certifications
                            with version control and audit-ready documentation.
                        </p>
                    </div>

                    <div className="card">
                        <h3>Mini LIMS</h3>
                        <p>
                            Work with a simulated Laboratory Information Management System to manage samples,
                            test records, and analytical workflows in a controlled environment.
                        </p>
                    </div>
                </div>
            </section>

            {/* IMAGE SECTION */}
            <section className="image-section reverse" style={{ backgroundColor: "#0d9488" }}>
                <div>
                    <h2 style={{ color: "#e2e8f0" }}>Data-Driven Pharma Systems</h2>
                    <p>
                        Modern pharmaceutical industries rely heavily on data-driven decision-making. Zepfter
                        introduces users to analytics, automation, and intelligent systems that optimize
                        research, manufacturing, and quality processes.
                    </p>
                </div>
                <img src={dataImg} alt="Data Systems" />
            </section>

            <section className="why-section" >
                <h2>Industry-Relevant Training Approach</h2>
                <p>
                    Zepfter follows a structured learning approach combining theoretical knowledge,
                    practical simulations, and real-world application. Users progress through guided
                    modules, perform simulated lab tasks, and apply their knowledge in realistic
                    pharmaceutical scenarios.
                </p>

                <div className="feature-list">
                    <div className="feature-item">✔ Structured learning paths aligned with industry roles</div>
                    <div className="feature-item">✔ Hands-on simulations for lab and compliance processes</div>
                    <div className="feature-item">✔ Real-time progress tracking and skill assessment</div>
                    <div className="feature-item">✔ Exposure to industry tools and workflows</div>
                </div>
            </section>


            {/* PHILOSOPHY */}
            <section className="why-section center">
                <h2>Core Philosophy</h2>

                <div className="flow-line">
                    <div className="flow-box">Learn</div>
                    <div className="flow-box">Apply</div>
                    <div className="flow-box">Comply</div>
                    <div className="flow-box">Grow</div>
                </div>
            </section>

            {/* USERS */}
            <section className="why-section" style={{ backgroundColor: "#0d9488" }} >
                <h2 style={{ color: "#e2e8f0" }}>Who Is Zepfter For</h2>

                <div className="audience-grid">
                    <div className="audience-card">
                        🎓 Students
                        <p>Pharmaceutical Sciences, Life Sciences, and IT domains</p>
                    </div>

                    <div className="audience-card">
                        💼 Professionals
                        <p>Upskilling in pharma and healthcare technology</p>
                    </div>

                    <div className="audience-card">
                        🏢 Organizations
                        <p>Pharmaceutical companies and research organizations</p>
                    </div>

                    <div className="audience-card">
                        📊 Analysts & Researchers
                        <p>Clinical research associates and data professionals</p>
                    </div>
                </div>
            </section>

            <section className="image-section">
                <img src={labImg} alt="Laboratory" />
                <div>
                    <h2>Hands-on Laboratory Experience</h2>
                    <p>
                        Zepfter provides virtual laboratory simulations that replicate real pharmaceutical
                        environments. Users can practice sample handling, testing procedures, and data recording
                        without the need for physical lab infrastructure.
                    </p>
                </div>
            </section>

            <section className="why-section" style={{ backgroundColor: "#0d9488" }}>
                <h2 style={{ color: "#e2e8f0" }}>Career Opportunities with Zepfter</h2>

                <p className="section-desc">
                    Zepfter prepares users for a wide range of roles in the pharmaceutical and
                    healthcare industry by combining domain knowledge with technical expertise.
                </p>

                <div className="career-grid">
                    <div className="career-card">
                        🧪
                        <h3>QA / QC Analyst</h3>
                        <p>Quality control, testing, and assurance processes in pharma industries</p>
                    </div>

                    <div className="career-card">
                        📜
                        <h3>Regulatory Affairs</h3>
                        <p>Compliance, documentation, and global regulatory standards</p>
                    </div>

                    <div className="career-card">
                        🧬
                        <h3>Clinical Research</h3>
                        <p>Clinical trials, research workflows, and patient data systems</p>
                    </div>

                    <div className="career-card">
                        📊
                        <h3>Pharma Data Analyst</h3>
                        <p>Data analysis, AI/ML applications, and pharma insights</p>
                    </div>

                    <div className="career-card">
                        ⚙️
                        <h3>LIMS Specialist</h3>
                        <p>Laboratory systems, compliance tools, and data workflows</p>
                    </div>
                </div>
            </section>

            {/* FUTURE */}
            <section className="future-box">
                <h2>The Future</h2>
                <p>
                    Zepfter is continuously evolving with advancements in artificial intelligence,
                    virtual laboratory environments, and digital compliance systems. The platform aims
                    to integrate emerging technologies to create a fully immersive pharmaceutical
                    learning and management ecosystem.
                </p>
            </section>

        </div>
    );
}

export default WhyZepfter;