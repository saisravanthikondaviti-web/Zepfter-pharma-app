import React from "react";
import "./WhyZepfter.css";

function WhyZepfter() {
  return (
    <div className="why-page">

      {/* HEADER */}
      <section className="why-header">
        <h1>🧬 Why Zepfter?</h1>
        <p>
          Zepfter is a next-generation Pharmaceutical Training, Management, and Informatics Platform
          designed to bridge the gap between life sciences and technology.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="why-section grid-2">
        <div className="card">
          <h2>🎯 Our Mission</h2>
          <p>
            To empower students, professionals, and organizations with industry-relevant
            pharmaceutical and IT skills.
          </p>
        </div>

        <div className="card">
          <h2>🌍 Our Vision</h2>
          <p>
            To become a global digital platform transforming pharmaceutical education
            and compliance systems.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="why-section">
        <h2>💡 What Makes Zepfter Unique?</h2>

        <div className="card-grid">

          <div className="card">
            <h3>🧪 Pharma Skills</h3>
            <p>GMP, QA, QC, Regulatory Affairs, LIMS</p>
          </div>

          <div className="card">
            <h3>💻 IT Skills</h3>
            <p>Python, AI/ML, Data Science, Web Development</p>
          </div>

          <div className="card">
            <h3>🎓 Clinical Learning</h3>
            <p>Clinical Research, Trials, Medical Coding</p>
          </div>

          <div className="card">
            <h3>📊 Compliance</h3>
            <p>GMP, GLP, GDP with real-time tracking</p>
          </div>

          <div className="card">
            <h3>🧾 Document System</h3>
            <p>SOPs, reports, certifications</p>
          </div>

          <div className="card">
            <h3>🧬 Mini LIMS</h3>
            <p>Lab data & analytical reports</p>
          </div>

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="why-section center">
        <h2>🏗️ Our Core Philosophy</h2>
        <p className="highlight">“Learn. Apply. Comply. Grow.”</p>
      </section>

      {/* TARGET USERS */}
      <section className="why-section">
        <h2>🚀 Who Is Zepfter For?</h2>
        <ul>
          <li>🎓 Students (Pharma, Life Sciences, IT)</li>
          <li>👩‍🔬 Professionals & Analysts</li>
          <li>🏭 Pharma Companies</li>
          <li>📊 Researchers</li>
        </ul>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-section">
        <h2>🔐 Why Choose Zepfter?</h2>
        <ul className="check-list">
          <li>All-in-one pharma + IT platform</li>
          <li>Real-world skill-based learning</li>
          <li>Industry compliance integration</li>
          <li>Hands-on lab modules</li>
          <li>Career-focused approach</li>
        </ul>
      </section>

    </div>
  );
}

export default WhyZepfter;