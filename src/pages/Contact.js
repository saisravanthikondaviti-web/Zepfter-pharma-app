import { useState } from "react";
import contactImg from "../assets/contact.png";
import "./Contact.css";
// 
function Contact() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How can I contact Zepfter?",
            answer: "You can fill out the contact form above or email us directly for assistance."
        },
        {
            question: "What services does Zepfter provide?",
            answer: "We provide pharmaceutical training, IT solutions, and clinical services."
        },
        {
            question: "How long does it take to get a response?",
            answer: "Our team usually responds within 24–48 hours."
        },
        {
            question: "Can I enroll in courses through this platform?",
            answer: "Yes, you can explore and enroll in pharma and IT courses through our platform."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            {/* CONTACT SECTION */}
            <div className="contact-container">

                {/* LEFT */}
                <div className="contact-left">
                    <img src={contactImg} alt="Contact" />

                    <div className="quote">
                        <h2>Zepfter</h2>
                        <p>
                            “Empowering pharmaceutical innovation through technology,
                            intelligence, and precision.”
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="contact-right">
                    <h2>Contact Us</h2>
                    <p className="subtitle">
                        Reach out for solutions, support, or collaboration.
                    </p>

                    <form className="contact-form">
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email Address" required />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Your Message" rows="5" required></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>

            {/* FAQ SECTION */}
            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>

                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            {faq.question}
                            <span>{activeIndex === index ? "−" : "+"}</span>
                        </div>

                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Contact;