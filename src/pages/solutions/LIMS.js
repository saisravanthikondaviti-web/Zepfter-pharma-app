import React from "react";
import SolutionTemplate from "../../components/SolutionTemplate";
import limsImg from "../../assets/lims.png"; // make sure image exists

const LIMS = () => {
  return (
    <SolutionTemplate
      title="LIMS & Master Data Management"
      
      description="Empower your laboratory with a robust Laboratory Information Management System (LIMS) designed to streamline workflows, ensure data accuracy, and maintain regulatory compliance across all operations."

      image={limsImg}
      imagePosition="left" // 👈 for left-side image layout

      detailedContent={[
        "Our LIMS solution enables seamless tracking of samples from collection to final reporting, ensuring complete visibility and traceability.",
        "With centralized master data management, organizations can maintain consistency across materials, instruments, methods, and specifications.",
        "The system integrates quality control processes, ensuring compliance with industry standards such as GMP, GLP, and FDA regulations.",
        "Real-time analytics and reporting tools help stakeholders make faster, data-driven decisions with confidence.",
        "Automation reduces manual interventions, minimizing errors and improving overall operational efficiency."
      ]}

      features={[
        "End-to-end sample lifecycle tracking",
        "Centralized master data repository",
        "Automated workflows and approvals",
        "Instrument integration support",
        "Audit trails and data security",
        "Custom dashboards and reporting",
        "Regulatory compliance (GMP, GLP, FDA)",
      ]}

      benefits={[
        "Enhanced data integrity and consistency",
        "Improved laboratory productivity",
        "Faster turnaround time for results",
        "Reduced operational costs",
        "Minimized human errors through automation",
        "Better compliance and audit readiness",
      ]}

      useCases={[
        "Pharmaceutical quality control labs",
        "Biotech research laboratories",
        "Clinical and diagnostic labs",
        "Food and beverage testing facilities",
        "Environmental testing laboratories",
      ]}
    />
  );
};

export default LIMS;