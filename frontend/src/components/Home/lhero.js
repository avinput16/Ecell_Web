import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/ecell/lp_hero_landing.png";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden font-syne bg-black">
      {/* Unified Uniform Background Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(107,95,255,0.12)_0%,transparent_75%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(212,255,0,0.06)_100%)]" />
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(107,95,255,0.05)_0%,transparent_70%)] blur-3xl animate-float-slow" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(212,255,0,0.05)_0%,transparent_70%)] blur-3xl animate-float-slow-reverse" />
        
        {/* Added extra glow at bottom for visibility */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40%] bg-[radial-gradient(circle_at_center,rgba(212,255,0,0.04)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-6 flex flex-col items-center max-w-[95vw] lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0]
          }}
          transition={{
            opacity: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-full mb-6 md:mb-6 flex justify-center scale-110 md:scale-100 lg:scale-105 origin-center"
        >
          <img
            src={heroImg}
            alt="Launchpad"
            className="w-full h-auto object-contain max-h-[50vh] md:max-h-[55vh] transition-all duration-700 drop-shadow-[0_0_25px_rgba(212,255,0,0.15)]"
          />
        </motion.div>

        {/* Event Dates - Added */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mb-6 md:mb-10 flex flex-col items-center gap-1"
        >
          <span className="text-2xl md:text-3xl font-black tracking-tight text-[#CBF327] drop-shadow-[0_0_15px_rgba(203,243,39,0.35)]">
            3rd - 5th April
          </span>
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/50">
              BITS PILANI HYDERABAD
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>
        </motion.div>

        {/* Center CTA Button - Delayed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="flex justify-center"
        >
          <a
            href="/launchpad/schedules"
            className="group flex items-center gap-2.5 px-10 py-3.5 text-black text-xl font-bold rounded-full 
                                 shadow-[0_0_30px_rgba(203,243,39,0.3)] hover:shadow-[0_0_50px_rgba(203,243,39,0.5)] 
                                 hover:scale-105 transition-all duration-300 bg-[#CBF327]"
          >
            Schedule
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5px]" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

