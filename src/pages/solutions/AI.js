import React from "react";
import SolutionTemplate from "../../components/SolutionTemplate";
import aiImg from "../../assets/ai.jpg"; // 👈 add a proper AI image

const AI = () => {
  return (
    <SolutionTemplate
      title="Artificial Intelligence"
      description="Leverage cutting-edge AI technologies to build intelligent, adaptive, and data-driven solutions that transform business operations."

      image={aiImg}

      detailedContent={[
        "Artificial Intelligence enables organizations to automate complex processes, uncover insights from large datasets, and enhance decision-making capabilities.",
        "Our AI solutions integrate seamlessly into existing systems, helping businesses scale efficiently while maintaining accuracy and performance.",
        "From predictive analytics to intelligent automation, we empower enterprises to stay ahead in a competitive digital landscape.",
      ]}

      features={[
        "Machine Learning model development and deployment",
        "Natural Language Processing (NLP) solutions",
        "Predictive analytics and forecasting",
        "AI-powered automation workflows",
        "Computer vision and image recognition",
        "Real-time data processing and insights",
      ]}

      benefits={[
        "Improved decision-making with data-driven insights",
        "Enhanced customer experience and personalization",
        "Reduced operational costs through automation",
        "Increased efficiency and productivity",
        "Scalable and adaptable AI systems",
      ]}

      useCases={[
        "Healthcare diagnostics and patient data analysis",
        "Pharmaceutical research and drug discovery",
        "Customer support automation (chatbots & assistants)",
        "Fraud detection and risk analysis",
        "Supply chain optimization and demand forecasting",
      ]}
    />
  );
};

export default AI;