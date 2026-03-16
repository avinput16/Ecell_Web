import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Hourglass, ArrowLeft, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScheduleSoon = () => {
    return (
        <div className="min-h-screen bg-ecell-bg py-20 md:py-32 px-6 relative overflow-hidden flex items-center justify-center">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-ecell-secondary/20 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-ecell-primary/10 blur-[150px] rounded-full" />
            </div>

            <style>{`
                .gradient-border-glass::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: 2rem; 
                    padding: 2px; 
                    background: linear-gradient(135deg, #BCFF2F, #ffffff80, #6F66FF); 
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    pointer-events: none;
                }

                @media (min-width: 768px) {
                    .gradient-border-glass::before {
                        border-radius: 3rem;
                    }
                }
            `}</style>

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="glass p-6 md:p-24 rounded-[2rem] md:rounded-[3rem] gradient-border-glass relative overflow-hidden"
                >
                    {/* Floating Time Icons */}
                    <motion.div
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 15, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 left-20 text-ecell-secondary opacity-20 hidden lg:block"
                    >
                        <Clock size={100} />
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 30, 0],
                            rotate: [0, -15, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 right-20 text-ecell-primary opacity-20 hidden lg:block"
                    >
                        <Hourglass size={100} />
                    </motion.div>

                    <div className="relative z-20 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs md:text-sm font-bold uppercase tracking-widest mb-6 md:mb-10 backdrop-blur-md"
                        >
                            <Calendar size={16} className="text-ecell-primary" /> 3rd - 5th April, 2026
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-8xl font-syne font-bold text-white mb-6 md:mb-8 leading-[0.9] uppercase tracking-tighter"
                        >
                            Schedule <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecell-primary via-white to-ecell-secondary">Unveiling Soon</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl font-manrope mb-8 md:mb-12 leading-relaxed"
                        >
                            We are curating an electrifying lineup of sessions, workshops, and networking events. Get ready to mark your calendars!
                            <br /> Till then, checkout our passes.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-6 mt-4"
                        >
                            <Link
                                to="/launchpad/passes"
                                className="px-8 py-4 rounded-xl bg-gradient-to-r from-ecell-primary to-ecell-secondary text-black font-bold hover:shadow-[0_0_20px_rgba(188,255,47,0.4)] transition-all flex items-center justify-center gap-3 group"
                            >
                                <Ticket size={20} className="group-hover:rotate-12 transition-transform" /> Checkout our Passes
                            </Link>

                            <Link
                                to="/launchpad"
                                className="px-8 py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                            >
                                <ArrowLeft size={20} /> Back to Home
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ScheduleSoon;
