// src/components/Mentors.js
import React from 'react';

function Mentors() {
  return (
    <section id="mentors" className="p-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Our Mentors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-100 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Mentor 1</h3>
          <p>Specialty in AI & ML</p>
        </div>
        <div className="p-4 bg-gray-100 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Mentor 2</h3>
          <p>Specialty in Cloud Computing</p>
        </div>
        <div className="p-4 bg-gray-100 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Mentor 3</h3>
          <p>Specialty in Web Development</p>
        </div>
      </div>
    </section>
  );
}

export default Mentors;
