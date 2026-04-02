import React from "react";
import SolutionTemplate from "../../components/SolutionTemplate";
import cdsImg from "../../assets/cds.png"; // 👈 add image

const CDS = () => {
  return (
    <SolutionTemplate
      title="Chromatography Data Systems (CDS)"
      description="Manage, process, and analyze chromatography data with secure, compliant, and high-performance CDS solutions tailored for modern laboratories."

      image={cdsImg}

      detailedContent={[
        "Chromatography Data Systems (CDS) play a critical role in laboratory operations by enabling precise data acquisition, processing, and reporting from chromatography instruments.",
        "Our CDS solutions ensure seamless integration with laboratory instruments, providing a centralized platform for data management and analysis.",
        "With built-in compliance features aligned with regulatory standards such as FDA 21 CFR Part 11 and GMP, organizations can maintain data integrity and audit readiness at all times.",
      ]}

      features={[
        "Seamless instrument integration (HPLC, GC, UHPLC)",
        "Automated data acquisition and processing",
        "Centralized and secure data storage",
        "Electronic signatures and audit trails",
        "Regulatory compliance (FDA 21 CFR Part 11, GMP)",
        "Advanced reporting and analytics tools",
      ]}

      benefits={[
        "High accuracy and reliability in data analysis",
        "Improved laboratory efficiency and throughput",
        "Enhanced compliance and audit readiness",
        "Reduction in manual data handling errors",
        "Secure and traceable data management",
      ]}

      useCases={[
        "Pharmaceutical quality control laboratories",
        "Biotech and life sciences research",
        "Food and beverage testing laboratories",
        "Environmental analysis and monitoring",
        "Clinical research and diagnostics",
      ]}
    />
  );
};

export default CDS;