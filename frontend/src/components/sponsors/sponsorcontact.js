import React from "react";
import { motion } from "framer-motion";
import ChromaGrid from "../Teams/ChromaGrid";
import shihab from "../../assets/por_photos/shihab.jpg";
import akshat_kumar from "../../assets/por_photos/akshat_kumar.jpeg";
import akshat_ajmera from "../../assets/por_photos/akshat_ajmera.jpeg";

const ContactSection = () => {
  const guestRelationsContacts = [
    {
      id: 1,
      name: "Shihab Saiyad",
      role: "Chairman",
      image: shihab,
      email: "f20230223@hyderabad.bits-pilani.ac.in",
      phone: "+91 9347270686",
      linkedin: "https://www.linkedin.com/in/shihab-saiyad/",
    },
    {
      id: 2,
      name: "Akshat Kumar",
      role: "Execution Head",
      image: akshat_kumar,
      email: "",
      linkedin: "https://www.linkedin.com/in/akshat-kumar-a898a61a7/",
    },
    {
      id: 3,
      name: "Akshat Ajmera",
      role: "Tech Head",
      image: akshat_ajmera,
      email: "f20230141@hyderabad.bits-pilani.ac.in",
      phone: "+91 9636211800",
      linkedin: "https://www.linkedin.com/in/akshatajmera07/",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black py-16 flex flex-col items-center justify-center">
      {/* Overall Heading */}
      <motion.h1
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 text-center mb-12 font-syne"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sponsorships Handled By
      </motion.h1>

      <div className="max-w-4xl mx-auto flex justify-center scale-90 sm:scale-95">
        <ChromaGrid
          columns={3}
          rows={1}
          radius={250}
          damping={0.45}
          fadeOut={0.6}
          items={guestRelationsContacts.map((m) => {
            const handle = m.linkedin
              ? m.linkedin.split("/").filter(Boolean).pop()
              : m.name.replace(/\s/g, "").toLowerCase();

            const role = (m.role || "").toLowerCase();
            let gradient = "linear-gradient(135deg, rgba(107,95,255,0.2), rgba(212,255,0,0.2))";
            let borderColor = "#6b5fff";

            if (role.includes("chairman") || role.includes("president")) {
              gradient = "linear-gradient(135deg, rgba(212,255,0,0.28), rgba(107,95,255,0.24))";
              borderColor = "#d4ff00";
            } else if (role.includes("tech") || role.includes("execution")) {
              gradient = "linear-gradient(135deg, rgba(107,95,255,0.26), rgba(212,255,0,0.18))";
              borderColor = "#8b7fff";
            }

            return {
              title: m.name,
              subtitle: m.role,
              image: m.image,
              handle: handle ? `@${handle.substring(0, 15)}` : undefined,
              url: m.linkedin,
              phone: m.phone,
              email: m.email,
              gradient,
              borderColor,
              imgStyle: { objectPosition: "center" }
            };
          })}
        />
      </div>
    </div>
  );
};

export default ContactSection;
