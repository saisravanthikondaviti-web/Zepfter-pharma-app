import medicalImg from "../assets/medical.png";

const medicalClinicalData = {
  name: "Medical & Clinical Courses",
  category: "Courses",
  image: medicalImg,
  description: "Medical + Clinical",

  subcategories: [
    {
      title: "Medical",
      description: "Core medical domain skills",
      image: "https://source.unsplash.com/400x300/?hospital,medical",

      modules: [
        {
          title: "Medical Coding",
          description: "Convert diagnoses into standardized medical codes",
          duration: "3 months",
          image: "https://americancareercollege.edu/pulse_images/lg/pulse_35_Medical-Coding.jpg",
          skillsCovered: ["ICD Codes", "CPT", "HCPCS"]
        },
        {
          title: "Medical Billing",
          description: "Insurance and billing process in healthcare",
          duration: "2 months",
          image: "https://images.squarespace-cdn.com/content/v1/540fa08be4b07fe1be58bc6b/1607709340676-5V6HWSW2XF9C40Q3RB2K/Explanation-of-Benefits-Medical-Billing-Terms.jpg",
          skillsCovered: ["Claims Processing", "Insurance", "Invoices"]
        },
        {
          title: "Medical Writing",
          description: "Create clinical and regulatory documents",
          duration: "3 months",
          image: "https://www.quanticate.com/hubfs/Quality%20in%20Medical%20Writing.jpg",
          skillsCovered: ["Documentation", "Research", "Reports"]
        },
        {
          title: "Medical Affairs",
          description: "Bridge between pharma and healthcare professionals",
          duration: "2 months",
          image: "https://media.licdn.com/dms/image/v2/D5612AQE0KAQXPoUi_A/article-cover_image-shrink_720_1280/B56ZtcXl0QHsAI-/0/1766781247527?e=2147483647&v=beta&t=YGmGzE1sCwVtgqKzZKZNmpHcA76jru7vO0ALqpvzLR4",
          skillsCovered: ["Communication", "Strategy", "Knowledge"]
        }
      ]
    },

    {
      title: "Clinical",
      description: "Clinical research and trial processes",
      image: "https://source.unsplash.com/400x300/?clinical,trial",

      modules: [
        {
          title: "Clinical Research",
          description: "Study and conduct clinical trials",
          duration: "3 months",
          image: "https://images.squarespace-cdn.com/content/v1/56a042fb25981d9326c9bbdb/61ee3702-b255-4d30-b6f3-75ef77a5120c/Clinical+Research+vs+Clinical+Trial.png",
          skillsCovered: ["Data Management", "Regulatory"]
        },
        {
          title: "Clinical Data Management",
          description: "Handling and analyzing clinical trial data",
          duration: "3 months",
          image: "https://gpatindia.com/wp-content/uploads/2024/05/clinical-data-management.png",
          skillsCovered: ["Database", "Validation", "Analysis"]
        },
        {
          title: "Clinical Trials",
          description: "Testing safety and effectiveness of drugs",
          duration: "4 months",
          image: "https://www.thewellproject.org/sites/default/files/field/image/clinicaltrial.jpg",
          skillsCovered: ["Monitoring", "Protocols", "Reporting"]
        },
        {
          title: "BA/BE Studies",
          description: "Bioavailability and bioequivalence studies",
          duration: "2 months",
          image: "https://mediclincr.com/wp-content/uploads/2022/12/Drupal-Web_GettyImages-1087354724.jpg",
          skillsCovered: ["Analysis", "Reports", "Pharmacokinetics"]
        }
      ]
    }
  ]
};

export default medicalClinicalData;