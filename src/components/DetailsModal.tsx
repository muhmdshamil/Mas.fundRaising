import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import detailsImg from '../assets/banner/details.jpeg';

interface DetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DetailsModal = ({ isOpen, onClose }: DetailsModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brand-primary"
                    />
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="relative w-full h-full bg-white shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-gray-100 sticky top-0 z-20">
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-primary hover:bg-gray-100 transition-colors"
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <h2 className="text-lg font-black text-brand-primary tracking-tight">How to Participate</h2>
                            <div className="w-10" />
                        </div>

                        {/* Image Container */}
                        <div className="flex-1 overflow-hidden bg-gray-100 flex items-center justify-center p-4 sm:p-10">
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src={detailsImg}
                                    alt="Participation Details"
                                    className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl border-4 border-white"
                                />
                            </div>
                        </div>

                        {/* Footer Info */}
                        <div className="p-8 bg-white border-t border-gray-100 text-center">
                            <p className="text-sm font-bold text-gray-500 max-w-md mx-auto leading-relaxed">
                                Follow these instructions to contribute to the MAS Club Mannarmala Playground Project.
                                For any help, contact our support team.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
