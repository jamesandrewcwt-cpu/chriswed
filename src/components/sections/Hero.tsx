import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../../data/content';

export default function Hero() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showTypography, setShowTypography] = useState(false);

  useEffect(() => {
    if (isRevealed) {
      const timer = setTimeout(() => setShowTypography(true), 600);
      return () => clearTimeout(timer);
    }
  }, [isRevealed]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Reveal Layer */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Main Content Reveal */}
      <AnimatePresence>
        {showTypography && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: [0.215, 0.61, 0.355, 1] }}
            className="z-10 text-center px-6"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1.2 }}
            >
              <p className="text-[10px] uppercase tracking-[0.6em] text-white/40 mb-8 font-light">
                {weddingData.couple.tagline}
              </p>
              
              <h1 className="text-4xl md:text-9xl font-display text-white mb-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <span>{weddingData.couple.bride}</span>
                <span className="text-2xl md:text-4xl font-sans italic opacity-20">&</span>
                <span>{weddingData.couple.groom}</span>
              </h1>
              
              <div className="flex flex-col items-center">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
                  className="w-12 h-px bg-white/20 mb-12" 
                />
                <p className="text-lg md:text-xl font-light tracking-[0.3em] text-white/60">
                  {weddingData.event.date.toUpperCase()}
                </p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="mt-4 text-xs md:text-sm uppercase tracking-[0.4em] text-white/30 italic"
                >
                  Followed by marriage on {weddingData.event.marriageDate}
                </motion.p>
              </div>
            </motion.div>

            {/* Subtle Scroll Cue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Monolith Overlay */}
      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <motion.button
              onClick={() => setIsRevealed(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              <div className="absolute -inset-8 border border-white/5 rounded-full scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <span className="text-[10px] uppercase tracking-[0.8em] text-white/50 group-hover:text-white transition-colors duration-500">
                Reveal Invitation
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reveal Panels (Top & Bottom) */}
      {isRevealed && (
        <div className="absolute inset-0 z-50 pointer-events-none">
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-0 bg-black origin-top"
          />
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-0 bg-black origin-bottom"
          />
        </div>
      )}
    </section>
  );
}
