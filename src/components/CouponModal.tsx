import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Trophy } from 'lucide-react';

interface CouponModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CouponModal = ({ isOpen, onClose }: CouponModalProps) => {
    const amount = '100';

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
                            <div className="relative flex justify-center items-center py-6 bg-brand-secondary/5 rounded-[40px] border-2 border-brand-secondary/20 shadow-inner mt-4">
                                <div className="text-5xl font-black text-brand-primary flex items-center gap-1">
                                    <span className="text-3xl font-black text-brand-secondary">₹</span>
                                    {amount}
                                </div>
                            </div>

                            {/* Form Fields */}
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2 px-1">Full Name</label>
                                    <input type="text" className="input-field" placeholder="Enter your name" />
                                </div>

                                <div className="flex items-center gap-3 py-1">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            id="hideName"
                                            className="peer appearance-none w-6 h-6 rounded-lg border-2 border-gray-200 checked:bg-brand-secondary checked:border-brand-secondary transition-all cursor-pointer"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-white opacity-0 peer-checked:opacity-100 transition-opacity">
                                            <Shield size={12} fill="currentColor" />
                                        </div>
                                    </div>
                                    <label htmlFor="hideName" className="text-sm font-bold text-gray-600 cursor-pointer select-none">
                                        Hide Name <span className="text-[10px] text-gray-400 font-medium ml-1">(Participate Anonymously)</span>
                                    </label>
                                </div>

                                <div>
                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2 px-1">Mobile Number</label>
                                    <input type="tel" className="input-field" placeholder="+91 00000 00000" />
                                </div>

                                <div>
                                    <label className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2 px-1">Place / Unit</label>
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
                            <button className="btn-primary w-full py-6 text-2xl flex items-center justify-center gap-4 shadow-brand-secondary/20">
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
