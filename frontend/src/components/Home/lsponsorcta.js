import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const LSponsorCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-24 px-6 overflow-hidden bg-black flex flex-col items-center justify-center text-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6B60FE]/10 blur-[150px] pointer-events-none rounded-full" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <h2 className="text-white text-4xl md:text-6xl font-bold font-syne mb-10 tracking-tighter uppercase">
                    Wanna <span className="text-[#CBF327]">Sponsor</span> <br className="hidden md:block" /> Launchpad?
                </h2>

                <button
                    onClick={() => navigate('/launchpad/sponsor/wanna-sponsor')}
                    className="group inline-flex items-center gap-3 bg-[#CBF327] px-10 py-4 rounded-full text-black text-xl font-bold transition-all duration-300 hover:scale-105 hover:bg-white"
                >
                    Learn More
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </motion.div>
        </section>
    );
};

export default LSponsorCTA;
