import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import shihab from "../../assets/por_photos/shihab.jpg";
import ayush from "../../assets/por_photos/ayush.jpg";
import akshaye from "../../assets/por_photos/akshaye.jpg";
import darsh from "../../assets/por_photos/darsh.jpg";
import manas from "../../assets/por_photos/manas.jpg";
import raungta from "../../assets/por_photos/raungta.jpg";
import akshat from "../../assets/por_photos/akshat_ajmera.jpeg";
import mitesh from "../../assets/por_photos/mitesh.jpeg";

import ChromaGrid from "./ChromaGrid";

const teamMembers = [
  {
    name: "Shihab Saiyad",
    role: "Chairman",
    image: shihab,
    linkedin: "https://www.linkedin.com/in/shihab-saiyad/",
    email: "f20230223@hyderabad.bits-pilani.ac.in",
    phone: "+91 9347270686",
    bio: "Visionary leader passionate about entrepreneurship",
  },
  {
    name: "Akshay Srivastava",
    role: "Vice Chairman",
    image: akshaye,
    linkedin: "https://www.linkedin.com/in/akshay-srivastava-389ba92b4/",
    email: "f20230810@hyderabad.bits-pilani.ac.in",
    phone: "+91 7905668214",
    bio: "Visionary leader passionate about entrepreneurship",
  },
  {
    name: "Manas Tripathi",
    role: "Vice President",
    image: manas,
    linkedin: "https://www.linkedin.com/in/tripathi-manas/",
    email: "f20230129@hyderabad.bits-pilani.ac.in",
    phone: "+91 8756113381",
    bio: "Technology enthusiast driving digital transformation",
  },
  {
    name: "Divyansh Rungta",
    role: "Director of Patnerships",
    image: raungta,
    linkedin: "https://www.linkedin.com/in/divyansh-rungta-4923752b5/",
    email: "f20230241@hyderabad.bits-pilani.ac.in",
    phone: "+91 9182002030",
    bio: "Visionary leader passionate about entrepreneurship",
  },
  {
    name: "Aayush Jain",
    role: "Treasurer",
    image: ayush,
    linkedin: "https://www.linkedin.com/in/aayush-jain-56a6a9225/",
    email: "f20230507@hyderabad.bits-pilani.ac.in",
    phone: "+91 9098658361",
    bio: "Strategic thinker with a focus on innovation",
  },
  {
    name: "Darsh Saxena",
    role: "Director of Initiatives & Strategy",
    image: darsh,
    linkedin: "https://www.linkedin.com/in/darsh-saxena-2a1610201/",
    email: "f20230508@hyderabad.bits-pilani.ac.in",
    phone: "+91 8619338664",
    bio: "Technology enthusiast driving digital transformation",
  },
  {
    name: "Akshat Ajmera",
    role: "Tech Head",
    image: akshat,
    linkedin: "https://www.linkedin.com/in/akshatajmera07/",
    email: "f20230141@hyderabad.bits-pilani.ac.in",
    phone: "+91 9636211800",
    bio: "Strategic thinker with a focus on innovation",
  },
  {
    name: "Mitesh Agrawal",
    role: "Media Head",
    image: mitesh,
    linkedin: "https://www.linkedin.com/in/mitesh-agrawal-2a3949327/",
    email: "f20230749@hyderabad.bits-pilani.ac.in",
    phone: "+91 8308936341",
    bio: "Technology enthusiast driving digital transformation",
  },
];

const OurTeam = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section
        className="h-screen relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-center px-4 bg-black bg-opacity-50 p-8 rounded-xl">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            Our Team
          </motion.h1>
          <motion.p
            className="text-lg sm:text-2xl md:text-3xl text-gray-300"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            E - Cell 25-26
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-24 sm:bottom-28 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => {
            const teamSection = document.querySelector('section[ref]');
            teamSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            {/* Double Chevron for more immersive effect */}
            <svg
              className="w-10 h-10 text-ecell-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <svg
              className="w-10 h-10 text-ecell-primary -mt-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Team Members Section */}
      <section ref={ref} className="py-12 sm:py-24 px-4 sm:px-6 lg:px-12">
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16"
          initial="hidden"
          animate={inView && !isMobile ? "visible" : "visible"}
          variants={fadeIn}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Meet Our PORs
        </motion.h2>
        {/* ChromaGrid for PORs */}
        <div className="max-w-7xl mx-auto flex justify-center">
          <ChromaGrid
            columns={isMobile ? 1 : 3}
            rows={Math.ceil(teamMembers.length / 3)}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            items={teamMembers.map((m) => {
              // derive a simple handle from linkedin or name
              const handle = m.linkedin
                ? m.linkedin.split("/").filter(Boolean).pop()
                : m.name.replace(/\s/g, "").toLowerCase();

              // themed gradient & border by role
              const role = (m.role || "").toLowerCase();
              let gradient =
                "linear-gradient(135deg, rgba(107,95,255,0.2), rgba(212,255,0,0.2))";
              let borderColor = "#6b5fff";

              if (role.includes("president") || role.includes("chair")) {
                gradient =
                  "linear-gradient(135deg, rgba(212,255,0,0.28), rgba(107,95,255,0.24))";
                borderColor = "#d4ff00";
              } else if (role.includes("tech") || role.includes("technical")) {
                gradient =
                  "linear-gradient(135deg, rgba(107,95,255,0.26), rgba(212,255,0,0.18))";
                borderColor = "#8b7fff";
              } else if (role.includes("media") || role.includes("editorial")) {
                gradient =
                  "linear-gradient(135deg, rgba(107,95,255,0.22), rgba(212,255,0,0.22))";
                borderColor = "#6b5fff";
              } else if (role.includes("treasurer") || role.includes("operations")) {
                gradient =
                  "linear-gradient(135deg, rgba(212,255,0,0.22), rgba(107,95,255,0.18))";
                borderColor = "#a1ff33";
              }

              return {
                title: m.name,
                subtitle: m.role,
                image: m.image,
                handle: handle ? `@${handle}` : undefined,
                url: m.linkedin,
                phone: m.phone,
                email: m.email,
                linkedin: m.linkedin,
                gradient,
                borderColor,
                imgStyle: (() => {
                  const name = m.name.toLowerCase();

                  // "Middle 3" (Row 2): Divyansh Rungta, Ayush Jain, Darsh Saxena
                  // All at default scale (1.0) to avoid spacing
                  if (name.includes("rungta") || name.includes("raungta")) return undefined; // Default scale (1.0)
                  if (name.includes("darsh")) return undefined; // Default scale (1.0) for Darsh

                  // Ayush: Align top to show face
                  if (name.includes("ayush")) {
                    return { objectPosition: "top" };
                  }

                  // "All Others" (Row 1 & 3): Zoom in

                  // Row 3: Akshat Ajmera (Specific request: zoom in more + center)
                  if (name.includes("akshat ajmera")) return { transform: "scale(1.2)", objectPosition: "center" };

                  // Row 1: Manas (Previously out of frame, so moderate zoom), Shihab, Akshay
                  // Row 3: Mitesh (Default zoom in)

                  // Manas: slight zoom to reduce background but keep in frame
                  if (name.includes("manas")) return { transform: "scale(1.05)", objectPosition: "top" };

                  // Default zoom for the rest (Shihab, Akshay, Mitesh)
                  return { transform: "scale(1.15)", objectPosition: "top" };
                })()
              };
            })}
          />
        </div>
        {/* Carousel Section
      <motion.section
        ref={teamRef}
        className="py-12 sm:py-24 px-4 sm:px-6 bg-black"
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-16">
          The Architects of Our Legacy
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
            <motion.img
              src={`https://via.placeholder.com/1920x1080?text=${carouselItems[activeIndex]}`}
              alt={`Carousel item ${activeIndex}`}
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={handlePrev}
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20"
              >
                <i className="fas fa-chevron-left text-sm sm:text-xl" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20"
              >
                <i className="fas fa-chevron-right text-sm sm:text-xl" />
              </button>
            </div>
          </div>
        </div>
        
      </motion.section> */}
      </section>
    </div>
  );
};

export default OurTeam;

