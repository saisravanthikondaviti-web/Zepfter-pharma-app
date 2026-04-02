import React from "react";
import SolutionTemplate from "../../components/SolutionTemplate";
import rpaImg from "../../assets/rpa.jpg"; // 👈 add image

const RPA = () => {
  return (
    <SolutionTemplate
      title="Robotic Process Automation (RPA)"
      description="Automate repetitive and rule-based processes using intelligent bots to enhance efficiency, accuracy, and scalability across your organization."

      image={rpaImg}

      detailedContent={[
        "Robotic Process Automation (RPA) enables businesses to automate repetitive, time-consuming tasks using software bots that mimic human actions.",
        "Our RPA solutions integrate seamlessly with existing systems, allowing organizations to streamline workflows without disrupting operations.",
        "By automating routine processes, companies can reduce errors, improve productivity, and focus on higher-value strategic activities.",
      ]}

      features={[
        "End-to-end workflow automation",
        "Bot development and deployment",
        "Seamless integration with enterprise systems",
        "Scalable automation solutions",
        "Rule-based and intelligent automation",
        "Real-time monitoring and analytics",
      ]}

      benefits={[
        "Significant reduction in manual effort",
        "Increased operational efficiency and productivity",
        "Cost savings through automation",
        "Improved accuracy and reduced errors",
        "Faster process execution and turnaround time",
      ]}

      useCases={[
        "Invoice processing and financial operations",
        "Pharmaceutical data entry and compliance reporting",
        "HR onboarding and payroll automation",
        "Customer support automation",
        "Supply chain and inventory management",
      ]}
    />
  );
};

export default RPA;