import { useState, useEffect } from 'react';
import {
  History,
  Phone,
  Play,
  Trophy,
  Info,
  ChevronRight,
  TrendingUp,
  Users,
  Shield,
  Star,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CouponModal } from './components/CouponModal';
import { TransactionsModal } from './components/TransactionsModal';
import { HistoryModal } from './components/HistoryModal';
import { PaymentModal } from './components/PaymentModal';
import { DetailsModal } from './components/DetailsModal';

import banner1 from './assets/banner/m1.jpeg';
import banner2 from './assets/banner/m2.jpeg';
import banner35 from './assets/banner/35.jpeg';
import banner45 from './assets/banner/45.jpeg';
import logo from './assets/banner/logo.PNG';

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

const Sparkle = ({ delay, className }: { delay: number; className?: string }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1, 0.5, 1, 0],
      opacity: [0, 1, 0.5, 1, 0],
      rotate: [0, 45, 90, 135, 180]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={`absolute pointer-events-none ${className}`}
  >
    <Star size={24} className="text-brand-secondary fill-brand-secondary" />
  </motion.div>
);

export default function App() {
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [isTransactionsModalOpen, setIsTransactionsModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [activeUserName, setActiveUserName] = useState('');
  const [activeAmount, setActiveAmount] = useState('100');
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [banner2, banner45, banner35, banner1];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleCouponPay = (name: string, amount: number) => {
    setActiveUserName(name);
    setActiveAmount(amount.toString());
    setIsCouponModalOpen(false);
    setIsPaymentModalOpen(true);
  };

  const aboutProject = {
    title: "About the Project",
    content: "MAS Club Mannarmala is proud to initiate the 'Grand Football Playground' project. This initiative aims to provide a state-of-the-art facility for the youth of our community to nurture their athletic talents. Your contribution through these coupons will go directly towards land acquisition, leveling, and development of a modern turf ground that meets professional standards. Let's build a better sporting future for Mannarmala together.",
    malayalam: "മന്നാർമലയുടെ കായിക സ്വപ്നങ്ങൾക്ക് ചിറകു നൽകാൻ MAS ക്ലബ്ബ് ഒരുങ്ങുന്നു. നമ്മുടെ ഭാവി തലമുറയ്ക്ക് അന്താരാഷ്ട്ര നിലവാരമുള്ള ഒരു ഫുട്ബോൾ ഗ്രൗണ്ട് ഒരുക്കുക എന്നതാണ് ഈ പദ്ധതിയുടെ ലക്ഷ്യം. നിങ്ങളുടെ ഓരോ സഹായവും നമ്മുടെ മൈതാനത്തിന്റെ അടിത്തറയാകും."
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-44">
      {/* Top Background Design - Navy Theme */}
      <div className="relative h-[600px] bg-brand-primary overflow-hidden rounded-b-[80px] shadow-2xl">
        {/* Logo-inspired accents */}
        <div className="absolute top-[-5%] right-[-5%] w-[450px] h-[450px] bg-brand-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-white/5 rounded-full blur-[80px]" />

        {/* Floating Sparkles for Wow Factor */}
        <Sparkle delay={0} className="top-20 left-[15%]" />
        <Sparkle delay={0.5} className="top-40 right-[20%]" />
        <Sparkle delay={1.2} className="bottom-20 left-[10%]" />
        <Sparkle delay={0.8} className="top-[60%] right-[15%]" />
        <Sparkle delay={2.1} className="top-10 right-[40%]" />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center pt-12 text-white text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex flex-col items-center"
          >
            {/* Small Logo Branding */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="mb-4"
            >
              <img
                src={logo}
                className="w-16 h-16 object-contain drop-shadow-[0_0_15px_rgba(227,27,35,0.4)]"
                alt="Logo"
              />
            </motion.div>

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
        </div>
      </div>

      <div className="px-6 -mt-16 space-y-10 relative z-20">

        {/* Banner Carousel - Full Image View */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative aspect-video w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white bg-black group"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center overflow-hidden"
            >
              {/* Blurred Background Layer (Premium Feel) */}
              <img
                src={banners[currentSlide]}
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                alt=""
              />

              {/* Main Image Layer (Full Image - No Cropping) */}
              <img
                src={banners[currentSlide]}
                className="relative z-10 w-full h-full object-contain"
                alt={`Banner ${currentSlide + 1}`}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-brand-secondary w-6' : 'bg-white/40'}`}
              />
            ))}
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>

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

        {/* Live Impact - Stats Section */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-brand-primary rounded-[40px] p-6 text-white overflow-hidden relative group"
          >
            <div className="absolute right-[-10%] top-[-10%] opacity-10 group-hover:scale-110 transition-transform">
              <TrendingUp size={120} />
            </div>
            <div className="relative z-10">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-2">Total Contributions</div>
              <div className="text-3xl font-black tracking-tighter sm:text-4xl">₹45,45,000</div>

              <div className="mt-4 space-y-1.5">
                <div className="flex justify-between items-end text-[10px] font-black uppercase tracking-widest">
                  <span className="text-brand-secondary">Goal: ₹70L</span>
                  <span className="opacity-60">48%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '55%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-brand-secondary rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-6 border-2 border-gray-50 shadow-xl overflow-hidden relative group"
          >
            <div className="absolute right-[-10%] top-[-10%] opacity-5 group-hover:scale-110 transition-transform text-brand-primary">
              <Users size={120} />
            </div>
            <div className="relative z-10">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 text-brand-primary/40">Supporters</div>
              <div className="text-3xl font-black tracking-tighter sm:text-4xl text-brand-primary">1,250+</div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-8 h-1 rounded-full bg-green-500" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-green-600">Growing Daily</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Supporters Love - User Impression Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-brand-secondary uppercase tracking-[0.3em]">Impressions</span>
              <h3 className="text-2xl font-black text-brand-primary tracking-tight">Supporters Love</h3>
            </div>
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-400 overflow-hidden`}>
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-4 border-white bg-brand-secondary flex items-center justify-center text-[10px] font-black text-white z-10">
                +1K
              </div>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x px-2">
            {[
              { name: "Rahul Das", loc: "Mannarmala", text: "Great initiative by MAS Club. Designing a better playground for our kids is a dream coming true!" },
              { name: "Faisal K", loc: "UAE", text: "Even from abroad, I'm happy to support my home village projects. Truly professional work." },
              { name: "Suresh P", loc: "Ex-Player", text: "The current ground lacks facilities. This project will definitely change the future of football here." }
            ].map((imp, i) => (
              <motion.div
                key={i}
                className="min-w-[280px] bg-white p-6 rounded-[35px] border border-gray-100 shadow-xl flex flex-col snap-center relative overflow-hidden"
              >
                <div className="absolute top-4 right-6 text-brand-secondary opacity-20">
                  <Quote size={40} />
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="text-brand-secondary fill-brand-secondary" />
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-500 italic leading-relaxed mb-6 flex-1">
                  "{imp.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-primary flex items-center justify-center text-white font-black text-xs">
                    {imp.name[0]}
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-sm font-black text-brand-primary">{imp.name}</span>
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{imp.loc}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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
          <button
            onClick={() => setIsDetailsModalOpen(true)}
            className="flex items-center justify-between p-5 rounded-[2.5rem] bg-brand-primary text-white shadow-xl group hover:scale-105 transition-transform duration-300 w-full"
          >
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
        <div className="flex justify-center gap-3 py-8">
          {['Privacy', 'Terms', 'Contact'].map((item) => (
            <button key={item} className="px-5 py-2.5 rounded-2xl bg-white border border-gray-100 shadow-sm text-[10px] font-black text-brand-primary uppercase tracking-widest hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 active:scale-95">
              {item}
            </button>
          ))}
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
        onPay={handleCouponPay}
      />
      <TransactionsModal
        isOpen={isTransactionsModalOpen}
        onClose={() => setIsTransactionsModalOpen(false)}
      />
      <HistoryModal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
      />
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        amount={activeAmount}
        userName={activeUserName}
      />
      <DetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
      />
    </div>
  );
}
