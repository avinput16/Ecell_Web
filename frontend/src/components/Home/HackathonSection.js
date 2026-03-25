import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink } from 'lucide-react';

const HackathonSection = () => {
    const registrationLink = "https://knowvationlearnings.in/checkout?eventId=261a4cfb-75cc-42fe-a72c-ff7c34b1f5d5&fId=4d0a8f7f-4da0-4685-8316-ca767ad0cec8";

    return (
        <section className="hs-section">
            <div className="hs-wrap">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="hs-card"
                >
                    {/* Glows — outside overflow so they don't get clipped */}
                    <div className="hs-glow hs-glow--l" />
                    <div className="hs-glow hs-glow--r" />

                    {/* Corner accents */}
                    <span className="hs-corner hs-corner--tl" />
                    <span className="hs-corner hs-corner--tr" />
                    <span className="hs-corner hs-corner--bl" />
                    <span className="hs-corner hs-corner--br" />

                    {/* Inner layout */}
                    <div className="hs-body">

                        {/* ── LEFT ── */}
                        <div className="hs-left">
                            <motion.div
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.15, duration: 0.45 }}
                                className="hs-badge"
                            >
                                <Trophy size={13} strokeWidth={3} />
                                <span>National Level</span>
                            </motion.div>

                            <h2 className="hs-title">
                                Launchpad<br />
                                <span className="hs-title-accent">Hackathon</span>
                            </h2>

                            <p className="hs-desc">
                                Step into the ultimate arena for developers and innovators.
                                Build groundbreaking solutions and compete with top talent nationwide.
                            </p>

                            <motion.a
                                href={registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hs-cta"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.35, duration: 0.45 }}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Register Now
                                <ExternalLink size={20} strokeWidth={2.5} className="hs-cta-icon" />
                            </motion.a>
                        </div>

                        {/* ── DIVIDER ── */}
                        <div className="hs-divider" />

                        {/* ── RIGHT: Prize Pool ── */}
                        <motion.div
                            className="hs-prize"
                            initial={{ opacity: 0, scale: 0.88 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.25, duration: 0.55, type: "spring", stiffness: 120 }}
                        >
                            <span className="hs-prize-label">Prize Pool</span>
                            <span className="hs-prize-amount">₹3 Lakhs</span>
                            <div className="hs-prize-glow" />
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HackathonSection;
