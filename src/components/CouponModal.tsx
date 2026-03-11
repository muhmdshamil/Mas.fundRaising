import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Trophy, Plus, Minus } from 'lucide-react';

interface CouponModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPay: (name: string, amount: number) => void;
}

export const CouponModal = ({ isOpen, onClose, onPay }: CouponModalProps) => {
    const [amount, setAmount] = useState(100);
    const [name, setName] = useState('');

    const handlePay = () => {
        if (!name.trim()) return; // Simple validation
        onPay(name, amount);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-0 sm:px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-lg bg-white rounded-t-[40px] sm:rounded-[40px] shadow-2xl overflow-y-auto max-h-[85vh]"
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 flex items-center justify-center p-6 sm:p-8 border-b border-gray-50">
                            <h2 className="text-xl sm:text-2xl font-black text-brand-primary">Coupon Now</h2>
                        </div>

                        <div className="px-6 sm:px-10 pb-8 sm:pb-10 space-y-6 sm:space-y-8">
                            {/* Amount Display (Static) */}
                            <div className="relative flex justify-between items-center py-6 px-6 bg-brand-secondary/5 rounded-[30px] border-2 border-brand-secondary/20 mt-4 overflow-hidden">
                                {/* Decorative background accent */}
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/[0.02] to-transparent pointer-events-none" />

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setAmount(prev => Math.max(100, prev - 100));
                                    }}
                                    className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-brand-primary hover:bg-brand-secondary hover:text-white transition-colors duration-200 border-2 border-brand-secondary/10 disabled:opacity-30 disabled:pointer-events-none"
                                    disabled={amount <= 100}
                                >
                                    <Minus size={28} strokeWidth={3} />
                                </motion.button>

                                <div className="relative z-10 flex flex-col items-center">
                                    <span className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.2em] mb-1 opacity-60">Select Amount</span>
                                    <div className="text-5xl font-black text-brand-primary flex items-center gap-1 tabular-nums">
                                        <span className="text-2xl font-black text-brand-secondary">₹</span>
                                        {amount}
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setAmount(prev => prev + 100);
                                    }}
                                    className="relative z-10 w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-brand-primary hover:bg-brand-secondary hover:text-white transition-colors duration-200 border-2 border-brand-secondary/10"
                                >
                                    <Plus size={28} strokeWidth={3} />
                                </motion.button>
                            </div>

                            {/* Form Fields */}
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2 px-1">Full Name</label>
                                    <input
                                        type="text"
                                        className="input-field"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2 px-1">Mobile Number</label>
                                    <input type="tel" className="input-field" placeholder="+91 00000 00000" />
                                </div>

                                <div>
                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2 px-1">Place</label>
                                    <input type="text" className="input-field" placeholder="Enter your place" />
                                </div>
                            </div>

                            {/* Tips Section */}
                            <div className="space-y-4 p-6 bg-brand-primary/[0.03] rounded-[35px] border border-brand-primary/5">
                                <div className="flex items-start gap-4 text-[13px] font-bold text-brand-primary/70 italic">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-secondary flex-shrink-0 shadow-[0_0_10px_rgba(227,27,35,0.4)]" />
                                    <p>നിങ്ങളുടെ സ്ഥലം രേഖപ്പെടുത്തുക.</p>
                                </div>
                                <div className="flex items-start gap-4 text-[13px] font-bold text-brand-primary/70 italic">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-secondary flex-shrink-0 shadow-[0_0_10px_rgba(227,27,35,0.4)]" />
                                    <p>ശേഷം താഴെ വരുന്ന ലിസ്റ്റിൽ നിന്നും Unit തിരഞ്ഞെടുക്കുക.</p>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handlePay}
                                className="btn-primary w-full py-6 text-2xl flex items-center justify-center gap-4 shadow-brand-secondary/20"
                            >
                                <Trophy size={24} className="text-white animate-bounce" />
                                Pay Now
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
