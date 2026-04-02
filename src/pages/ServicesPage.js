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
      fullDesc: "Gain in-depth knowledge of pharmaceutical standards like GMP, QA, and QC. Learn regulatory guidelines followed by global pharma companies. Work on real-world case studies and documentation. Build a strong foundation for pharma industry careers.",
     image: "https://images.unsplash.com/photo-1579154204601-01588f351e67"
    },
    {
      title: "💻 IT Skills",
      short: "Python, AI/ML, Data Science, Web Development",
      fullDesc: "Develop strong programming skills in Python and modern technologies. Learn AI/ML concepts with practical implementations. Build responsive web applications using real projects. Enhance your technical profile for IT and pharma tech roles.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
    },
    {
      title: "🧪 LIMS",
      short: "Sample tracking, lab data, report generation",
      fullDesc: "Understand Laboratory Information Management Systems (LIMS). Learn how to track samples and manage lab workflows efficiently. Automate report generation and reduce manual errors. Improve lab productivity using digital systems.",
      image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660"
    },
    {
      title: "📊 Compliance",
      short: "Audit, validation, dashboards",
      fullDesc: "Learn regulatory compliance processes followed in pharma industries. Understand audit procedures and validation techniques. Build dashboards for tracking compliance metrics. Ensure quality and safety standards in operations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      title: "🧾 DMS",
      short: "SOP management, secure storage",
      fullDesc: "Manage pharmaceutical documents using Document Management Systems. Learn SOP handling, version control, and approvals. Ensure secure storage and easy retrieval of files. Maintain compliance with regulatory documentation standards.",
      image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc"
    },
    {
      title: "📈 Career Growth",
      short: "Skill tracking, progress dashboards",
      fullDesc: "Track your skills and career development in real-time. Get insights through performance dashboards. Identify strengths and areas of improvement. Plan your growth path effectively with structured learning.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72"
    },
    {
      title: "👥 Role System",
      short: "Admin, Trainer, Student, Analyst access",
      fullDesc: "Understand role-based access systems in organizations. Assign permissions based on user roles. Manage workflows efficiently for different users. Ensure data security and controlled access.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c"
    },
    {
      title: "🧠 Smart Ecosystem",
      short: "Learn + Apply + Track in one system",
      fullDesc: "Experience an integrated learning and working platform. Apply your knowledge through real-time projects. Track your performance and progress continuously. Build industry-ready skills in one ecosystem.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    }
  ];

  return (
    <div className="services-page">

      <h1>🧬 Our Services</h1>

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