import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Share2, Smartphone, ShieldCheck, Trophy, CheckCircle2, Copy } from 'lucide-react';
import { SiGooglepay, SiPhonepe, SiPaytm } from 'react-icons/si';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    amount: string;
    userName: string;
}

export const PaymentModal = ({ isOpen, onClose, amount, userName }: PaymentModalProps) => {
    const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');
    const [selectedApp, setSelectedApp] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    const upiId = "9072319137@okbizaxis"; // Example GPay UPI ID format
    const upiLink = `upi://pay?pa=${upiId}&pn=MAS%20CLUB&am=${amount}&cu=INR`;

    const upiApps = [
        { name: 'Google Pay', short: 'GPay', id: '9072319137', color: '#4285F4', Icon: SiGooglepay },
        { name: 'PhonePe', short: 'PhonePe', id: '9072319137', color: '#6739B7', Icon: SiPhonepe },
        { name: 'Paytm', short: 'Paytm', id: '9072319137', color: '#00BAF2', Icon: SiPaytm }
    ];

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handlePayment = (appName: string) => {
        setSelectedApp(appName);
        setStatus('processing');

        // Simulating Backend Call
        setTimeout(() => {
            setStatus('success');
        }, 2500);
    };

    const handleClose = () => {
        setStatus('idle');
        setSelectedApp(null);
        setCopied(false);
        onClose();
    };

    // Dummy transaction ID for demonstration
    const transactionId = "TRX1234567890";

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-brand-primary/60 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="relative w-full h-full bg-[#FDFDFD] flex flex-col overflow-hidden sm:max-w-md sm:h-[90vh] sm:rounded-[40px] shadow-2xl"
                    >
                        {/* Header */}
                        <div className="bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-gray-100 sticky top-0 z-20">
                            <button
                                onClick={handleClose}
                                className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-primary hover:bg-gray-100 transition-colors"
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <h2 className="text-lg font-black text-brand-primary tracking-tight">Payment Method</h2>
                            <div className="w-10" /> {/* Spacer */}
                        </div>

                        <div className="flex-1 overflow-y-auto pb-10">
                            {/* Banner Section */}
                            <div className="relative h-48 bg-brand-primary overflow-hidden">
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
                                </div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
                                    <h1 className="text-4xl font-black tracking-tighter mb-1">MAS CLUB</h1>
                                    <p className="text-[10px] font-black tracking-[0.3em] uppercase opacity-70">Mannarmala Ground Project</p>
                                    <div className="mt-4 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Official UPI Payment</span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Card */}
                            <div className="px-6 -mt-8 relative z-10">
                                <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 flex flex-col items-center border border-gray-50">
                                    {/* Amount Display */}
                                    <div className="flex flex-col items-center mb-6">
                                        <div className="flex items-baseline gap-1 text-5xl font-black text-brand-primary tracking-tighter">
                                            <span className="text-2xl font-black text-brand-secondary">₹</span>
                                            {amount}
                                        </div>
                                        <div className="mt-2 text-sm font-black text-gray-400 uppercase tracking-widest">{userName || 'Guest User'}</div>
                                    </div>

                                    {/* QR Code Placeholder */}
                                    <div className="relative group p-4 bg-white border-2 border-gray-50 rounded-[30px] shadow-sm mb-6">
                                        <div className="w-64 h-64 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
                                            {/* We'll use a placeholder QR image or a generated SVG */}
                                            <img
                                                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`}
                                                alt="Payment QR Code"
                                                className="w-full h-full p-2"
                                            />
                                        </div>
                                        <div className="absolute inset-0 border-2 border-brand-secondary/20 rounded-[30px] -m-1 group-hover:scale-105 transition-transform" />
                                    </div>

                                    <div className="text-center space-y-2 mb-8">
                                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">Scan or Share</span>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-start gap-3 text-left">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-1.5 shrink-0" />
                                                <p className="text-[11px] font-bold text-gray-500 leading-relaxed italic">
                                                    ഈ Qr Code ഉപയോഗിച്ച് ഒരിക്കൽ മാത്രമേ പേയ്‌മെന്റ് നടത്താൻ സാധിക്കൂ
                                                </p>
                                            </div>
                                            <div className="flex items-start gap-3 text-left">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-1.5 shrink-0" />
                                                <p className="text-[11px] font-bold text-gray-500 leading-relaxed italic">
                                                    കൂടുതൽ വിവരങ്ങൾക്കായി MAS CLUB അഡ്മിനുമായി ബന്ധപ്പെടുക.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Share Button */}
                                    <button className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 text-brand-primary px-8 py-3 rounded-full text-sm font-black transition-colors border border-gray-100">
                                        <Share2 size={16} />
                                        <span>Share Qr Code</span>
                                    </button>
                                </div>
                            </div>

                            {/* UPI Apps Selection */}
                            <div className="px-6 mt-8">
                                <div className="bg-white border-2 border-brand-secondary/5 rounded-[35px] p-6 shadow-sm overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                        <Smartphone size={100} />
                                    </div>
                                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Select UPI Apps</h3>

                                    <div className="space-y-3">
                                        {upiApps.map((app) => (
                                            <motion.button
                                                key={app.short}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handlePayment(app.name)}
                                                disabled={status !== 'idle'}
                                                className="flex items-center gap-4 px-5 py-4 rounded-[2rem] border transition-all w-full group relative overflow-hidden"
                                                style={{
                                                    backgroundColor: `${app.color}08`,
                                                    borderColor: `${app.color}20`
                                                }}
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                                                    <app.Icon size={24} style={{ color: app.color }} />
                                                </div>
                                                <div className="flex flex-col items-start leading-none">
                                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{app.short}</span>
                                                    <span className="text-sm font-black text-brand-primary tracking-tight">{app.id}</span>
                                                </div>
                                                <div
                                                    className="ml-auto w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                                                    style={{ backgroundColor: `${app.color}15`, color: app.color }}
                                                >
                                                    <ArrowLeft size={16} className="rotate-180" />
                                                </div>

                                                {status === 'processing' && selectedApp === app.name && (
                                                    <motion.div
                                                        initial={{ x: "-100%" }}
                                                        animate={{ x: "100%" }}
                                                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                                                    />
                                                )}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="px-10 mt-10">
                                <div className="flex flex-col items-center gap-2 text-center">
                                    <div className="flex items-center gap-2 text-green-600">
                                        <ShieldCheck size={16} />
                                        <span className="text-[10px] font-black uppercase tracking-widest">Secure & encrypted payment</span>
                                    </div>
                                    <p className="text-[9px] font-bold text-gray-400 leading-relaxed px-4">
                                        Make payment and wait until you get confirmation from our side.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Success Overlay */}
                        <AnimatePresence>
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center px-10 text-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", damping: 15 }}
                                        className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-8"
                                    >
                                        <CheckCircle2 size={48} />
                                    </motion.div>

                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <h2 className="text-4xl font-black text-brand-primary tracking-tighter mb-2">Payment Successful!</h2>
                                        <p className="text-gray-400 font-bold text-sm mb-10 tracking-wide uppercase">Your contribution has been received</p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="bg-gray-50 rounded-[40px] p-8 w-full border border-gray-100 mb-10"
                                    >
                                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4">Transaction Details</div>
                                        <div className="flex flex-col items-center gap-1 mb-6">
                                            <div className="text-5xl font-black text-brand-primary tabular-nums">
                                                <span className="text-2xl font-black text-brand-secondary">₹</span>
                                                {amount}
                                            </div>
                                            <div className="text-xs font-black text-brand-primary/40 uppercase tracking-widest">{userName}</div>
                                        </div>

                                        <div className="space-y-3 pt-4 border-t border-gray-200/50">
                                            <div className="flex justify-between items-center text-xs font-bold">
                                                <span className="text-gray-400">Status</span>
                                                <span className="text-green-600 uppercase tracking-widest">Completed</span>
                                            </div>
                                            <div className="flex justify-between items-center text-xs font-bold">
                                                <span className="text-gray-400">Trans ID</span>
                                                <div
                                                    className="flex items-center gap-2 cursor-pointer group/copy relative"
                                                    onClick={() => handleCopy(transactionId)}
                                                >
                                                    <span className="text-brand-primary">{transactionId}</span>
                                                    {copied ? (
                                                        <motion.span
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            className="text-[8px] bg-green-500 text-white px-1.5 py-0.5 rounded flex items-center gap-1"
                                                        >
                                                            Copied!
                                                        </motion.span>
                                                    ) : (
                                                        <Copy size={12} className="text-gray-300 group-hover/copy:text-brand-secondary transition-colors" />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.button
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        onClick={handleClose}
                                        className="btn-primary w-full py-6 text-xl shadow-green-600/20"
                                        style={{ background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)' }}
                                    >
                                        Done
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Bottom Decoration */}
                        <div className="flex justify-center mb-6">
                            <div className="flex items-center gap-1.5">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-1 h-1 rounded-full bg-gray-200" />
                                ))}
                                <Trophy size={14} className="text-brand-secondary mx-2 opacity-30" />
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-1 h-1 rounded-full bg-gray-200" />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
