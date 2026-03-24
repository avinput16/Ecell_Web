import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X, ExternalLink } from 'lucide-react';

const HackathonNotification = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLaunchpad, setIsLaunchpad] = useState(false);

    useEffect(() => {
        setIsLaunchpad(window.location.pathname === '/launchpad');
        // Only show if user hasn't closed it in this session
        const hasClosed = sessionStorage.getItem('hasClosedHackathonNotification');
        if (!hasClosed) {
            setIsVisible(true);
        }
    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsVisible(false);
        sessionStorage.setItem('hasClosedHackathonNotification', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 50, scale: 0.9 }}
                    className={`fixed right-4 ${isLaunchpad ? 'bottom-[9rem]' : 'bottom-4'} md:right-auto md:left-10 md:bottom-10 z-[10000]`}
                >
                    <a 
                        href="https://knowvationlearnings.in/checkout?eventId=261a4cfb-75cc-42fe-a72c-ff7c34b1f5d5&fId=4d0a8f7f-4da0-4685-8316-ca767ad0cec8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block no-underline"
                    >
                        {/* Interactive Sparkle/Glow */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#d4ff00] via-[#a3c200] to-[#d4ff00] blur-lg opacity-20 group-hover:opacity-40 animate-pulse transition duration-1000" />
                        
                        <div className="relative glass px-4 py-3 md:px-6 md:py-4 rounded-[1.5rem] md:rounded-[2rem] border border-white/20 backdrop-blur-xl flex items-center gap-4 md:gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] pr-10 md:pr-12">

                            {/* Close Button */}
                            <button 
                                onClick={handleClose}
                                className="absolute top-3 right-4 p-1 rounded-full hover:bg-white/10 text-white/30 hover:text-white transition-all z-20 pointer-events-auto"
                                title="Close"
                            >
                                <X size={14} strokeWidth={3} />
                            </button>

                            <div className="flex flex-col items-start">
                                <span className="text-[10px] md:text-xs font-syne font-bold uppercase tracking-[0.2em] text-[#d4ff00] mb-1">
                                    Launchpad Hackathon
                                </span>
                                <div className="flex flex-col leading-tight">
                                    <span className="text-sm md:text-xl font-syne font-black text-white tracking-tight">
                                        ₹3 Lakhs Prize Pool
                                    </span>
                                    <span className="text-[9px] md:text-xs font-bold text-white/40 uppercase flex items-center gap-1">
                                        Register Now <ExternalLink size={10} />
                                    </span>
                                </div>
                            </div>

                            <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />

                            <motion.div 
                                animate={{ 
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{ 
                                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                                    rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-white/5 text-[#d4ff00] shadow-inner hidden sm:flex"
                            >
                                <Trophy className="w-5 h-5 md:w-7 md:h-7" strokeWidth={2.5} />
                            </motion.div>
                        </div>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HackathonNotification;
