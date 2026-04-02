import React, { useState } from "react";
import pharmaData from "../data/pharmaData";
import medicalClinicalData from "../data/medicalClinicalData";
import itCoursesData from "../data/itData";
import pharmaImg from "../assets/pharma.png";
import medicalImg from "../assets/medical.png";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Courses.css";

const Courses = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const navigate = useNavigate();

  const modules = [pharmaData, medicalClinicalData, itCoursesData];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="courses-page">

      {/* 🔥 COURSE CARDS */}
      <div className="courses-grid">
        {modules.map((module, i) => (
          <div className="course-item" key={i}>

            {/* IMAGE */}
            <div className="course-item-image">
              <img
                src={
                  module.image ||
                  (i === 0
                    ? pharmaImg
                    : i === 1
                    ? medicalImg
                    : "https://images5.alphacoders.com/135/1351189.png")
                }
                alt={module.name}
              />
            </div>

            {/* CONTENT */}
            <div className="course-item-body">
              <h2 className="course-title">{module.name}</h2>

              <p className="course-category">
                {module.category}
              </p>

              <p className="course-description">
                {module.description}
              </p>

              <button
                className="course-btn"
                onClick={() => {
                  setOpenModal(true);
                  setSelectedModule(module);
                  setExpandedIndex(null);
                }}
              >
                Explore <FaArrowRight />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {openModal && selectedModule && (
        <div className="courses-modal-overlay">
          <div className="courses-modal">

            {/* CLOSE */}
            <span
              className="modal-close"
              onClick={() => {
                setOpenModal(false);
                setExpandedIndex(null);
              }}
            >
              ✕
            </span>

            <h2 className="modal-heading">{selectedModule.name}</h2>

            <div className="modules-list">
              {selectedModule.subcategories.map((item, index) => (
                <div key={index} className="module-item">

                  {/* HEADER */}
                  <div className="module-header">
                    <div
                      className="module-left"
                      onClick={() => toggleExpand(index)}
                    >
                      <span className="module-icon">📘</span>
                      <h4>{item.title}</h4>
                    </div>

                    <span
                      className="module-arrow"
                      onClick={() =>
                        navigate("/module", {
                          state: item.modules?.[0],
                        })
                      }
                    >
                      ➡️
                    </span>
                  </div>

                  {/* EXPAND */}
                  {expandedIndex === index && (
                    <div className="module-details">
                      <p>{item.description || item.desc}</p>

                      {item.duration && (
                        <small>Duration: {item.duration}</small>
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