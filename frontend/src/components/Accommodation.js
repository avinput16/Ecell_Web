import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Rocket, Info, Hotel } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, widgetUrl }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl z-10 h-[80vh]"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 p-2 bg-black/10 hover:bg-black/20 text-black rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <div className="w-full h-full overflow-y-auto">
                            <iframe
                                src={widgetUrl}
                                title="Register for Launchpad 2026"
                                width="100%"
                                height="100%"
                                className="min-h-full border-0"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};


const AccommodationCard = ({ title, price, delay, onBook }) => {
    // Executive pass style (from Passes.js: position='center', isPopular=true equivalent styles)
    // Border glow for center position: 'border-[#BCFF2F] shadow-[0_0_15px_rgba(188,255,47,0.3)] hover:shadow-[0_0_25px_rgba(188,255,47,0.45)]'
    // Popular bg: 'bg-ecell-primary/5'

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            className="relative glass p-8 rounded-[2.5rem] border-2 flex flex-col h-full transition-all duration-500 group border-[#BCFF2F] shadow-[0_0_15px_rgba(188,255,47,0.3)] hover:shadow-[0_0_25px_rgba(188,255,47,0.45)] bg-ecell-primary/5"
        >
            <div className="mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 bg-ecell-primary text-black">
                    <Hotel size={28} />
                </div>
                <h3 className="text-3xl font-syne font-bold text-white mb-2">{title}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white font-manrope">₹{price}</span>
                    <span className="text-white/40 text-sm">/ person</span>
                </div>
            </div>

            {/* Details section removed */}
            <div className="flex-grow"></div>

            <button
                onClick={onBook}
                className="w-full py-4 rounded-xl font-bold text-center transition-all duration-300 transform font-manrope flex items-center justify-center gap-2 bg-ecell-primary text-black hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(212,255,0,0.5)]"
            >
                Book Now <Rocket size={18} />
            </button>
        </motion.div>
    );
};

const Accommodation = () => {
    const [selectedWidget, setSelectedWidget] = useState(null);

    const options = [
        {
            title: "1 Night Stay",
            price: "350",
            delay: 0.1,
            widgetUrl: "https://konfhub.com/widget/launchpad-2026?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=quick&screen=1&tickets=77673&ticketId=77673%7C1"
        },
        {
            title: "2 Nights Stay",
            price: "650",
            delay: 0.2,
            widgetUrl: "https://konfhub.com/widget/launchpad-2026?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=quick&screen=1&tickets=77674&ticketId=77674%7C1"
        },
        {
            title: "3 Nights Stay",
            price: "900",
            delay: 0.3,
            widgetUrl: "https://konfhub.com/widget/launchpad-2026?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=1e1f24&ticketCl=1e1f24&btnColor=002E6E&fontFamily=Hind&borderRadius=10&widget_type=standard&tickets=80102&ticketId=80102%7C1"
        }
    ];

    return (
        <div className="min-h-screen bg-ecell-bg py-32 px-6 relative overflow-hidden">
            <BookingModal
                isOpen={!!selectedWidget}
                onClose={() => setSelectedWidget(null)}
                widgetUrl={selectedWidget}
            />

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-ecell-primary/20 blur-[100px] rounded-full" />
                <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-ecell-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                    >
                        Launchpad 2026
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-syne font-bold text-white mb-6 uppercase"
                    >
                        Accommodation <span className="text-ecell-primary">Plans</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 max-w-2xl mx-auto text-lg font-manrope"
                    >
                        Comfortable and affordable stay options for your Launchpad experience.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                    {options.map((option, idx) => (
                        <AccommodationCard
                            key={idx}
                            {...option}
                            onBook={() => setSelectedWidget(option.widgetUrl)}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-2xl mx-auto glass p-6 rounded-2xl border border-white/10 flex items-start gap-4"
                >
                    <div className="p-3 bg-ecell-primary/10 rounded-xl text-ecell-primary">
                        <Info size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold font-syne mb-1">Important Note</h4>
                        <p className="text-white/60 text-sm font-manrope leading-relaxed">
                            Accommodation will be arranged in hostel common halls. Mattresses will be provided, and participants will have access to washroom facilities.
                            <br /><br />
                            Please bring your personal essentials to ensure a comfortable stay.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Accommodation;
