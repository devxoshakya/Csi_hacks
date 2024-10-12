// src/components/Sponsors.js
import React from 'react';

function Sponsors() {
  return (
    <section id="sponsors" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Our Sponsors</h2>
      <div className="flex justify-center space-x-4">
        <div className="p-4 bg-white shadow-lg">Sponsor 1</div>
        <div className="p-4 bg-white shadow-lg">Sponsor 2</div>
        <div className="p-4 bg-white shadow-lg">Sponsor 3</div>
      </div>
    </section>
  );
}

export default Sponsors;
