
import React from 'react';


function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Hackathon 2024</h1>
        <div className="space-x-4">
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="#sponsors" className="hover:underline">Sponsors</a>
          <a href="#judges" className="hover:underline">Judges</a>
          <a href="#roadmap" className="hover:underline">Roadmap</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
