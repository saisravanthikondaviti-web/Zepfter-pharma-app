import React, { useState } from "react";
import "./ServicesPage.css";
import ServiceModal from "../components/ServiceModal";

function ServicesPage() {

  const [selectedService, setSelectedService] = useState(null);

  // ✅ MUST BE INSIDE FUNCTION
  const services = [
  {
    title: "🎓 Pharma Training",
    short: "GMP, QA/QC, Regulatory Affairs, Clinical Research",
    fullDesc:
      "Gain in-depth knowledge of pharmaceutical standards and industry practices. Learn how global pharma companies operate and build a strong foundation for a successful career.",
    points: [
      "Understand GMP, QA, and QC processes",
      "Work on real-world pharma case studies",
      "Learn regulatory guidelines (FDA, WHO)",
      "Hands-on documentation & validation"
    ],
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67"
  },

  {
    title: "💻 IT Skills",
    short: "Python, AI/ML, Data Science, Web Development",
    fullDesc:
      "Build strong technical skills required in modern pharma and IT industries. Learn by doing real-world projects and practical implementations.",
    points: [
      "Python programming from basics to advanced",
      "AI/ML concepts with real use cases",
      "Build responsive web applications",
      "Work on live industry-level projects"
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
  },

  {
    title: "🧪 LIMS",
    short: "Sample tracking, lab data, report generation",
    fullDesc:
      "Master Laboratory Information Management Systems used in real labs to improve efficiency and reduce manual errors.",
    points: [
      "Track and manage lab samples digitally",
      "Automate report generation",
      "Understand lab workflows & data handling",
      "Improve productivity with digital systems"
    ],
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660"
  },

  {
    title: "📊 Compliance",
    short: "Audit, validation, dashboards",
    fullDesc:
      "Learn how pharmaceutical companies maintain compliance and quality standards through structured processes.",
    points: [
      "Understand audit procedures",
      "Learn validation techniques",
      "Build compliance dashboards",
      "Ensure regulatory standards are met"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },

  {
    title: "🧾 DMS",
    short: "SOP management, secure storage",
    fullDesc:
      "Manage pharmaceutical documents efficiently with proper version control and compliance standards.",
    points: [
      "Handle SOPs and documentation workflows",
      "Version control and approvals",
      "Secure storage & easy retrieval",
      "Compliance-ready document systems"
    ],
    image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc"
  },

  {
    title: "📈 Career Growth",
    short: "Skill tracking, progress dashboards",
    fullDesc:
      "Monitor your progress and continuously improve with structured learning and performance insights.",
    points: [
      "Track skills in real-time",
      "Visual dashboards for performance",
      "Identify strengths & weaknesses",
      "Plan structured career growth"
    ],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72"
  },

  {
    title: "👥 Role System",
    short: "Admin, Trainer, Student, Analyst access",
    fullDesc:
      "Implement role-based systems to manage users and workflows efficiently in organizations.",
    points: [
      "Role-based access control",
      "Assign permissions securely",
      "Manage multi-user workflows",
      "Ensure data security & control"
    ],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c"
  },

  {
    title: "🧠 Smart Ecosystem",
    short: "Learn + Apply + Track in one system",
    fullDesc:
      "Experience a unified platform that combines learning, application, and performance tracking.",
    points: [
      "Learn with structured modules",
      "Apply knowledge in real projects",
      "Track performance continuously",
      "All-in-one integrated system"
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  }
];

  return (
    <div className="services-page">

      <h1>
        Our <span>Services</span>
      </h1>

      <p className="intro">
        At <strong>Zepfter</strong>, we combine pharmaceutical expertise,
        digital learning, and intelligent systems into one powerful platform.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setSelectedService(service)}
          >
            <h2>{service.title}</h2>
            <p>{service.short}</p>
          </div>
        ))}
      </div>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

    </div>
  );
}

export default ServicesPage;