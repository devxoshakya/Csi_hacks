// src/components/FAQ.js
import React, { useState } from 'react';

function FAQ() {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section id="faq" className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {["What is this Hackathon?", "How to participate?", "What are the prizes?"].map((question, index) => (
          <div key={index} className="mb-4 border-b">
            <button
              className="w-full text-left font-semibold py-2"
              onClick={() => toggleFAQ(index)}
            >
              {question}
            </button>
            {open === index && <p className="p-2">Answer to {question}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
