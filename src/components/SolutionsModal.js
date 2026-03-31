import React from "react";
import "./SolutionsModal.css";
import { useNavigate } from "react-router-dom";

/* ✅ ICONS */
import {
    Database,
    BarChart3,
    FlaskConical,
    Package,
    ScanLine,
    Cloud,
    ShieldCheck,
    Bot,
    BrainCircuit
} from "lucide-react";

function SolutionsModal({ isOpen, onClose }) {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const solutions = [
        {
            title: "LIMS and Master Data",
            desc: "Digital manufacturing & quality control systems.",
            icon: <Database />,
            path: "/solutions/lims"
        },
        {
            title: "Data Analytics",
            desc: "Store and analyze structured & raw data.",
            icon: <BarChart3 />,
            path: "/solutions/data-analytics"
        },
        {
            title: "CDS",
            desc: "Chromatography data systems for labs.",
            icon: <FlaskConical />,
            path: "/solutions/cds"
        },
        {
            title: "Supply Chain Management",
            desc: "Optimize sourcing and manufacturing flow.",
            icon: <Package />,
            path: "/solutions/scm"
        },
        {
            title: "SAP ATTP",
            desc: "Track & trace pharmaceutical products.",
            icon: <ScanLine />,
            path: "/solutions/sap-attp"
        },
        {
            title: "SAP BTP",
            desc: "Cloud platform for integration & analytics.",
            icon: <Cloud />,
            path: "/solutions/sap-btp"
        },
        {
            title: "Computer System Validation",
            desc: "Ensure system compliance & validation.",
            icon: <ShieldCheck />,
            path: "/solutions/csv"
        },
        {
            title: "Robotic Process Automation",
            desc: "Automate repetitive workflows.",
            icon: <Bot />,
            path: "/solutions/rpa"
        },
        {
            title: "Artificial Intelligence",
            desc: "Leverage AI for intelligent decisions.",
            icon: <BrainCircuit />,
            path: "/solutions/ai"
        }
    ];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>

                {/* Close */}
                <button className="close-btn" onClick={onClose}>✕</button>

                <h2 className="modal-title">Our Solutions</h2>

                <div className="solutions-grid">
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            className="solution-item"
                            onClick={() => {
                                navigate(item.path);
                                onClose();
                            }}
                        >
                            <div className="icon">{item.icon}</div>

                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default SolutionsModal;