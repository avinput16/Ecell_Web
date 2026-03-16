import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const ECellLoader = ({ onLoadingChange }) => {
    const location = useLocation();
    const [loading, setLoading] = useState(() => {
        const path = window.location.pathname;
        const isECellHome = path === '/';
        const isLPHome = path === '/launchpad';

        if (!isECellHome && !isLPHome) return false;

        const storageKey = isECellHome ? 'ecell_loader_shown' : 'lp_loader_shown';
        return !sessionStorage.getItem(storageKey);
    });

    // Notify parent whenever loading state changes
    useEffect(() => {
        if (onLoadingChange) onLoadingChange(loading);
    }, [loading, onLoadingChange]);

    useEffect(() => {
        const path = location.pathname;
        const isECellHome = path === '/';
        const isLPHome = path === '/launchpad';

        if (!isECellHome && !isLPHome) {
            setLoading(false);
            return;
        }

        const storageKey = isECellHome ? 'ecell_loader_shown' : 'lp_loader_shown';
        const hasBeenShown = sessionStorage.getItem(storageKey);

        if (hasBeenShown) {
            setLoading(false);
            return;
        }

        // Show loader and mark as shown
        setLoading(true);
        sessionStorage.setItem(storageKey, 'true');

        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, [location.pathname]);



    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden text-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Minimal Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ecell-primary/5 blur-[120px] rounded-full pointer-events-none" />

                    {/* Main Branding */}
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="relative">
                            {/* Outline Text (Base) */}
                            <h1
                                className="text-6xl md:text-8xl font-bold font-syne tracking-tighter text-transparent select-none"
                                style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)' }}
                            >
                                E-CELL
                            </h1>

                            {/* Filling Text (Animation) */}
                            <motion.h1
                                className="absolute inset-0 text-6xl md:text-8xl font-bold font-syne tracking-tighter text-white select-none overflow-hidden"
                                initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
                                animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 0.5
                                }}
                            >
                                E-CELL
                            </motion.h1>
                        </div>

                        {/* Subtext */}
                        <motion.p
                            className="mt-4 text-sm md:text-base font-manrope text-gray-400 tracking-widest uppercase"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Initiating
                        </motion.p>
                    </div>

                    {/* Simple Progress Bar */}
                    <div className="absolute bottom-12 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-ecell-primary shadow-[0_0_10px_rgba(212,255,0,0.5)]"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ECellLoader;
