import React, { useState } from "react";
import pharmaData from "../data/pharmaData";
import medicalClinicalData from "../data/medicalClinicalData";
import itCoursesData from "../data/itData";
// import pharmaImg from "../assets/pharma.png";
// import medicalImg from "../assets/medical.png";
// import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Courses.css";

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeModule, setActiveModule] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const modules = [pharmaData, medicalClinicalData, itCoursesData];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="courses-container">

      {/* COURSE CARDS */}
      {modules.map((module, i) => (
        <div className="course-card" key={i}>

          {/* IMAGE */}
          <div className="course-image">
            <img
              src={
                module.image ||
                "https://images5.alphacoders.com/135/1351189.png"
              }
              alt={module.name}
            />
          </div>

          {/* CONTENT */}
          <div className="course-content">
            <h2>{module.name}</h2>

            <p className="category">
              Category: {module.category}
            </p>

            {/* ✅ DYNAMIC DESCRIPTION */}
            <p className="description">
              {module.description}
            </p>

            <button
              className="explore-btn"
              onClick={() => {
                setShowModal(true);
                setActiveModule(module);
                setActiveIndex(null);
              }}
            >
              Explore Now
            </button>
          </div>
        </div>
      ))}

      {/* MODAL */}
      {showModal && activeModule && (
        <div className="modal-overlay">
          <div className="modal-box">

            {/* CLOSE */}
            <span
              className="close-btn"
              onClick={() => {
                setShowModal(false);
                setActiveIndex(null);
              }}
            >
              ✕
            </span>

            {/* ✅ DYNAMIC TITLE */}
            <h2 className="modal-title">
              {activeModule.name}
            </h2>

            {/* SUBCATEGORY LIST */}
            <div className="grid">
              {activeModule.subcategories.map((item, index) => (
                <div key={index}>

                  {/* TITLE */}
                  <div
                    className={`grid-card ${activeIndex === index ? "active" : ""
                      }`}
                  >
                    {/* LEFT SIDE */}
                    <div
                      style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}
                      onClick={() => handleClick(index)}   // 👈 expand description
                    >
                      <div className="icon">📘</div>
                      <h4>{item.title}</h4>
                    </div>

                    {/* RIGHT SIDE ARROW */}
                    <div
                      className="arrow"
                      onClick={() =>
                        navigate("/module", {
                          state: item.modules?.[0]   // 👈 FIRST MODULE ONLY
                        })
                      }
                    >
                      ➡️
                    </div>
                  </div>
                  {/* DETAILS */}
                  {activeIndex === index && (
                    <div className="desc-box">
                      <p>{item.description || item.desc}</p>

                      {item.duration && (
                        <small>
                          Duration: {item.duration}
                        </small>
                      )}
                    </div>
                  )}

                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Courses;