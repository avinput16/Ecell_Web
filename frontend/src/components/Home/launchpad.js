import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import lpLogo from '../../assets/ecell/lp_logo_new.png';
import memory1 from '../../assets/lpevents/pitcherspilot/memory1.png';
import memory2 from '../../assets/lpevents/pitcherspilot/memory2.jpg';
import memory3 from '../../assets/lpevents/pitcherspilot/memory3.png';
import memory4 from '../../assets/lpevents/pitcherspilot/memory4.png';
import memory5 from '../../assets/lpevents/pitcherspilot/memory5.png';

const events = [
  { name: "PITCHERS PILOT", link: "/launchpad/pitchers_pilot" },
  { name: "INTERNSHIP DRIVE", link: "/launchpad/internship_drive" },
  { name: "GROUND REALITY", link: "/launchpad/ground_reality" },
  { name: "STARTUP EXPO", link: "/launchpad/startup_expo" },
  { name: "TEEN TYCOONS", link: "/launchpad/teen_tycoons" },
  { name: "SEED", link: "/launchpad/seed" },
];

const carouselImages = [
  memory1,
  memory2,
  memory3,
  memory4,
  memory5
];

const VerticalMarquee = ({ items }) => {
  // Octagon has 8 sides, we need exactly 8 items to fill all faces
  // Duplicate items array until we have at least 8, then slice to exactly 8
  const fullItems = Array(Math.ceil(8 / items.length)).fill(items).flat().slice(0, 8);
  const radius = 75; // Stay close for better look

  return (
    <div className="relative h-[320px] w-full flex items-center justify-center overflow-hidden"
      style={{ perspective: '1000px' }}>
      <motion.div
        animate={{ rotateX: [0, 360] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative w-full h-[60px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {fullItems.map((item, idx) => (
          <div
            key={idx}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: `rotateX(${idx * 45}deg) translateZ(${radius}px)`,
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <a
              href={item.link}
              className="text-[24px] md:text-[48px] leading-none font-hypebuzz font-normal uppercase tracking-[2px] md:tracking-[6px] text-center bg-gradient-to-r from-[#7E74FF] via-white to-[#A1A1C2] bg-clip-text text-transparent select-none whitespace-nowrap hover:scale-105 transition-transform no-underline"
            >
              {item.name}
            </a>
          </div>
        ))}
      </motion.div>

      {/* No fade overlays - clean gradient background throughout */}

      {/* Glow for the focus area */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-16 bg-[#6F66FF]/5 blur-[60px] pointer-events-none z-10" />
    </div>
  );
};

const Launchpad = () => {
  const navigate = useNavigate();
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % carouselImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 bg-transparent text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-0 w-full max-w-[600px] aspect-square bg-[#6F66FF]/10 rounded-full blur-[120px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-full max-w-[600px] aspect-square bg-[#BCFF2F]/5 rounded-full blur-[120px] translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Launchpad Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-syne text-[#6F66FF] mb-10 md:mb-20 text-center"
        >
          Launchpad
        </motion.h2>

        {/* Logo & Description Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start md:ml-8"
          >
            <div className="w-[180px] md:w-[280px]">
              <img
                src={lpLogo}
                alt="LP'26"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left px-4 md:px-0"
          >
            <p className="text-[#BCFF2F] text-base sm:text-lg md:text-3xl font-manrope font-light leading-snug md:max-w-xl">
              Ignite entrepreneurial passion at our 3-day summit featuring industry leaders, innovative startups, and knowledge-sharing for the next generation.
            </p>
          </motion.div>
        </div>

        {/* Our Events Section */}
        <div className="w-full flex flex-col items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={() => navigate('/launchpad/events')}
            className="px-10 py-3 rounded-full border border-[#6F66FF]/30 mb-12 bg-[#6F66FF]/5 cursor-pointer hover:bg-[#6F66FF]/10 transition-colors duration-300"
          >
            <span className="text-[#6F66FF] text-xl md:text-2xl font-bold font-syne uppercase tracking-widest">Our Events</span>
          </motion.div>
          <VerticalMarquee items={events} />
        </div>

        {/* Bottom Bento Grid - Reduced size max-w-5xl */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 min-h-[300px] md:min-h-[400px]">
          {/* Carousel Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 glass-dark group h-[300px] md:h-full"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImg}
                src={carouselImages[currentImg]}
                alt=""
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>

            {/* Explore Events Button */}
            <div className="absolute bottom-6 right-6 z-10">
              <button
                onClick={() => navigate('/launchpad/events')}
                className="bg-white/95 backdrop-blur-sm text-black px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-[#BCFF2F] transition-all duration-300 shadow-xl scale-90 md:scale-100"
              >
                Explore Events <ArrowDownRight className="w-4 h-4" />
              </button>
            </div>
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Explore More Card - Reduced and more compact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => navigate('/launchpad')}
            className="md:col-span-2 border-2 border-[#BCFF2F] rounded-[2rem] md:rounded-[2.5rem] p-8 flex flex-col justify-between cursor-pointer group hover:bg-[#BCFF2F]/5 transition-all duration-300 min-h-[250px] md:min-h-full"
          >
            <div className="flex justify-end">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#BCFF2F] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#BCFF2F] transition-all duration-300">
                <ArrowUpRight className="text-[#BCFF2F] group-hover:text-black w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-syne text-[#BCFF2F] leading-[1.1]">
              Explore <br /> More About <br /> Launchpad
            </h3>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Launchpad;


