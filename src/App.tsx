import { useState } from 'react';
import {
  History,
  Phone,
  Play,
  Shield,
  Trophy,
  Info,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CouponModal } from './components/CouponModal';
import { TransactionsModal } from './components/TransactionsModal';
import { HistoryModal } from './components/HistoryModal';

// --- Types ---
interface ActionItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

// --- Components ---

const ActionItem = ({ icon, label, onClick }: ActionItemProps) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center gap-2 group p-2 hover:scale-105 transition-transform"
  >
    <div className="w-20 h-20 rounded-[2rem] bg-brand-primary shadow-xl flex items-center justify-center text-white group-hover:bg-brand-secondary transition-all duration-300 flex-shrink-0">
      {icon}
    </div>
    <span className="text-[11px] font-black text-brand-primary uppercase tracking-widest text-center max-w-[90px] leading-tight mt-2 opacity-80 group-hover:opacity-100">
      {label}
    </span>
  </button>
);

export default function App() {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [isTransactionsModalOpen, setIsTransactionsModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  const aboutProject = {
    title: "About the Project",
    content: "MAS Club Mannarmala is proud to initiate the 'Grand Football Playground' project. This initiative aims to provide a state-of-the-art facility for the youth of our community to nurture their athletic talents. Your contribution through these coupons will go directly towards land acquisition, leveling, and development of a modern turf ground that meets professional standards. Let's build a better sporting future for Mannarmala together.",
    malayalam: "മന്നാർമലയുടെ കായിക സ്വപ്നങ്ങൾക്ക് ചിറകു നൽകാൻ MAS ക്ലബ്ബ് ഒരുങ്ങുന്നു. നമ്മുടെ ഭാവി തലമുറയ്ക്ക് അന്താരാഷ്ട്ര നിലവാരമുള്ള ഒരു ഫുട്ബോൾ ഗ്രൗണ്ട് ഒരുക്കുക എന്നതാണ് ഈ പദ്ധതിയുടെ ലക്ഷ്യം. നിങ്ങളുടെ ഓരോ സഹായവും നമ്മുടെ മൈതാനത്തിന്റെ അടിത്തറയാകും."
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-44">
      {/* Top Background Design - Navy Theme */}
      <div className="relative h-[480px] bg-brand-primary overflow-hidden rounded-b-[80px] shadow-2xl">
        {/* Logo-inspired accents */}
        <div className="absolute top-[-5%] right-[-5%] w-[450px] h-[450px] bg-brand-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-white/5 rounded-full blur-[80px]" />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center pt-20 text-white text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex flex-col items-center"
          >
            {/* 7 Stars from logo */}
            <div className="flex gap-1 mb-4">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Trophy size={14} className="text-brand-secondary fill-current" />
                </motion.div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-4">
              <span className="text-sm font-black tracking-[0.4em] text-brand-secondary uppercase">FOR MANNARMALA</span>
            </div>

            <h1 className="text-7xl font-black tracking-tighter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex flex-col">
              <span className="text-brand-secondary -mb-2">MAS</span>
              <span>CLUB</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 max-w-sm"
          >
            <div className="h-1 w-20 bg-brand-secondary mx-auto rounded-full" />
            <p className="text-2xl font-black text-white leading-tight">ഫുട്ബോൾ മൈതാന ഫണ്ട് ശേഖരണം</p>
          </motion.div>

          {/* Centered Logo Frame */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.5 }}
            className="mt-10 relative"
          >
            <div className="absolute inset-0 bg-brand-secondary/40 blur-3xl scale-125" />
            <div className="w-40 h-40 bg-white rounded-[3rem] p-6 shadow-2xl relative z-10 border-[6px] border-brand-primary">
              <div className="w-full h-full flex flex-col items-center justify-center -space-y-1">
                <Shield size={64} className="text-brand-primary fill-brand-primary" />
                <TrendingUp size={32} className="text-brand-secondary absolute bottom-8 right-8 bg-white rounded-full p-1 border-2 border-brand-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-6 -mt-16 space-y-10 relative z-20">

        {/* About Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-[50px] p-10 shadow-[0_30px_60px_-15px_rgba(10,38,71,0.12)] border border-gray-50"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
              <Info size={24} />
            </div>
            <h2 className="text-2xl font-black text-brand-primary uppercase tracking-tight">{aboutProject.title}</h2>
          </div>

          <div className="space-y-6">
            <p className="text-[17px] font-bold text-brand-primary/80 leading-relaxed italic border-l-4 border-brand-secondary pl-6">
              "{aboutProject.malayalam}"
            </p>
            <p className="text-gray-500 font-medium leading-relaxed">
              {aboutProject.content}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-2xl border border-gray-100">
                <Shield size={16} className="text-brand-secondary" />
                <span className="text-xs font-black text-brand-primary uppercase">Official Initiative</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-2xl border border-gray-100">
                <Trophy size={16} className="text-brand-secondary" />
                <span className="text-xs font-black text-brand-primary uppercase">Youth Support</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-10 max-w-sm mx-auto">
          <ActionItem
            icon={<History size={32} />}
            label="All Transactions"
            onClick={() => setIsTransactionsModalOpen(true)}
          />
          <ActionItem
            icon={<TrendingUp size={32} />}
            label="My History"
            onClick={() => setIsHistoryModalOpen(true)}
          />
        </div>

        {/* Secondary Info Links */}
        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <button className="flex items-center justify-between p-5 rounded-[2.5rem] bg-brand-primary text-white shadow-xl group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Play size={16} fill="white" />
              </div>
              <span className="font-bold text-sm">How to Participate?</span>
            </div>
            <ChevronRight size={18} className="opacity-50 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="flex items-center justify-between p-5 rounded-[2.5rem] bg-white border-2 border-brand-primary/5 shadow-lg group hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4 text-brand-primary">
              <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center">
                <Phone size={16} />
              </div>
              <span className="font-bold text-sm">Support & Help</span>
            </div>
            <ChevronRight size={18} className="text-brand-primary/30 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer Policy */}
        <div className="flex justify-center gap-6 py-8">
          <button className="text-[10px] font-black text-black uppercase tracking-widest hover:text-brand-primary transition-colors">Privacy</button>
          <button className="text-[10px] font-black text-black uppercase tracking-widest hover:text-brand-primary transition-colors">Terms</button>
          <button className="text-[10px] font-black text-black uppercase tracking-widest hover:text-brand-primary transition-colors">Contact</button>
        </div>

        <div className="text-center pb-8">
          <span className="text-[10px] text-black font-black tracking-[0.5em] uppercase">MAS CLUB MANNARMALA © 2026</span>
        </div>
      </div>

      {/* Hero Action Button - Persistent Bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-[#FDFDFD] via-[#FDFDFD]/95 to-transparent z-40">
        <motion.button
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsCouponModalOpen(true)}
          className="btn-primary w-full max-w-lg mx-auto flex items-center justify-center gap-5 h-24 text-3xl shadow-[0_25px_60px_-15px_rgba(227,27,35,0.4)] relative group overflow-hidden"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-white/10 -skew-x-[45deg] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />

          <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-lg">
            <Trophy size={28} className="text-white fill-current animate-pulse" />
          </div>
          <span className="flex flex-col items-start leading-[0.8] tracking-tighter">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] opacity-80 mb-1">Empower the Youth</span>
            <span>Coupon Now</span>
          </span>
        </motion.button>
      </div>

      {/* Modals */}
      <CouponModal
        isOpen={isCouponModalOpen}
        onClose={() => setIsCouponModalOpen(false)}
      />
      <TransactionsModal
        isOpen={isTransactionsModalOpen}
        onClose={() => setIsTransactionsModalOpen(false)}
      />
      <HistoryModal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
      />
    </div>
  );
}
