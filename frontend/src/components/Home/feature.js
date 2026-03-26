import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDownRight } from 'lucide-react';

const Frame4 = () => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full overflow-hidden font-syne py-24 pb-0">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[40%] h-[500px] bg-[#6B60FE]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-[40%] h-[400px] bg-[#CBF327]/5 blur-[150px] pointer-events-none rounded-full" />

      {/* CTA Full Width Section */}
      <div className="relative z-20 w-full py-16 md:py-24 flex flex-col items-center justify-center text-center overflow-visible">
        {/* Massive Background Glow for "Full Screen Blue" feel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-r from-[#6B60FE]/20 via-[#6B60FE]/30 to-[#6B60FE]/20 blur-[200px] pointer-events-none rounded-full" />

        <h2 className="text-white text-3xl md:text-6xl font-bold mb-2 leading-tight tracking-tight relative z-10 drop-shadow-2xl font-syne">
          Secure Your Spot Now
        </h2>
        <h3 className="text-[#CBF327] text-3xl md:text-6xl font-bold mb-10 leading-none tracking-tight relative z-10 drop-shadow-2xl font-syne">
          Limited Seats
        </h3>

        <button
          onClick={() => navigate('/launchpad/passes')}
          className="inline-flex items-center gap-3 bg-white px-10 py-4 rounded-full text-[#161616] text-lg font-black shadow-[0_15px_40px_rgba(255,255,255,0.15)] hover:bg-gray-50 transform hover:scale-105 active:scale-95 transition-all duration-300 group relative z-10"
        >
          Get Your Passes Now
          <ArrowDownRight className="w-6 h-6 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform stroke-[2.5px]" />
        </button>
      </div>

      {/* Stats Strip */}
      <div className="relative z-10 bg-[#CBF327] w-full py-12 md:py-20 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1300px] mx-auto w-full px-2 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-2 md:gap-x-4 text-black">
          <div className="flex flex-col items-center text-center group cursor-default px-1">
            <p className="text-[10px] md:text-xs font-black tracking-[0.2em] mb-2 uppercase opacity-60 group-hover:opacity-100 transition-opacity">ATTENDEES</p>
            <p className="text-2xl sm:text-4xl lg:text-5xl font-black leading-none tracking-normal">25,000+</p>
          </div>
          <div className="flex flex-col items-center text-center group cursor-default px-1">
            <p className="text-[10px] md:text-xs font-black tracking-[0.2em] mb-2 uppercase opacity-60 group-hover:opacity-100 transition-opacity">STARTUPS</p>
            <p className="text-2xl sm:text-4xl lg:text-5xl font-black leading-none tracking-normal">1,000+</p>
          </div>
          <div className="flex flex-col items-center text-center group cursor-default px-1">
            <p className="text-[10px] md:text-xs font-black tracking-[0.2em] mb-2 uppercase opacity-60 group-hover:opacity-100 transition-opacity">WORKSHOPS</p>
            <p className="text-2xl sm:text-4xl lg:text-5xl font-black leading-none tracking-normal">20+</p>
          </div>
          <div className="flex flex-col items-center text-center group cursor-default px-1">
            <p className="text-[10px] md:text-xs font-black tracking-[0.2em] mb-2 uppercase opacity-60 group-hover:opacity-100 transition-opacity">SPEAKERS</p>
            <p className="text-2xl sm:text-4xl lg:text-5xl font-black leading-none tracking-normal">50+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame4;
