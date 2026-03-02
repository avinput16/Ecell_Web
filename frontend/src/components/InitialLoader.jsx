import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InitialLoader = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check if session loader has been shown
        const hasBeenShown = sessionStorage.getItem('initial_session_loader_shown');
        if (hasBeenShown) {
            setIsVisible(false);
            onComplete && onComplete();
            return;
        }

        // Show for a fixed duration
        const timer = setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('initial_session_loader_shown', 'true');
            onComplete && onComplete();
        }, 2800);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-black overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                        filter: "blur(20px)"
                    }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Atmospheric Background */}
                    <motion.div
                        className="absolute inset-0 opacity-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 1.5 }}
                    >
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6B60FE]/20 blur-[120px] rounded-full" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#CBF327]/10 blur-[120px] rounded-full" />
                    </motion.div>

                    <div className="relative flex flex-col items-center">
                        {/* Animated Logo Container */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            {/* BITS Pilani Hyderabad Campus Title */}
                            <motion.span
                                className="text-[10px] md:text-xs font-black tracking-[0.4em] text-white/40 uppercase mb-4"
                                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                                animate={{ opacity: 1, letterSpacing: "0.4em" }}
                                transition={{ delay: 0.2, duration: 1 }}
                            >
                                BITS Pilani Hyderabad Campus
                            </motion.span>

                            <div className="relative h-20 md:h-28 overflow-hidden">
                                <motion.h2
                                    className="text-5xl md:text-7xl font-bold font-syne text-white tracking-tighter"
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    ENTREPRENEURSHIP
                                </motion.h2>
                            </div>

                            <div className="relative h-16 md:h-20 overflow-hidden -mt-2">
                                <motion.h2
                                    className="text-4xl md:text-6xl font-bold font-syne text-[#CBF327] tracking-tighter"
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    CELL
                                </motion.h2>
                            </div>
                        </motion.div>

                        {/* Minimalist Progress Line */}
                        <div className="mt-12 w-32 md:w-48 h-[1px] bg-white/10 relative overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-white/60"
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: Infinity
                                }}
                            />
                        </div>
                    </div>

                    {/* Corner Labels (Aesthetic) */}
                    <div className="absolute bottom-8 left-8 hidden md:block">
                        <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">SYST_INIT_2026 // EST_2012</span>
                    </div>
                    <div className="absolute top-8 right-8 hidden md:block">
                        <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">LOADING_PROTOCOL_ACTIVE</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default InitialLoader;
