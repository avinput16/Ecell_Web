import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Zap, Star, MapPin } from "lucide-react";

const scheduleData = [
  {
    day: "00",
    date: "2nd April",
    label: "Day Zero",
    tagline: "The Grand Beginning",
    accent: "#6b5fff",
    events: [
      { name: "Welcome and Introduction of Guest of Honour", time: "6:00 PM", venue: "Auditorium" },
      { name: "Introduction of FOB", time: "6:10 PM", venue: "Auditorium" },
      { name: "Lighting of the Lamp", time: "6:15 PM", venue: "Auditorium" },
      { name: "FOB Address", time: "6:20 PM", venue: "Auditorium" },
      { name: "Address by Dean", time: "6:25 PM", venue: "Auditorium" },
      { name: "Address by FIC", time: "6:35 PM", venue: "Auditorium" },
      { name: "Address by Chief Guest", time: "6:45 PM", venue: "Auditorium" },
      { name: "Chairman's Address", time: "6:55 PM", venue: "Auditorium" },
      { name: "Versatality", time: "7:30 PM", venue: "Auditorium" },
      { name: "Fashion Club", time: "7:40 PM", venue: "Auditorium" },
      { name: "Hindi Tarang", time: "7:55 PM", venue: "Auditorium" },
      { name: "Movie Club", time: "8:05 PM", venue: "Auditorium" },
      { name: "Dramatics Club", time: "8:20 PM", venue: "Auditorium" },
      { name: "Comedy Club", time: "8:55 PM", venue: "Auditorium" },
      { name: "Sejal Kumar Performance", time: "9:30 PM", venue: "Auditorium" },
    ]
  },
  {
    day: "01",
    date: "3rd April",
    label: "Day One",
    tagline: "The Grand Launch",
    accent: "#d4ff00",
    events: [
      { name: "DP World Hackathon", time: "12:00 PM - 12:00 AM", venue: "F102, F104" },
      { name: "Startup Expo", time: "9:00 AM - 11:00 PM", venue: "Library Lawns" },
      { name: "T3 Juniors", time: "12:00 PM - 3:00 PM", venue: "AUDI FOYER" },
      { name: "SEED", time: "1:00 PM - 3:00 PM", venue: "G204", description: "Summit for Entrepreneurial Ecosystem Development" },
      { name: "Defence Panel", time: "12:00 PM - 2:00 PM", venue: "F103" },
      { name: "Creating Value Through Innovation, Storytelling, and Social Impact: Women Panel", time: "3:00 PM - 4:00 PM", venue: "F103", description: "Panelists: Ms. Shaily Mehrotra (CEO & Founder, FixDerma and judge at Shark Tank Season 5), Ms. Nidhi Saxena (Founder of Delulu), Ms. Shanthala Veigas (Senior Director-TiE Hyderabad)" },
      { name: "Risk Management", time: "11:00 AM - 5:00 PM", venue: "F107" },
      { name: "Pokemon Showdown", time: "3:00 PM - 7:00 PM", venue: "G108" },
      { name: "Tech Gyan Workshop", time: "12:00 PM - 6:00 PM", venue: "F106, F109" },
    ]
  },
  {
    day: "02",
    date: "4th April",
    label: "Day Two",
    tagline: "Pitch Perfect",
    accent: "#6b5fff",
    events: [
      { name: "DP World Hackathon", time: "12:00 AM - 10:00 AM", venue: "F102, F104" },
      { name: "Impactus", time: "10:00 AM - 6:00 PM", venue: "F201, F202, F203" },
      { name: "Ground Reality Semi-Finals", time: "9:00 AM - 6:00 PM", venue: "F204-F208" },
      { name: "Ecosystem Panel", time: "11:30 AM - 1:00 PM", venue: "F103" },
      { name: "VC Panel", time: "1:30 PM - 3:00 PM", venue: "F103" },
      { name: "PM Workshop", time: "11:00 AM - 3:00 PM", venue: "F104" },
      { name: "LLM Workshop", time: "4:00 PM - 6:00 PM", venue: "F104" },
      { name: "Kiran Bedi Ma'am Talk", time: "4:00 PM - 5:30 PM", venue: "F101" },
      { name: "GeoGuesser", time: "12:30 PM - 2:30 PM", venue: "G108" },
      { name: "IPL Auction", time: "3:30 PM - 6:00 PM", venue: "G108" },
      { name: "Pitchers Pilot", time: "6:00 PM - 8:00 PM", venue: "Library Lawns Stage 1" },
      { name: "Startup Expo", time: "9:00 AM - 11:00 PM", venue: "Library Lawns" },
      { name: "Tech Gyan Workshop", time: "9:00 AM - 7:00 PM", venue: "F105, F106, G104-G106" },
    ]
  },
  {
    day: "03",
    date: "5th April",
    label: "Day Three",
    tagline: "Moment Of Glory",
    accent: "#d4ff00",
    events: [
      { name: "DP World Finale", time: "10:00 AM - 6:30 PM", venue: "G102-G103" },
      { name: "Startup Expo", time: "9:00 AM - 11:00 PM", venue: "Library Lawns" },
      { name: "Internship Drive", time: "9:00 AM - 6:30 PM", venue: "F201, F202" },
      { name: "GR Finals", time: "12:00 PM - 6:00 PM", venue: "F104" },
      { name: "Teen Tycoons", time: "9:00 AM - 5:00 PM", venue: "F204-F208" },
      { name: "AI Tech Panel", time: "1:00 PM - 3:00 PM", venue: "F103" },
      { name: "Design Workshop", time: "10:00 AM - 2:30 PM", venue: "F102" },
      { name: "Entrepreneurship Workshop", time: "3:00 PM - 8:00 PM", venue: "F102" },
      { name: "SEED", time: "12:00 PM - 2:30 PM", venue: "G204" },
      { name: "Risk Management", time: "9:00 AM - 6:30 PM", venue: "G107" },
      { name: "I3 Parents", time: "9:00 AM - 5:00 PM", venue: "F203" },
      { name: "Creating Value Through Innovation, Storytelling, and Social Impact: Women Panel", time: "3:00 PM - 4:00 PM", venue: "F103", description: "Panelists: Ms. Shaily Mehrotra (CEO & Founder, FixDerma and judge at Shark Tank Season 5), Ms. Nidhi Saxena (Founder of Delulu), Ms. Shanthala Veigas (Senior Director-TiE Hyderabad)" },
      { name: "TVF Panel", time: "4:00 PM - 5:00 PM", venue: "Audi", description: "Speakers: Siddharth Nigam, Nidhi Bhanushali" },
      { name: "Tech Gyan Workshop", time: "9:00 AM - 4:30 PM" },
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

      <div className="max-w-7xl mx-auto relative z-10">
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
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
            >
              {/* Left Column - Day Info */}
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-2">
                  <span
                    className="text-sm font-black uppercase tracking-widest transition-colors duration-1000"
                    style={{ color: scheduleData[activeTab].accent }}
                  >
                    {scheduleData[activeTab].date}
                  </span>
                  <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white/90 leading-[0.9] tracking-tighter lg:max-w-sm">
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
                        {scheduleData.map((_, i) => (
                          <div key={i} className={`w-3 h-1 rounded-full ${i === activeTab ? 'bg-[#d4ff00]' : 'bg-white/10'}`} />
                        ))}
                      </div>
                      <Star className="text-white/20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Timeline */}
              <div className="lg:col-span-7">
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
                        {event.description && (
                          <p className="text-xs md:text-sm text-white/40 mt-2 max-w-xl group-hover:text-white/60 transition-colors font-sans">
                            {event.description}
                          </p>
                        )}
                        {event.venue && (
                          <div className="flex items-center gap-2 mt-3 opacity-40 group-hover:opacity-100 transition-opacity">
                            <MapPin size={12} className="text-[#d4ff00]" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4ff00]">{event.venue}</span>
                          </div>
                        )}
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
