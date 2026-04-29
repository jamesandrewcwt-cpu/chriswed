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
    <section className="relative h-screen w-full overflow-hidden bg-bg-primary flex items-center justify-center transition-colors duration-500">
      {/* Background Reveal Layer */}
      <div className="absolute inset-0 bg-bg-secondary" />

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
              <p className="text-[10px] uppercase tracking-[0.6em] text-accent-secondary mb-8 font-light opacity-60">
                {weddingData.couple.tagline}
              </p>
              
              <h1 className="text-4xl md:text-9xl font-display text-accent-primary mb-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 transition-colors duration-500">
                <span>{weddingData.couple.bride}</span>
                <span className="text-2xl md:text-4xl font-sans italic opacity-20">&</span>
                <span>{weddingData.couple.groom}</span>
              </h1>
              
              <div className="flex flex-col items-center space-y-4">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
                  className="w-12 h-px bg-border-subtle mb-8" 
                />
                
                <div className="space-y-4 text-center">
                  <p className="text-lg md:text-2xl font-bold tracking-[0.2em] text-accent-primary uppercase transition-colors duration-500">
                    Reception on {weddingData.event.receptionDate.toUpperCase()}
                  </p>
                  <p className="text-sm md:text-base font-semibold uppercase tracking-[0.3em] text-accent-secondary transition-colors duration-500">
                    Followed by marriage on {weddingData.event.marriageDate.toUpperCase()}
                  </p>
                </div>
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
                className="w-px h-12 bg-gradient-to-b from-border-subtle to-transparent"
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
            className="absolute inset-0 z-[100] bg-bg-primary flex items-center justify-center transition-colors duration-500"
          >
            <motion.button
              onClick={() => setIsRevealed(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              <div className="absolute -inset-8 border border-border-subtle rounded-full scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <span className="text-[10px] uppercase tracking-[0.8em] text-accent-secondary group-hover:text-accent-primary transition-colors duration-500">
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
            className="absolute inset-0 bg-bg-primary origin-top"
          />
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-0 bg-bg-primary origin-bottom"
          />
        </div>
      )}
    </section>
  );
}
