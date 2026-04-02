import React from "react";
import styles from "../pages/solutions/SolutionPage.module.css";

const SolutionTemplate = ({
  title,
  description,
  features = [],
  benefits = [],
  image,
  detailedContent = [],
  useCases = [],
}) => {
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
          <button className={styles.ctaBtn}>Request Demo</button>
        </div>

      </div>
    </div>
  );
};

export default SolutionTemplate;