import React, { useState } from "react";
import "./FAQ.css";
import { useSupabase } from "../../Shared/AppContext";

function FAQ() {
  const { FAQData } = useSupabase();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Često postavljena pitanja (FAQ)</h2>
      <div className="accordion">
        {FAQData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleOpen(index)}
            >
              <h3>{faq.question}</h3>
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>
            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
