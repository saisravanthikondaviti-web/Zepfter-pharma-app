import React from "react";
import SolutionTemplate from "../../components/SolutionTemplate";
import scmImg from "../../assets/supplychain.jpg"; // 👈 add image

const SupplyChain = () => {
  return (
    <SolutionTemplate
      title="Supply Chain Management"
      description="Optimize sourcing, production, and distribution with intelligent, data-driven supply chain solutions that enhance visibility, efficiency, and resilience."

      image={scmImg}

      detailedContent={[
        "Modern supply chain management requires real-time visibility, predictive insights, and seamless coordination across suppliers, manufacturers, and distributors.",
        "Our solutions enable organizations to streamline operations, reduce bottlenecks, and ensure timely delivery through advanced analytics and automation.",
        "With integrated systems and intelligent forecasting, businesses can respond proactively to demand fluctuations and market changes.",
      ]}

      features={[
        "End-to-end inventory and warehouse management",
        "Demand forecasting and planning",
        "Supplier and vendor collaboration",
        "Real-time logistics and shipment tracking",
        "Supply chain analytics and reporting",
        "Integration with ERP and enterprise systems",
      ]}

      benefits={[
        "Reduced operational and logistics costs",
        "Improved delivery speed and efficiency",
        "Better demand planning and forecasting",
        "Enhanced supply chain visibility",
        "Increased agility and responsiveness",
      ]}

      useCases={[
        "Pharmaceutical supply chain and cold chain logistics",
        "Manufacturing and production planning",
        "Retail inventory and demand management",
        "Global logistics and distribution tracking",
        "Supplier collaboration and procurement optimization",
      ]}
    />
  );
};

export default SupplyChain;