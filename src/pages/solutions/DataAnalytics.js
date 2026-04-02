import React from "react";
import SolutionTemplate from "../../components/SolutionTemplate";
import dataImg from "../../assets/data.jpg"; // 👈 add image

const DataAnalytics = () => {
  return (
    <SolutionTemplate
      title="Data Analytics"
      description="Transform raw data into actionable insights with advanced analytics, visualization, and real-time intelligence."

      image={dataImg}

      detailedContent={[
        "Data Analytics empowers organizations to extract meaningful insights from large volumes of structured and unstructured data.",
        "Our solutions integrate data from multiple sources, providing a unified view that enables accurate analysis and strategic decision-making.",
        "With real-time dashboards and predictive analytics, businesses can identify trends, optimize operations, and stay ahead of the competition.",
      ]}

      features={[
        "Data integration from multiple sources",
        "Interactive dashboards and real-time reporting",
        "Predictive analytics and forecasting models",
        "Advanced data visualization tools",
        "Big data processing and analytics",
        "Custom KPI tracking and reporting",
      ]}

      benefits={[
        "Data-driven decision making",
        "Improved operational efficiency",
        "Better forecasting and planning",
        "Enhanced business insights",
        "Faster response to market trends",
      ]}

      useCases={[
        "Business intelligence and reporting",
        "Pharmaceutical data analysis and compliance tracking",
        "Sales and marketing performance analytics",
        "Supply chain optimization",
        "Customer behavior and trend analysis",
      ]}
    />
  );
};

export default DataAnalytics;