// src/components/Roadmap.js
import React from 'react';

function Roadmap() {
  return (
    <section id="roadmap" className="p-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Hackathon Roadmap</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Registration: October 1 - 15</li>
        <li>Kick-off Event: October 16</li>
        <li>Submission Deadline: November 1</li>
        <li>Final Presentation: November 5</li>
      </ul>
    </section>
  );
}

export default Roadmap;
