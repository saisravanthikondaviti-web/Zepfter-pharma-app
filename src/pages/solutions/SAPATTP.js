import React from "react";
import SolutionTemplate from "../../components/SolutionTemplate";
import attpImg from "../../assets/attp.jpg"; // 👈 add image

const SAPATTP = () => {
  return (
    <SolutionTemplate
      title="SAP Advanced Track & Trace for Pharmaceuticals (ATTP)"
      description="Enable end-to-end pharmaceutical product traceability, serialization, and compliance with global regulations using SAP ATTP solutions."

      image={attpImg}

      detailedContent={[
        "SAP ATTP (Advanced Track & Trace for Pharmaceuticals) ensures complete visibility and traceability of pharmaceutical products across the supply chain.",
        "Our solutions support serialization, aggregation, and reporting processes required for global regulatory compliance such as DSCSA, EU FMD, and other regional mandates.",
        "With seamless integration into SAP landscapes and enterprise systems, organizations can monitor product movement in real-time and prevent counterfeit risks effectively.",
      ]}

      features={[
        "End-to-end serialization and aggregation",
        "Global compliance support (DSCSA, EU FMD)",
        "Real-time product tracking and visibility",
        "Integration with SAP S/4HANA and ERP systems",
        "Regulatory reporting and audit support",
        "Secure data exchange across supply chain partners",
      ]}

      benefits={[
        "Enhanced patient safety and product authenticity",
        "Full compliance with global regulatory requirements",
        "Reduction in counterfeit and diversion risks",
        "Improved supply chain transparency",
        "Efficient recall and traceability processes",
      ]}

      useCases={[
        "Pharmaceutical manufacturing and packaging",
        "Supply chain serialization and aggregation",
        "Regulatory compliance reporting (DSCSA, EU FMD)",
        "Anti-counterfeiting and product authentication",
        "Global distribution tracking and monitoring",
      ]}
    />
  );
};

export default SAPATTP;