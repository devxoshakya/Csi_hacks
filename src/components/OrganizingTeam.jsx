// src/components/OrganizingTeam.js
import React from 'react';

function OrganizingTeam() {
  return (
    <section id="organizing-team" className="p-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Organizing Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Team Lead</h3>
          <p>Responsible for coordination</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Event Coordinator</h3>
          <p>Manages event logistics</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Tech Head</h3>
          <p>Oversees tech support</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold">Marketing Lead</h3>
          <p>Handles promotions</p>
        </div>
      </div>
    </section>
  );
}

export default OrganizingTeam;
