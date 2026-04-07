import React, { useState } from "react";
import styles from "../pages/solutions/SolutionPage.module.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const SolutionTemplate = ({
  title,
  description,
  features = [],
  benefits = [],
  image,
  detailedContent = [],
  useCases = [],
}) => {

  // ✅ State for popup
  const [showDemoForm, setShowDemoForm] = useState(false);

  return (
    <div className={styles.wrapper}>

      {/* 🔥 HERO SECTION */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{description}</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className={styles.container}>

        {/* TOP SECTION */}
        <div className={styles.top}>

          {/* IMAGE */}
          {image && (
            <div className={styles.image}>
              <img src={image} alt={title} />
            </div>
          )}

          {/* TEXT */}
          <div className={styles.text}>
            {detailedContent.map((para, index) => (
              <p key={index} className={styles.detailText}>
                {para}
              </p>
            ))}
          </div>

        </div>

        {/* 🔥 CARDS */}
        <div className={styles.bottom}>

          <div className={styles.card}>
            <h3>Key Features</h3>
            <ul>
              {features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Benefits</h3>
            <ul>
              {benefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Use Cases</h3>
            <ul>
              {useCases.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div className={styles.ctaCenter}>
          <button
            className={styles.ctaBtn}
            onClick={() => setShowDemoForm(true)}
          >
            Request Demo
          </button>
        </div>

      </div>

      {/* 🔥 POPUP FORM */}
      {showDemoForm && (
        <div
          className="popup-overlay"
          onClick={() => setShowDemoForm(false)}
        >
          <div
            className="popup-form"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <span
              className="close-icon"
              onClick={() => setShowDemoForm(false)}
            >
              ✕
            </span>

            <h2>Request Demo</h2>
            <p className="popup-subtitle">
              Our team will contact you soon
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const name = e.target[0].value;
                const email = e.target[1].value;
                const phone = e.target[2].value;

                try {
                  await addDoc(collection(db, "demoRequests"), {
                    name,
                    email,
                    phone,
                    solution: title,
                    createdAt: new Date()
                  });

                  alert(
                    "After submitting the form, you'll receive a call from our executive soon!! 📞"
                  );

                  setShowDemoForm(false);
                } catch (error) {
                  console.error(error);
                  alert("Failed to submit request ❌");
                }
              }}
            >
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />

              <button type="submit">Submit Request</button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};

export default SolutionTemplate;