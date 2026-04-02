import pharmaImg from "../assets/pharma.png";

const pharmaData = {
  name: "Pharmaceutical Skills",
  category: "Pharmaceutical",
  image: pharmaImg,
  description:
    "Learn quality assurance, R&D, manufacturing, regulatory and more in pharma industry.",

  subcategories: [
    {
      title: "Quality Assurance",
      desc: "Ensures product quality and standards",
      modules: [
        {
          title: "GMP Guidelines",
          description: "Good Manufacturing Practices for pharma",
          duration: "2 months"
        },
        {
          title: "Audit & Compliance",
          description: "Internal and external audit handling",
          duration: "1 month"
        },
        {
          title: "Documentation",
          description: "SOPs and validation documents",
          duration: "1 month"
        }
      ]
    },

    {
      title: "Quality Control / Analysis",
      desc: "Testing and validation of pharma products",
      modules: [
        {
          title: "HPLC",
          description: "Chromatography technique",
          duration: "2 months"
        },
        {
          title: "GC",
          description: "Gas chromatography analysis",
          duration: "2 months"
        },
        {
          title: "Wet Lab Analysis",
          description: "Chemical testing methods",
          duration: "1.5 months"
        }
      ]
    },

    {
      title: "R&D",
      desc: "Research and drug development",
      modules: [
        {
          title: "Drug Discovery",
          description: "Finding new drug compounds",
          duration: "3 months"
        },
        {
          title: "Formulation Development",
          description: "Designing dosage forms",
          duration: "2 months"
        },
        {
          title: "Preclinical Studies",
          description: "Testing before clinical trials",
          duration: "2 months"
        }
      ]
    },

    {
      title: "Manufacturing",
      desc: "Production of pharmaceutical products",
      modules: [
        {
          title: "Tablet Production",
          description: "Tablet manufacturing process",
          duration: "2 months"
        },
        {
          title: "Capsule Filling",
          description: "Capsule production techniques",
          duration: "1.5 months"
        },
        {
          title: "Sterile Production",
          description: "Injectable drug production",
          duration: "2 months"
        }
      ]
    },

    {
      title: "Regulatory Affairs",
      desc: "Compliance with global regulations",
      modules: [
        {
          title: "FDA Regulations",
          description: "US regulatory requirements",
          duration: "2 months"
        },
        {
          title: "ICH Guidelines",
          description: "International standards",
          duration: "1.5 months"
        }
      ]
    },

    {
      title: "LIMS",
      desc: "Laboratory data management systems",
      modules: [
        {
          title: "LIMS Basics",
          description: "Data tracking systems",
          duration: "1 month"
        },
        {
          title: "Sample Management",
          description: "Handling lab samples digitally",
          duration: "1 month"
        }
      ]
    },

    {
      title: "GMP / GLP / GDP",
      desc: "Industry quality standards",
      modules: [
        {
          title: "GMP",
          description: "Manufacturing standards",
          duration: "1 month"
        },
        {
          title: "GLP",
          description: "Lab practices",
          duration: "1 month"
        },
        {
          title: "GDP",
          description: "Distribution practices",
          duration: "1 month"
        }
      ]
    },

    {
      title: "Validation / Calibration",
      desc: "Equipment validation process",
      modules: [
        {
          title: "Equipment Validation",
          description: "Ensure proper functioning",
          duration: "2 months"
        },
        {
          title: "Calibration Techniques",
          description: "Accuracy checking",
          duration: "1 month"
        }
      ]
    },

    {
      title: "Warehouse Management",
      desc: "Inventory and storage handling",
      modules: [
        {
          title: "Inventory Control",
          description: "Stock management",
          duration: "1 month"
        },
        {
          title: "Cold Storage Handling",
          description: "Temperature-sensitive storage",
          duration: "1 month"
        }
      ]
    },

    {
      title: "Audit & Compliance",
      desc: "Inspection and compliance checks",
      modules: [
        {
          title: "Internal Audit",
          description: "Company audits",
          duration: "1 month"
        },
        {
          title: "External Audit",
          description: "Regulatory inspections",
          duration: "1 month"
        }
      ]
    }
  ]
};

export default pharmaData;