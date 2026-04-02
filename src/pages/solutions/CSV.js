import React from "react";
import SolutionTemplate from "../../components/SolutionTemplate";
import csvImg from "../../assets/csv.jpg"; // 👈 add image

const CSV = () => {
  return (
    <SolutionTemplate
      title="Computer System Validation (CSV)"
      description="Ensure your computerized systems meet regulatory standards with comprehensive, risk-based validation processes tailored for GxP environments."

      image={csvImg}

      detailedContent={[
        "Computer System Validation (CSV) is essential for ensuring that all computerized systems used in regulated environments operate reliably and in compliance with industry standards.",
        "Our CSV approach follows a risk-based methodology aligned with GAMP 5 guidelines, ensuring efficient validation without unnecessary overhead.",
        "We provide end-to-end validation support including documentation, testing, and audit readiness to help organizations maintain compliance and data integrity.",
      ]}

      features={[
        "Risk-based validation approach (GAMP 5 aligned)",
        "Validation lifecycle documentation (URS, IQ, OQ, PQ)",
        "System testing and verification",
        "Audit trails and compliance checks",
        "GxP, FDA 21 CFR Part 11 compliance",
        "Periodic review and revalidation support",
      ]}

      benefits={[
        "Ensures full regulatory compliance",
        "Reduces system and operational risks",
        "Maintains high data integrity and reliability",
        "Improves audit readiness and inspection outcomes",
        "Streamlines validation processes",
      ]}

      useCases={[
        "Pharmaceutical manufacturing systems",
        "Laboratory information systems (LIMS, CDS)",
        "Clinical trial management systems",
        "Quality management systems (QMS)",
        "Enterprise resource planning (ERP) systems in regulated environments",
      ]}
    />
  );
};

export default CSV;