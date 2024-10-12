// src/components/Dates.js
import React from 'react';

function Dates() {
  return (
    <section id="dates" className="p-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Important Dates</h2>
      <ul className="list-disc list-inside space-y-4 max-w-md mx-auto">
        <li><strong>Registration Opens:</strong> October 1</li>
        <li><strong>Registration Closes:</strong> October 15</li>
        <li><strong>Hackathon Start:</strong> October 16</li>
        <li><strong>Submission Deadline:</strong> November 1</li>
        <li><strong>Final Presentations:</strong> November 5</li>
        <li><strong>Awards Ceremony:</strong> November 10</li>
      </ul>
    </section>
  );
}

export default Dates;
