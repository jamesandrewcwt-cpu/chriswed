import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 2.5 }}
      className="fixed top-0 left-0 w-full z-[200] px-4 md:px-8 py-4 md:py-6 flex items-center justify-between backdrop-blur-md md:backdrop-blur-none bg-bg-primary/50 md:bg-transparent"
    >
      <Link to="/" className="text-accent-primary font-display italic text-lg md:text-xl tracking-tighter transition-colors duration-500">C&S</Link>
      
      <div className="flex items-center gap-4 md:gap-10">
        <Link to="/" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-accent-secondary hover:text-accent-primary transition-colors duration-500">Invitation</Link>

        <Link to="/travel" className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-accent-secondary hover:text-accent-primary transition-colors duration-500">Travel</Link>
        
        <button 
          onClick={toggleTheme}
          className="w-8 h-8 rounded-full border border-accent-primary/10 flex items-center justify-center hover:bg-accent-primary/5 transition-all duration-500 group"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-3 h-3 md:w-4 md:h-4 text-accent-secondary group-hover:text-accent-primary" />
              ) : (
                <Moon className="w-3 h-3 md:w-4 md:h-4 text-accent-secondary group-hover:text-accent-primary" />
              )}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>
    </motion.nav>
  );
}
