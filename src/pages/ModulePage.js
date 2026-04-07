import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./ModulePage.css";

const ModulePage = () => {
  const { state } = useLocation();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showForm, setShowForm] = useState(false);

  if (!state) return <h2>No Data Found</h2>;

  return (
    <div className="hero-container">
      <div className="hero-wrapper">

        {/* LEFT */}
        <div className="hero-contenttype">
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

          <button
            className="enroll-btn"
            onClick={() => setShowForm(true)}
          >
            Enroll Now
          </button>
          {showForm && (
            <div className="popup-overlay" onClick={() => setShowForm(false)}>

              <div className="popup-form" onClick={(e) => e.stopPropagation()}>

                {/* Close Button */}
                <span className="close-icon" onClick={() => setShowForm(false)}>
                  ✕
                </span>

                <h2>Enroll Now</h2>
                <p className="popup-subtitle">{state.title}</p>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();

                    const name = e.target[0].value;
                    const email = e.target[1].value;
                    const phone = e.target[2].value;

                    try {
                      await addDoc(collection(db, "enrollments"), {
                        name: name,
                        email: email,
                        phone: phone,
                        course: state.title,
                        createdAt: new Date()
                      });

                      alert("Enrollment Successful 🎉");
                      setShowForm(false);
                    } catch (error) {
                      console.error(error);
                      alert("Something went wrong ❌");
                    }
                  }}
                >
                  <input type="text" placeholder="Full Name" required />
                  <input type="email" placeholder="Email Address" required />
                  <input type="tel" placeholder="Phone Number" required />

                  <button type="submit">Submit</button>
                </form>
              </div>

            </div>
          )}

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