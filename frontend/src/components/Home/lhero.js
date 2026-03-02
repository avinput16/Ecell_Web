import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/ecell/lp_hero_landing.png";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden font-syne bg-black">
      {/* Unified Uniform Background Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(107,95,255,0.08)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(212,255,0,0.03)_100%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mb-8"
        >
          <img
            src={heroImg}
            alt="Launchpad"
            className="w-full h-auto object-contain max-h-[40vh] md:max-h-[50vh]"
          />
        </motion.div>

        {/* Center CTA Button - Delayed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
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

      {/* Big Scroll Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8 cursor-pointer z-20"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="relative flex flex-col items-center">
          <div className="w-[2px] h-28 bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#CBF327] to-transparent shadow-[0_0_20px_#CBF327]"
              animate={{
                y: ["100%", "-200%"]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="absolute -top-12 flex flex-col items-center">
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0, 1, 0],
                  y: [20, -35],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeOut"
                }}
                className="absolute"
              >
                <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 14L14 2L26 14" stroke="#CBF327" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

