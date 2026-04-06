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
      description: "Ensures product quality and standards",
      image: "https://toxsl.com/blog/image/77?file=post-image_file-QUALITY_ASSURANCE.png",

      modules: [
        {
          title: "GMP Guidelines",
          description: "Good Manufacturing Practices for pharma",
          duration: "2 months",
          image: "https://images.ctfassets.net/ueprkma36dz5/055U4NP6auEkAJO16eVys/ed16c264d9f4b5f709e7fc2e6439652f/5-Ps-of-GMP.png                             "
        },
        {
          title: "Audit & Compliance",
          description: "Internal and external audit handling",
          duration: "1 month",
          image: "https://48590137.fs1.hubspotusercontent-na1.net/hubfs/48590137/Imported_Blog_Media/6%20Reasons%20Your%20Organization%20Needs%20an%20IT%20Compliance%20Audit.jpg"
        },
        {
          title: "Documentation",
          description: "SOPs and validation documents",
          duration: "1 month",
          image: "https://document360.com/wp-content/uploads/2022/08/internal_documentation_guide.jpg"
        }
      ]
    },

    {
      title: "Quality Control / Analysis",
      description: "Testing and validation of pharma products",
      image: "https://fasttqmsoftware.com/wp-content/uploads/2018/12/Quality-Control.jpg",

      modules: [
        {
          title: "HPLC",
          description: "Chromatography technique",
          duration: "2 months",
          image: "https://medicalbuyer.co.in/wp-content/uploads/2019/11/HPLC_Systems_May-2019.png"
        },
        {
          title: "GC",
          description: "Gas chromatography analysis",
          duration: "2 months",
          image: "https://www.coherentmarketinsights.com/blogimg/1743168544.jpeg"
        },
        {
          title: "Wet Lab Analysis",
          description: "Chemical testing methods",
          duration: "1.5 months",
          image: "https://www.sigmaaldrich.com/deepweb/assets/sigmaaldrich/marketing/global/images/applications/analytical-chemistry/glassware-containing-colored-solutions/glassware-containing-colored-solutions.jpg"
        }
      ]
    },

    {
      title: "R&D",
      description: "Research and drug development",
      image: "https://www.utblick.org/wp-content/uploads/RD.jpg",

      modules: [
        {
          title: "Drug Discovery",
          description: "Finding new drug compounds",
          duration: "3 months",
          image: "https://iciq.org/wp-content/uploads/2023/10/Drug-Discovery-negatiu.png"
        },
        {
          title: "Formulation Development",
          description: "Designing dosage forms",
          duration: "2 months",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMeSYikwkJN2l470UmpwSbuwWWd2j1y4rZQ&s"
        },
        {
          title: "Preclinical Studies",
          description: "Testing before clinical trials",
          duration: "2 months",
          image: "https://mrctcenter.org/wp-content/uploads/2024/03/preclinical-study-2023-08-09-1.png"
        }
      ]
    },

    {
      title: "Manufacturing",
      description: "Production of pharmaceutical products",
      image: "https://katanamrp.com/wp-content/uploads/2023/03/shutterstock_1717694149-scaled-800x533.jpg",

      modules: [
        {
          title: "Tablet Production",
          description: "Tablet manufacturing process",
          duration: "2 months",
          image: "https://www.cironpharma.com/blog/wp-content/uploads/2021/08/Pharmaceutical-Tablet-Manufacturing-Process.jpg"
        },
        {
          title: "Capsule Filling",
          description: "Capsule production techniques",
          duration: "1.5 months",
          image: "https://senieer.com/wp-content/uploads/2021/09/Capsule-Filling-machine-2.jpg"
        },
        {
          title: "Sterile Production",
          description: "Injectable drug production",
          duration: "2 months",
          image: "https://media.licdn.com/dms/image/v2/D4E12AQH9G1YkA-IxZg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1731344477478?e=2147483647&v=beta&t=L4M0id3RKwAFCudvxxz8Ehmg3fO6uGcwRDyMBXb3q2M"
        }
      ]
    },

    {
      title: "Regulatory Affairs",
      description: "Compliance with global regulations",
      image: "https://www.ddregpharma.com/_next/image?url=%2Fimages%2Fregulatory%2Fregulatory-services-in-pharma.webp&w=3840&q=75",

      modules: [
        {
          title: "FDA Regulations",
          description: "US regulatory requirements",
          duration: "2 months",
          image: "hhttps://www.agencyiq.com/wp-content/uploads/blog/banner-fda-logo-generic.jpg"
        },
        {
          title: "ICH Guidelines",
          description: "International standards",
          duration: "1.5 months",
          image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4i9ivLjuLCFuBYPE7-ZwI16XGyGO2Q7kh5wDmI5AOgY3NxQim_rOTMYejljlj0elo1NLph_yrnPPXW_hZ7kvkKRLbjgj0Ka9Zf_DZHkAFHMVLziH-liSUVbu_-EmkSi-SyM8_B5Ov5mXYEgM51c1fKYIBwb8vD4EpwlBO-PTEx3xipNVqd-Xdfm0pScVD/w750-h350-rw/ICH-parts.png"
        }
      ]
    },

    {
      title: "LIMS",
      description: "Laboratory data management systems",
      image: "https://digiscorp.com/wp-content/uploads/2024/11/ChatGPT-Image-5-%D0%BE%D0%BA%D1%82.-2025-%D0%B3.-19_18_00-1024x683.webp",

      modules: [
        {
          title: "LIMS Basics",
          description: "Data tracking systems",
          duration: "1 month",
          image: "https://revollims.com/public/frontend/images/ckeditor/889460419.webp"
        },
        {
          title: "Sample Management",
          description: "Handling lab samples digitally",
          duration: "1 month",
          image: "https://labworks.com/wp-content/uploads/2024/04/everything-to-know-about-laboratory-sample-management-featured.jpg.webp"
        }
      ]
    },

    {
      title: "GMP / GLP / GDP",
      description: "Industry quality standards",
      image: "https://media.licdn.com/dms/image/v2/D4E22AQGsaef4pJ9QPw/feedshare-shrink_800/feedshare-shrink_800/0/1700077103006?e=2147483647&v=beta&t=tngj9s0pypei4Ksq_kPP944qVuC-oPi98cOub1QfqDU",

      modules: [
        {
          title: "GMP",
          description: "Manufacturing standards",
          duration: "1 month",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcIIUjRUUrRpfyZ84S-2Wl_aTyIxbJwMUDMw&s"
        },
        {
          title: "GLP",
          description: "Lab practices",
          duration: "1 month",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQSBRcC2T66ZbWP2mpGNCHGiXZ_Muy94CxhA&s"
        },
        {
          title: "GDP",
          description: "Distribution practices",
          duration: "1 month",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1wPR_38NAsdL9i18ORMdQVWreHo7mF_3rA&s"
        }
      ]
    },

    {
      title: "Validation / Calibration",
      description: "Equipment validation process",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyItI7A-zZM39Vh4gLa1JyymVXYtND9QfLViKa_ytFRoheil_gYYdm2E86yuE0lVGV6n3WdtW7kGczpTsWoR9xH8D-TmTy171QSO2BwDrornZSFWNJ0riW3BYsmg0knb8NWu7bomV_WYgQcFU9U4OfWESq9GemDdkeyWNWYI00V3D73RbF42y__CvihPJu/s800-rw/cali-vali-quali.png",

      modules: [
        {
          title: "Equipment Validation",
          description: "Ensure proper functioning",
          duration: "2 months",
          image: "https://kneat.com/wp-content/uploads/2025/02/Equipment-Validation_LANDSCAPE_1156x796-1024x705.jpg"
        },
        {
          title: "Calibration Techniques",
          description: "Accuracy checking",
          duration: "1 month",
          image: "https://www.theknowledgeacademy.com/_files/images/Different_NLP_Calibration_techniques.png"
        }
      ]
    },

    {
      title: "Warehouse Management",
      description: "Inventory and storage handling",
      image: "https://www.aajenterprises.com/wp-content/uploads/2024/08/warehouse-management-1-66acb5595eb5c.webp",

      modules: [
        {
          title: "Inventory Control",
          description: "Stock management",
          duration: "1 month",
          image: "https://myhfa.org/wp-content/uploads/2022/04/Make-Inventory-Control-Your-competitive-advantage_blog-image.jpg"
        },
        {
          title: "Cold Storage Handling",
          description: "Temperature-sensitive storage",
          duration: "1 month",
          image: "https://interlakemecalux.cdnwm.com/blog/img/operator-driving-forklift-truck-cold-storage-warehouse.1.0.jpg"
        }
      ]
    },

    {
      title: "Audit & Compliance",
      description: "Inspection and compliance checks",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRX-s1a7CJPyWh5I-Dak6l7_nDI5jXqkmvoQ&s",

      modules: [
        {
          title: "Internal Audit",
          description: "Company audits",
          duration: "1 month",
          image: "https://cdn.corporatefinanceinstitute.com/assets/internal-audit-1024x682.jpeg"
        },
        {
          title: "External Audit",
          description: "Regulatory inspections",
          duration: "1 month",
          image: "https://isoprosolutions.co.uk/wp-content/uploads/2024/09/5-4.png"
        }
      ]
    }
  ]
};

export default pharmaData;