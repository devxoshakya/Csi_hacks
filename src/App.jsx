// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import Prizes from './components/Prizes';
import Judges from './components/Judges';
import Mentors from './components/Mentors';
import OrganizingTeam from './components/OrganizingTeam';
import Roadmap from './components/Roadmap';
import Dates from './components/Dates';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Header />
      <FAQ />
      <Sponsors />
      <Prizes />
      <Judges />
      <Mentors />
      <OrganizingTeam />
      <Roadmap />
      <Dates />
      <Footer />
    </div>
  );
}

export default App;
