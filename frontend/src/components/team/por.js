import React from "react";
import { motion } from "framer-motion";
import ChromaGrid from "../Teams/ChromaGrid";

import shihab from "../../assets/por_photos/shihab.jpg";
import darsh from "../../assets/por_photos/darsh.jpg";
import hamaid from "../../assets/por_photos/hamaid.jpg";
import manas from "../../assets/por_photos/manas.jpg";
import raungta from "../../assets/por_photos/raungta.jpg";
import akshaye from "../../assets/por_photos/akshaye.jpg";
import ayush from "../../assets/por_photos/ayush.jpg";
import akshat_ajmera from "../../assets/por_photos/akshat_ajmera.jpeg";
import akshat_kumar from "../../assets/por_photos/akshat_kumar.jpeg";
import priyansh from "../../assets/por_photos/priyansh.jpeg";
import mitesh from "../../assets/por_photos/mitesh.jpeg";
import dhruv from "../../assets/por_photos/dhruv.jpeg";
import shaan from "../../assets/por_photos/shaan.jpeg";
import gunabhirup from "../../assets/por_photos/guna.jpeg";
import sriniketh from "../../assets/por_photos/sriniketh_mulagada.jpeg";
import shahil from "../../assets/por_photos/shahil.jpeg";
import rounak from "../../assets/por_photos/rounak.jpeg";
import harshit from "../../assets/por_photos/harshit.jpeg";
const teams = [
  {
    title: "Launchpad Executives",
    members: [
      {
        name: "Shihab Saiyad",
        role: "Chairman",
        image: shihab,
        linkedin: "https://www.linkedin.com/in/shihab-saiyad/",
        email: "f20230223@hyderabad.bits-pilani.ac.in",
        phone: "+91 9347270686",
      },
      {
        name: "Akshay Srivastava",
        role: "Vice Chairman",
        image: akshaye,
        linkedin: "https://www.linkedin.com/in/akshay-srivastava-389ba92b4/",
        email: "f20230810@hyderabad.bits-pilani.ac.in",
        phone: "+91 7905668214",
      },
      {
        name: "Manas Tripathi",
        role: "Vice President",
        image: manas,
        linkedin: "https://www.linkedin.com/in/tripathi-manas/",
        email: "f20230129@hyderabad.bits-pilani.ac.in",
        phone: "+91 8756113381",
      },
      {
        name: "Divyansh Rungta",
        role: "Director of Patnerships",
        image: raungta,
        linkedin: "https://www.linkedin.com/in/divyansh-rungta-4923752b5/",
        email: "f20230241@hyderabad.bits-pilani.ac.in",
        phone: "+91 9182002030",
      },
      {
        name: "Aayush Jain",
        role: "Treasurer",
        image: ayush,
        linkedin: "https://www.linkedin.com/in/aayush-jain-56a6a9225/",
        email: "f20230507@hyderabad.bits-pilani.ac.in",
        phone: "+91 9098658361",
      },
      {
        name: "Darsh Saxena",
        role: "Director of Initiatives & Strategy",
        image: darsh,
        linkedin: "https://www.linkedin.com/in/darsh-saxena-2a1610201/",
        email: "f20230508@hyderabad.bits-pilani.ac.in",
        phone: "+91 8619338664",
      },
      {
        name: "Akshat Ajmera",
        role: "Tech Head",
        image: akshat_ajmera,
        linkedin: "https://www.linkedin.com/in/akshatajmera07/",
        email: "f20230141@hyderabad.bits-pilani.ac.in",
        phone: "+91 9636211800",
      },
      {
        name: "Mitesh Agrawal",
        role: "Media Head",
        image: mitesh,
        linkedin: "https://www.linkedin.com/in/mitesh-agrawal-2a3949327/",
        email: "f20230749@hyderabad.bits-pilani.ac.in",
        phone: "+91 8308936341",
      },

    ],
  },
  {
    title: "Launchpad Heads",
    members: [
      {
        name: "Hamaid Izhar",
        role: "Events Head",
        image: hamaid,
        linkedin: "https://www.linkedin.com/in/hamaid-izhar-9946a02a7/",
      },
      {
        name: "Akshat Kumar",
        role: "Execution Head",
        image: akshat_kumar,
        linkedin: "https://www.linkedin.com/in/akshat-kumar-a898a61a7/",
      },
      {
        name: "Priyansh Sharma",
        role: "Publicity Head",
        image: priyansh,
        linkedin: "https://www.linkedin.com/in/priyansh-sharma-/",
      },
      {
        name: "Rounak Singh",
        role: "Design Head",
        image: rounak,
        linkedin: "https://www.linkedin.com/in/rounak-singh-42800420b/",
      },
      {
        name: "Harshit Singh",
        role: "Videography Head",
        image: harshit,
        linkedin: "https://www.linkedin.com/in/harshit-singh-3a13b6295/",
      },
      {
        name: "Shahil Singh",
        role: "Photography Head",
        image: shahil,
        linkedin: "https://www.linkedin.com/in/shahilsingh/",
      },
      {
        name: "Gunabhirup Meka",
        role: "Hospitality Head",
        image: gunabhirup,
        linkedin: "https://www.linkedin.com/in/gunabhirup-meka-a673342b1/",
      },
      {
        name: "Sri Niketh Mulagada",
        role: "Hospitality Head",
        image: sriniketh,
        linkedin: "https://www.linkedin.com/in/sri-niketh-mulagada-58350b360/",
      },
      {
        name: "Shaan Sharma",
        role: "Operations Head",
        image: shaan,
        linkedin: "https://www.linkedin.com/in/shaan-sharma-358399226/",
      },
      {
        name: "Dhruv Sharma",
        role: "Operations Head",
        image: dhruv,
        linkedin: "https://www.linkedin.com/in/dhruv-sharma-296370283/",
      },
    ],
  },
];

const ContactSection = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-ecell-bg py-16 flex flex-col items-center justify-center">
      {teams.map((team) => (
        <div key={team.title} className="w-full text-center mb-12 px-4 sm:px-6 lg:px-12">
          <motion.h2
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ecell-primary to-ecell-secondary text-center mb-12 font-syne"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {team.title}
          </motion.h2>

          <div className="max-w-7xl mx-auto flex justify-center">
            <ChromaGrid
              columns={isMobile ? 1 : 3}
              rows={Math.ceil(team.members.length / 3)}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              items={team.members.map((m) => {
                const handle = m.linkedin
                  ? m.linkedin.split("/").filter(Boolean).pop()
                  : m.name.replace(/\s/g, "").toLowerCase();

                const role = (m.role || "").toLowerCase();
                let gradient = "linear-gradient(135deg, rgba(107,95,255,0.2), rgba(212,255,0,0.2))";
                let borderColor = "#6b5fff";

                if (role.includes("chairman") || role.includes("president") || role.includes("chairman")) {
                  gradient = "linear-gradient(135deg, rgba(212,255,0,0.28), rgba(107,95,255,0.24))";
                  borderColor = "#d4ff00";
                } else if (role.includes("tech") || role.includes("technical") || role.includes("design") || role.includes("videography")) {
                  gradient = "linear-gradient(135deg, rgba(107,95,255,0.26), rgba(212,255,0,0.18))";
                  borderColor = "#8b7fff";
                } else if (role.includes("media") || role.includes("publicity")) {
                  gradient = "linear-gradient(135deg, rgba(107,95,255,0.22), rgba(212,255,0,0.22))";
                  borderColor = "#6b5fff";
                } else if (role.includes("treasurer") || role.includes("operations") || role.includes("hospitality")) {
                  gradient = "linear-gradient(135deg, rgba(212,255,0,0.22), rgba(107,95,255,0.18))";
                  borderColor = "#a1ff33";
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
                  imgStyle: (() => {
                    const name = m.name.toLowerCase();

                    // Hamaid: zoom in to reduce background
                    if (name.includes("hamaid")) {
                      return { transform: "scale(1.35)", objectPosition: "center" };
                    }

                    // Dhruv: zoom in more to center face
                    if (name.includes("dhruv")) {
                      return { transform: "scale(1.3)", objectPosition: "center" };
                    }

                    // Priyansh: zoom in to make face more visible
                    if (name.includes("priyansh")) {
                      return { transform: "scale(1.4)", objectPosition: "center 20%" };
                    }

                    // Ayush, Harshit, Shaan: Align top to show face
                    if (name.includes("ayush") || name.includes("harshit") || name.includes("shaan")) {
                      return { objectPosition: "top" };
                    }

                    // Default styling for others
                    return undefined;
                  })()
                };
              })}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactSection;

