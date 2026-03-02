import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useNavigate } from 'react-router-dom';
import SEO from "./common/SEO";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jgjg9c9", // Replace with your EmailJS service ID
        "template_esw9wcg", // Replace with your EmailJS template ID
        formData,
        "SM5dFgRcYcADs0HJ5" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => alert("Failed to send the message. Please try again.")
      );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-12 bg-ecell-bg text-white py-20 relative overflow-hidden">
      <SEO
        title="Contact Us | Launchpad 2026"
        description="Have questions about Launchpad 2026? Reach out to the E-Cell BITS Hyderabad team for any queries regarding the startup competition."
        keywords={['Contact Launchpad', 'E-Cell BITS Hyderabad', 'Startup Queries', 'Launchpad 2026']}
        url="https://ecellbphc.in/launchpad/contact"
      />
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-ecell-secondary/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-ecell-primary/10 blur-[150px] rounded-full"></div>
      </div>

      {/* Animated Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center text-white mb-16 font-syne relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Get in <span className="text-ecell-primary">Touch</span>
      </motion.h1>

      {/* Container for side-by-side layout */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10 items-stretch justify-center relative z-10">
        {/* Animated Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full lg:w-3/5 p-8 md:p-10 rounded-3xl shadow-2xl space-y-8 glass-dark border border-white/5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label className="block text-sm font-manrope text-gray-400 mb-2 uppercase tracking-wider">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-ecell-primary/50 focus:bg-white/10 transition-all font-manrope"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label className="block text-sm font-manrope text-gray-400 mb-2 uppercase tracking-wider">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-ecell-primary/50 focus:bg-white/10 transition-all font-manrope"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label className="block text-sm font-manrope text-gray-400 mb-2 uppercase tracking-wider">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-ecell-primary/50 focus:bg-white/10 h-48 resize-none transition-all font-manrope"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              type="submit"
              className="w-full py-5 rounded-xl text-lg font-bold uppercase tracking-wider bg-gradient-to-r from-ecell-primary to-ecell-secondary text-white shadow-lg hover:shadow-ecell-primary/50 transform hover:-translate-y-1 transition-all duration-300 font-manrope"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>

        {/* Right Column - Startup Connect and Contact Details */}
        <div className="w-full lg:w-2/5 space-y-6 flex flex-col">
          {/* Startup Connect Section */}
          <motion.div
            className="p-8 rounded-3xl glass-dark border border-white/5 text-center flex-1 flex flex-col justify-center items-center relative overflow-hidden group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-ecell-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="space-y-6 relative z-10">
              <h2 className="text-3xl font-bold text-white font-syne">Are You a Startup?</h2>
              <p className="text-gray-300 font-manrope leading-relaxed">
                Connect with E-Cell BITS Pilani Hyderabad Campus and tap into our vast ecosystem.
              </p>
              <button
                className="btn-premium px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase"
                onClick={() => navigate('/startup-connect')}
              >
                Connect Now
              </button>
            </div>
          </motion.div>

          {/* Contact Details Section */}
          <motion.div
            className="p-8 rounded-3xl glass-dark border border-white/5 flex-1 flex flex-col justify-center relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-ecell-primary mb-6 font-syne uppercase tracking-wider">Contact Info</h2>
            <div className="space-y-4 text-gray-300 font-manrope">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Address</span>
                <p className="font-semibold text-white">BITS Pilani, Hyderabad Campus</p>
                <p>Hyderabad, Telangana 500078</p>
              </div>

              <div className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:ecell@hyderabad.bits-pilani.ac.in" className="text-white hover:text-ecell-primary transition-colors font-semibold">
                  ecell@hyderabad.bits-pilani.ac.in
                </a>
              </div>

              <div className="flex flex-col space-y-2">
                <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</span>

                <p className="flex justify-between items-center bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                  <span className="text-white">Priyansh</span>
                  <a href="tel:+917440532400" className="text-ecell-primary hover:text-white transition">+91 7440532400</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
