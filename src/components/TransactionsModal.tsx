import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';

interface Transaction {
    id: string;
    name: string;
    mobile: string;
    place: string;
    date: string;
    time: string;
    amount: string;
    isMalayalam?: boolean;
}

interface TransactionsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const mockTransactions: Transaction[] = [
    {
        id: 'TXN001',
        name: 'അനുഭാവി',
        mobile: '98765 43210',
        place: 'PUTHANANGADI TOWN',
        date: '25/02/2026',
        time: '04:09 PM',
        amount: '100',
        isMalayalam: true
    },
    {
        id: 'TXN002',
        name: 'sameer ap',
        mobile: '90480 11223',
        place: 'PALAKAPARAMBU',
        date: '25/02/2026',
        time: '04:02 PM',
        amount: '100'
    },
    {
        id: 'TXN003',
        name: 'Abdul Kareem K',
        mobile: '81130 99887',
        place: 'PARIYARAM (WARD 3)',
        date: '25/02/2026',
        time: '03:57 PM',
        amount: '100'
    }
];

export const TransactionsModal = ({ isOpen, onClose }: TransactionsModalProps) => {
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
                        <div className="bg-white px-6 py-6 flex items-center gap-4 border-b border-gray-100">
                            <button
                                onClick={onClose}
                                className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-brand-primary hover:bg-gray-100 transition-colors"
                                aria-label="Back"
                            >
                                <ArrowLeft size={24} />
                            </button>
                            <h2 className="flex-1 text-2xl font-black text-brand-primary text-center">Transactions</h2>
                            <div className="w-12" /> {/* Spacer */}
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
                            {/* Search Bar */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search Mobile/Transaction ID"
                                    className="w-full h-14 bg-white rounded-full px-8 pr-14 shadow-sm border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-secondary/10 transition-all text-sm font-bold text-gray-500 placeholder:text-gray-300"
                                />
                                <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-primary/40" size={20} />
                            </div>

                            {/* Transactions List */}
                            <div className="space-y-4 pb-10">
                                {mockTransactions.map((txn) => (
                                    <motion.div
                                        key={txn.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-white rounded-[30px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 relative group"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-2 text-[14px] font-bold text-gray-400 w-full max-w-[75%]">
                                                <div className="flex items-start">
                                                    <span className="w-20 flex-shrink-0">Name</span>
                                                    <span className="mx-2 text-gray-200">:</span>
                                                    <span className="text-brand-secondary font-black truncate">{txn.name}</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="w-20 flex-shrink-0">Mobile</span>
                                                    <span className="mx-2 text-gray-200">:</span>
                                                    <span className="text-gray-800 font-black">{txn.mobile}</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="w-20 flex-shrink-0">Place</span>
                                                    <span className="mx-2 text-gray-200">:</span>
                                                    <span className="text-gray-800 font-black uppercase">{txn.place}</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="w-20 flex-shrink-0">Date</span>
                                                    <span className="mx-2 text-gray-200">:</span>
                                                    <span className="text-gray-800 font-black uppercase text-[12px]">{txn.date}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-end gap-1">
                                                <div className="text-3xl font-black text-brand-primary leading-none">₹{txn.amount}</div>
                                                <div className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{txn.time}</div>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex justify-end">
                                            <button className="bg-gradient-to-r from-brand-secondary to-[#B2171D] text-white px-10 py-3 rounded-full text-sm font-black shadow-lg shadow-brand-secondary/20 hover:scale-105 transition-transform active:scale-95 leading-none">
                                                Receipt
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
