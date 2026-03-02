import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Gift, Rocket } from 'lucide-react';

const CABlock = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full py-16 px-6 font-syne z-20">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="glass p-8 md:p-12 rounded-[2.5rem] border border-[#6b5fff]/20 relative overflow-hidden group cursor-pointer flex flex-col items-center"
                    onClick={() => navigate('/launchpad/campus-ambassador')}
                >
                    <div className="absolute top-0 right-0 p-6 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                        <Award size={180} className="text-[#6b5fff]" />
                    </div>
                    <div className="absolute bottom-0 left-0 p-6 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                        <Gift size={150} className="text-[#6b5fff]" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center text-center flex-1 max-w-2xl">
                        <div className="w-16 h-16 rounded-2xl bg-[#6b5fff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Gift size={32} className="text-[#6b5fff]" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-syne font-bold text-white mb-4">
                            Campus <span className="text-[#CBF327]">Ambassador</span>
                        </h2>
                        <p className="text-white/60 text-base md:text-lg font-manrope mb-8 leading-relaxed">
                            Want to attend LAUNCHPAD for free? Become a Campus Ambassador — refer friends, earn free passes & exclusive rewards including <strong className="text-white">Official Certificates</strong> and <strong className="text-white">LORs</strong> from E-Cell BPHC.
                        </p>
                        <div className="mt-auto">
                            <button
                                onClick={(e) => { e.stopPropagation(); navigate('/launchpad/campus-ambassador'); }}
                                className="px-10 py-4 rounded-xl bg-[#6b5fff] text-white font-bold hover:scale-105 transition-all duration-300 font-manrope inline-flex items-center gap-2 hover:shadow-[0_0_30px_rgba(107,95,255,0.5)] text-lg"
                            >
                                Learn More & Apply <Rocket size={20} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CABlock;
