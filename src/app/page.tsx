import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
      {/* Navbar - Simplified and tracked out */}
      <nav className="flex items-center justify-between px-10 py-8 border-b border-white/5 uppercase tracking-[0.3em] text-[10px]">
        <div className="text-lg font-bold tracking-[0.5em]">WARDON.IO</div>
        <div className="flex space-x-10 opacity-60 hover:opacity-100 transition-opacity">
          <a href="#" className="hover:text-green-500 transition-colors">Surface Engine</a>
          <a href="#" className="hover:text-green-500 transition-colors">Documentation</a>
          <a href="#" className="hover:text-green-500 transition-colors">Terminal</a>
        </div>
      </nav>

      {/* Hero Section - Editorial Layout */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto">
        
        {/* Modern Badge */}
        <div className="mb-10 text-[11px] uppercase tracking-[0.6em] text-green-500 opacity-80 border border-green-500/20 px-4 py-2 rounded-full">
           Establishing Connection // Active Reconnaissance
        </div>

        {/* The Main Tagline - Ultra Large Times New Roman */}
        <h1 className="text-7xl md:text-9xl font-normal leading-[0.85] tracking-tighter mb-10 italic">
          Perimeter <br /> 
          <span className="text-gray-500 not-italic">Sovereignty.</span>
        </h1>

        {/* Modified Content for OSINT */}
        <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed italic border-l border-white/10 pl-6">
          Wardon is a high-fidelity intelligence engine. <br />
          Map the invisible infrastructure. Detect the hidden vectors. 
          The modern watchman for your digital estate.
        </p>

        {/* Buttons - Sharp and Minimal */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center uppercase tracking-widest text-[11px]">
          <a
            href="#"
            className="bg-white text-black px-12 py-4 rounded-sm font-bold hover:bg-green-500 transition-all duration-500 shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]"
          >
            Initialize Scan →
          </a>
          <a
            href="#"
            className="border-b border-gray-600 px-2 py-4 hover:border-white transition-all duration-300 opacity-60 hover:opacity-100"
          >
            Access Intelligence Archive
          </a>
        </div>
      </main>

      {/* Modern Footer Branding */}
      <footer className="p-10 text-center">
         <p className="text-[9px] uppercase tracking-[0.8em] text-gray-700">
            Wardon Protocol // Built for Infrastructure Integrity // 2026
         </p>
      </footer>
    </div>
  );
};

export default HomePage;