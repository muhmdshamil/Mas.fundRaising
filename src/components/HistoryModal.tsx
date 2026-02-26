import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, TrendingUp, Calendar, MapPin, Phone, User } from 'lucide-react';

interface HistoryItem {
    id: string;
    name: string;
    mobile: string;
    place: string;
    date: string;
    time: string;
    amount: string;
    status: 'success' | 'pending' | 'failed';
}

interface HistoryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const mockuserHistory: HistoryItem[] = [
    {
        id: 'TXN005',
        name: 'John Doe',
        mobile: '98765 43210',
        place: 'MANNARMALA JUNCTION',
        date: '25/02/2026',
        time: '11:45 AM',
        amount: '100',
        status: 'success'
    },
    {
        id: 'TXN012',
        name: 'John Doe',
        mobile: '98765 43210',
        place: 'MANNARMALA JUNCTION',
        date: '20/02/2026',
        time: '09:15 AM',
        amount: '500',
        status: 'success'
    },
    {
        id: 'TXN028',
        name: 'John Doe',
        mobile: '98765 43210',
        place: 'MANNARMALA JUNCTION',
        date: '15/02/2026',
        time: '02:30 PM',
        amount: '10',
        status: 'success'
    }
];

export const HistoryModal = ({ isOpen, onClose }: HistoryModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brand-primary/40 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="relative w-full h-full bg-[#f8f9fa] flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-white px-6 py-6 flex items-center gap-4 border-b border-gray-100 shadow-sm relative z-10">
                            <button
                                onClick={onClose}
                                className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-brand-primary hover:bg-gray-100 transition-colors shadow-sm"
                                aria-label="Back"
                            >
                                <ArrowLeft size={24} />
                            </button>
                            <div className="flex-1 flex flex-col items-center">
                                <h2 className="text-2xl font-black text-brand-primary">My History</h2>
                                <div className="flex items-center gap-1 text-[10px] font-black text-brand-secondary uppercase tracking-widest">
                                    <TrendingUp size={10} />
                                    <span>Your Contributions</span>
                                </div>
                            </div>
                            <div className="w-12" /> {/* Spacer */}
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-8">
                            {/* Search Section */}
                            <div className="space-y-4">
                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest px-4">Search your records</p>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        placeholder="Enter Registered Mobile Number"
                                        className="w-full h-16 bg-white rounded-[2rem] px-8 pr-14 shadow-md border border-gray-100 focus:outline-none focus:ring-4 focus:ring-brand-secondary/5 transition-all text-sm font-bold text-gray-700 placeholder:text-gray-300"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-lg">
                                        <Search size={18} />
                                    </div>
                                </div>
                            </div>

                            {/* Stats Summary */}
                            <div className="bg-brand-primary rounded-[40px] p-8 text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                                <div className="relative z-10 flex justify-between items-end">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Total Contribution</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-black text-brand-secondary">₹</span>
                                            <span className="text-5xl font-black tracking-tighter">610</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Total Coupons</p>
                                        <span className="text-2xl font-black bg-white/20 px-4 py-1 rounded-full">03</span>
                                    </div>
                                </div>
                            </div>

                            {/* History List */}
                            <div className="space-y-6 pb-20">
                                <div className="flex items-center justify-between px-2">
                                    <h3 className="text-sm font-black text-brand-primary uppercase tracking-widest">Recent Activity</h3>
                                    <span className="text-[10px] font-bold text-gray-400">Showing 3 records</span>
                                </div>

                                <div className="space-y-4">
                                    {mockuserHistory.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-white rounded-[35px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-50 group hover:border-brand-secondary/30 transition-colors"
                                        >
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/5 flex items-center justify-center text-brand-primary">
                                                        <User size={20} />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-black text-gray-800 uppercase tracking-tight">{item.name}</h4>
                                                        <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
                                                            <Phone size={10} />
                                                            <span>{item.mobile}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-2xl font-black text-brand-primary leading-none">₹{item.amount}</div>
                                                    <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">Success</span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 pb-6 border-b border-gray-50">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-300 uppercase">
                                                        <MapPin size={10} />
                                                        <span>Location</span>
                                                    </div>
                                                    <p className="text-[11px] font-bold text-gray-500 uppercase">{item.place}</p>
                                                </div>
                                                <div className="space-y-1 border-l border-gray-50 pl-4">
                                                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-300 uppercase">
                                                        <Calendar size={10} />
                                                        <span>Date & Time</span>
                                                    </div>
                                                    <p className="text-[11px] font-bold text-gray-500">{item.date} • {item.time}</p>
                                                </div>
                                            </div>

                                            <div className="mt-6 flex justify-between items-center">
                                                <span className="text-[9px] font-bold text-gray-300 tracking-widest">TXN ID: {item.id}</span>
                                                <button className="flex items-center gap-2 bg-brand-primary/5 text-brand-primary px-6 py-2.5 rounded-full text-[11px] font-black hover:bg-brand-primary hover:text-white transition-all">
                                                    Download Receipt
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
