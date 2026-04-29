import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 2.5 }}
      className="fixed top-0 left-0 w-full z-[200] px-4 md:px-8 py-4 md:py-6 flex items-center justify-between backdrop-blur-md md:backdrop-blur-none bg-black/50 md:bg-transparent"
    >
      <Link to="/" className="text-white font-display italic text-lg md:text-xl tracking-tighter">C&S</Link>
      
      <div className="flex items-center gap-4 md:gap-10">
        <Link to="/" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/40 hover:text-white transition-colors">Invitation</Link>
        <Link to="/gallery" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/40 hover:text-white transition-colors">Gallery</Link>
        <Link to="/travel" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/40 hover:text-white transition-colors">Travel</Link>
      </div>
    </motion.nav>
  );
}
