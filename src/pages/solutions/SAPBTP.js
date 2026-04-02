import React from "react";
import SolutionTemplate from "../../components/SolutionTemplate";
import btpImg from "../../assets/btp.jfif"; // 👈 add image

const SAPBTP = () => {
  return (
    <SolutionTemplate
      title="SAP Business Technology Platform (BTP)"
      description="Accelerate innovation with SAP BTP by integrating data, building applications, and leveraging advanced analytics and AI capabilities on a unified cloud platform."

      image={btpImg}

      detailedContent={[
        "SAP Business Technology Platform (BTP) is a unified platform that enables organizations to integrate data, develop applications, and extend SAP and non-SAP systems seamlessly.",
        "Our SAP BTP solutions empower businesses to build cloud-native applications, automate workflows, and gain real-time insights using advanced analytics and AI.",
        "With strong integration capabilities and scalable architecture, SAP BTP helps organizations innovate faster while maintaining a clean core strategy.",
      ]}

      features={[
        "Cloud-native application development",
        "Seamless integration with SAP and non-SAP systems",
        "Advanced analytics and real-time insights",
        "AI and machine learning capabilities",
        "API management and microservices architecture",
        "Extension of SAP S/4HANA and enterprise systems",
      ]}

      benefits={[
        "Faster innovation and time-to-market",
        "Scalable and flexible cloud architecture",
        "Improved system integration and data flow",
        "Enhanced decision-making with analytics",
        "Supports clean core and future-ready systems",
      ]}

      useCases={[
        "Extending SAP S/4HANA applications",
        "Building custom enterprise applications",
        "Integrating legacy and cloud systems",
        "Real-time business analytics and dashboards",
        "Automating workflows and business processes",
      ]}
    />
  );
};

export default SAPBTP;