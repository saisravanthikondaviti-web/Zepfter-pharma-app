import medicalImg from "../assets/medical.png";

const medicalClinicalData = {
  name: "Medical & Clinical Courses",
  category: "Courses",
  image: medicalImg,
  description: "Medical + Clinical",

  subcategories: [
    {
      title: "Medical",
      modules: [
        {
          title: "Medical Coding",
          description: "Convert diagnoses into standardized medical codes",
          duration: "3 months",
          skillsCovered: ["ICD Codes", "CPT", "HCPCS"]
        },
        {
          title: "Medical Billing",
          description: "Insurance and billing process in healthcare",
          duration: "2 months",
          skillsCovered: ["Claims Processing", "Insurance", "Invoices"]
        },
        {
          title: "Medical Writing",
          description: "Create clinical and regulatory documents",
          duration: "3 months",
          skillsCovered: ["Documentation", "Research", "Reports"]
        },
        {
          title: "Medical Affairs",
          description: "Bridge between pharma and healthcare professionals",
          duration: "2 months",
          skillsCovered: ["Communication", "Strategy", "Knowledge"]
        }
      ]
    },

    {
      title: "Clinical",
      modules: [
        {
          title: "Clinical Research",
          description: "Study and conduct clinical trials",
          duration: "3 months",
          skillsCovered: ["Data Management", "Regulatory"]
        },
        {
          title: "Clinical Data Management",
          description: "Handling and analyzing clinical trial data",
          duration: "3 months",
          skillsCovered: ["Database", "Validation", "Analysis"]
        },
        {
          title: "Clinical Trials",
          description: "Testing safety and effectiveness of drugs",
          duration: "4 months",
          skillsCovered: ["Monitoring", "Protocols", "Reporting"]
        },
        {
          title: "BA/BE Studies",
          description: "Bioavailability and bioequivalence studies",
          duration: "2 months",
          skillsCovered: ["Analysis", "Reports", "Pharmacokinetics"]
        }
      ]
    }
  ]
};

export default medicalClinicalData;