import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, ChevronRight, Zap, Target, Star } from "lucide-react";

const scheduleData = [
  {
    day: "01",
    date: "3rd April",
    label: "Day One",
    tagline: "The Grand Launch",
    accent: "#d4ff00",
    events: [
      { name: "Startup Expo", time: "9:00 AM - 8:00 PM" },
      { name: "T3 Juniors", time: "9:00 AM - 8:00 PM" },
    ]
  },
  {
    day: "02",
    date: "4th April",
    label: "Day Two",
    tagline: "Pitch Perfect",
    accent: "#6b5fff",
    events: [
      { name: "Startup Expo", time: "9:00 AM - 7:00 PM" },
      { name: "GR Semi Finals", time: "12:00 PM - 6:00 PM" },
      { name: "Pitcher's Pilot + Plus Workshops", time: "6:00 PM - 8:00 PM" },
    ]
  },
  {
    day: "03",
    date: "5th April",
    label: "Day Three",
    tagline: "Moment Of Glory",
    accent: "#d4ff00",
    events: [
      { name: "Startup Expo", time: "9:00 AM - 8:00 PM" },
      { name: "GR Finals", time: "9:00 AM - 8:00 PM" },
      { name: "Teen Tycoons Sr. Opening Ceremony", time: "9:00 AM - 12:00 PM" },
      { name: "Teen Tycoons Sr.", time: "1:00 PM - 6:00 PM" },
      { name: "Teen Tycoons Jr.", time: "9:00 AM - 3:00 PM" },
      { name: "Teen Tycoons Sr. Closing Ceremony", time: "5:00 PM - 7:00 PM" },
      { name: "Pitcher's Pilot", time: "5:00 PM - 8:00 PM" },
      { name: "Internship Drive", time: "1:00 PM - 6:00 PM" },
    ]
  }
];

const EventSchedule = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6 md:px-12 relative overflow-hidden font-syne">
      {/* Mesh Gradients Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#6b5fff]/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#d4ff00]/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Day Nav - Control Panel Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-[#d4ff00] font-black uppercase tracking-[0.3em] text-sm">Launchpad Schedule</span>
            <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">
              {scheduleData[activeTab].label}<span className="text-[#d4ff00]">.</span>
            </h2>
          </div>

          <div className="flex bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-3xl shadow-2xl">
            {scheduleData.map((day, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-8 py-3 rounded-full transition-all duration-700 relative flex items-center gap-2 group ${activeTab === idx ? "text-black" : "text-white/40 hover:text-white"
                  }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="dayIndicator"
                    className="absolute inset-0 bg-[#d4ff00] rounded-full shadow-[0_0_20px_rgba(212,255,0,0.4)]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 font-black text-sm uppercase">Day {day.day}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Box */}
        <div className="relative border-t border-white/10 pt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 50, skewY: 2 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              exit={{ opacity: 0, y: -50, skewY: -2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Left Column - Day Info */}
              <div className="lg:col-span-4 space-y-12">
                <div className="space-y-2">
                  <span
                    className="text-sm font-black uppercase tracking-widest transition-colors duration-1000"
                    style={{ color: scheduleData[activeTab].accent }}
                  >
                    {scheduleData[activeTab].date}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-white/90">
                    {scheduleData[activeTab].tagline}
                  </h3>
                </div>

                {/* Visual Asset / Decorative Box */}
                <div className="hidden lg:block">
                  <div
                    className="w-full h-80 rounded-[3rem] border border-white/10 relative overflow-hidden group/box transition-all duration-700 hover:border-white/20"
                    style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%)` }}
                  >
                    <div className="absolute inset-4 rounded-[2.2rem] border border-white/5 flex items-center justify-center overflow-hidden">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="relative"
                      >
                        <Zap size={100} className="text-white/5" strokeWidth={0.5} />
                      </motion.div>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-8xl font-black opacity-10">{scheduleData[activeTab].day}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center">
                      <div className="flex gap-2">
                        {[1, 2, 3].map(i => <div key={i} className={`w-3 h-1 rounded-full ${i - 1 === activeTab ? 'bg-[#d4ff00]' : 'bg-white/10'}`} />)}
                      </div>
                      <Star className="text-white/20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Timeline */}
              <div className="lg:col-span-8">
                <div className="space-y-4">
                  {scheduleData[activeTab].events.map((event, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-10 bg-white/5 border border-white/5 rounded-[2.5rem] hover:bg-white/[0.08] hover:border-[#d4ff00]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 relative"
                    >
                      {/* Horizontal Dash line */}
                      <div className="hidden md:block absolute left-[-48px] top-1/2 w-12 h-px bg-white/10 group-hover:bg-[#d4ff00]/30 transition-colors" />

                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#d4ff00] group-hover:scale-150 transition-transform" />
                          <span
                            className="text-[10px] font-black uppercase tracking-widest opacity-40 transition-opacity group-hover:opacity-100"
                            style={{ color: scheduleData[activeTab].accent }}
                          >
                            Launchpad Event #{idx + 1}
                          </span>
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-[#d4ff00] transition-colors leading-tight">
                          {event.name}
                        </h4>
                      </div>

                      <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#d4ff00]/10 group-hover:border-[#d4ff00]/20 transition-all">
                          <Clock className="w-4 h-4 text-white/40 group-hover:text-[#d4ff00]" />
                          <span className="text-sm font-sans font-semibold tracking-wide text-white group-hover:text-[#d4ff00] whitespace-nowrap">{event.time}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Links Section */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6 relative z-10">
          <Link
            to="/launchpad/passes"
            className="px-10 py-4 bg-[#d4ff00] text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(212,255,0,0.3)] hover:scale-105"
          >
            Get Your Passes
          </Link>
          <Link
            to="/launchpad/accommodation"
            className="px-10 py-4 bg-white/10 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Accommodation Details
          </Link>
        </div>

      </div>
    </div>
  );
};

export default EventSchedule;
