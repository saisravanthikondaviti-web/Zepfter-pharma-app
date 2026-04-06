import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ModulePage.css";

const ModulePage = () => {
  const { state } = useLocation();
  const [selectedSkill, setSelectedSkill] = useState(null);

  if (!state) return <h2>No Data Found</h2>;

  return (
    <div className="hero-container">
      <div className="hero-wrapper">

        {/* LEFT */}
        <div className="hero-content">
          <h1>{state.title}</h1>

          <p className="hero-desc">{state.description}</p>

          <p className="hero-duration">
            <strong>Duration:</strong> {state.duration}
          </p>

          <div className="hero-skills">
            {state.skillsCovered?.map((skill, i) => (
              <span
                key={i}
                className={`skill-btn ${selectedSkill === skill ? "active" : ""}`}
                onClick={() => setSelectedSkill(skill)}
              >
                {skill}
              </span>
            ))}
          </div>

          {selectedSkill && (
            <div className="skill-content">
              <h4>{selectedSkill}</h4>
              <p>
                {state.skillDetails?.[selectedSkill] ||
                  `Learn more about ${selectedSkill}.`}
              </p>
            </div>
          )}

          <button className="enroll-btn">Enroll Now</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img
            src={state.image || "https://via.placeholder.com/400"}
            alt={state.title}
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

      </div>
    </div>
  );
};

export default ModulePage;