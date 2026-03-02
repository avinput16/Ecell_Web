import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowDownRight } from 'lucide-react';

const SponsorshipSectionHome = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-24 px-6 overflow-hidden bg-transparent flex flex-col items-center justify-center text-center">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6B60FE]/10 blur-[150px] pointer-events-none rounded-full" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
            >
                <h2 className="text-white text-4xl md:text-7xl font-bold font-syne mb-10 tracking-tighter uppercase leading-none">
                    Wanna <span className="text-[#CBF327]">Sponsor</span> <br /> Launchpad?
                </h2>

                <button
                    onClick={() => navigate('/launchpad/sponsor/wanna-sponsor')}
                    className="group inline-flex items-center gap-3 bg-[#CBF327] px-8 py-4 rounded-full text-black text-xl font-black transition-all duration-300 hover:scale-105 hover:bg-white shadow-[0_20px_50px_rgba(203,243,39,0.2)]"
                >
                    Learn More
                    <ArrowDownRight className="w-6 h-6 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform stroke-[2.5px]" />
                </button>
            </motion.div>
        </section>
    );
};

export default SponsorshipSectionHome;
