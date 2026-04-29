import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ExternalLink, X, Church, GlassWater } from 'lucide-react';
import { weddingData } from '../../data/content';

export default function Venue() {
  const [showMap, setShowMap] = useState(false);
  const [activeEvent, setActiveEvent] = useState<'reception' | 'marriage'>('reception');

  const currentEvent = weddingData.events[activeEvent];

  return (
    <section className="section-container bg-bg-primary transition-colors duration-500">
      {/* Event Toggle */}
      <div className="flex justify-center mb-20">
        <div className="inline-flex p-1 bg-glass-bg border border-border-subtle rounded-full backdrop-blur-xl">
          <button
            onClick={() => { setActiveEvent('reception'); setShowMap(false); }}
            className={`px-8 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-500 flex items-center gap-2 ${
              activeEvent === 'reception' ? 'bg-accent-primary text-bg-primary' : 'text-accent-secondary hover:text-accent-primary'
            }`}
          >
            <GlassWater className="w-3.5 h-3.5" /> Reception
          </button>
          <button
            onClick={() => { setActiveEvent('marriage'); setShowMap(false); }}
            className={`px-8 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-500 flex items-center gap-2 ${
              activeEvent === 'marriage' ? 'bg-accent-primary text-bg-primary' : 'text-accent-secondary hover:text-accent-primary'
            }`}
          >
            <Church className="w-3.5 h-3.5" /> Marriage
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        {/* Title Block */}
        <div className="lg:col-span-5">
          <motion.div
            key={activeEvent}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-accent-secondary uppercase tracking-[0.4em] text-[10px] mb-8 block opacity-70">
              The {currentEvent.title}
            </span>
            <h2 className="text-5xl md:text-7xl font-display text-accent-primary mb-12 italic transition-colors duration-500">
              {activeEvent === 'reception' ? 'Where we celebrate.' : 'Where we unite.'}
            </h2>
            <p className="text-accent-secondary font-light leading-relaxed mb-12 max-w-md opacity-80">
              {activeEvent === 'reception' 
                ? 'Join us for an evening of joy, family, and togetherness as we celebrate our new beginning.' 
                : 'A sacred union in the presence of God. We invite you to witness our vows and share in our prayers.'}
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center group-hover:border-accent-primary/40 transition-colors">
                  <MapPin className="w-4 h-4 text-accent-secondary" />
                </div>
                <div>
                  <h4 className="text-accent-primary text-sm uppercase tracking-widest mb-2 font-medium">Venue</h4>
                  <p className="text-accent-primary/80 font-light text-lg">{currentEvent.venue}</p>
                  <p className="text-accent-secondary font-light text-sm mt-2">{currentEvent.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center group-hover:border-accent-primary/40 transition-colors">
                  <Clock className="w-4 h-4 text-accent-secondary" />
                </div>
                <div>
                  <h4 className="text-accent-primary text-sm uppercase tracking-widest mb-2 font-medium">Timing</h4>
                  <p className="text-accent-primary/80 font-light text-lg">{currentEvent.time}</p>
                  <p className="text-accent-secondary font-light text-sm mt-2">{currentEvent.date}</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <a 
                href={currentEvent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="signature-link text-sm uppercase tracking-[0.3em] font-medium inline-flex items-center gap-4"
              >
                Open in Google Maps <ExternalLink className="w-4 h-4 opacity-30" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual/Map Block */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="h-full min-h-[500px] bg-glass-bg border border-border-subtle relative flex items-center justify-center overflow-hidden group transition-colors duration-500 rounded-3xl"
          >
            <AnimatePresence mode="wait">
              {!showMap ? (
                <motion.div
                  key={`${activeEvent}-preview`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex items-center justify-center relative"
                >
                  {/* Subtle background pattern/grid */}
                  <div className="absolute inset-0 opacity-[0.03]" 
                       style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
                  />
                  
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 rounded-full border border-border-subtle flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-1000">
                      {activeEvent === 'reception' ? <GlassWater className="w-8 h-8 text-accent-primary/10" /> : <Church className="w-8 h-8 text-accent-primary/10" />}
                    </div>
                    <p className="text-accent-primary/20 font-display italic text-2xl transition-colors duration-500">{currentEvent.venue}</p>
                  </div>

                  {/* Interaction Layer */}
                  <div 
                    onClick={() => setShowMap(true)}
                    className="absolute inset-0 flex items-center justify-center bg-overlay-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] cursor-pointer"
                  >
                     <span className="minimal-button">View Interactive Map</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={`${activeEvent}-map`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full relative"
                >
                  <iframe
                    title="Venue Map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(currentEvent.venue + ' ' + currentEvent.address)}&output=embed`}
                    className="w-full h-full border-0 grayscale invert-[0.9] hue-rotate-180"
                    allowFullScreen
                    loading="lazy"
                  />
                  <button
                    onClick={() => setShowMap(false)}
                    className="absolute top-6 right-6 w-10 h-10 bg-bg-primary/80 backdrop-blur-md border border-border-subtle rounded-full flex items-center justify-center text-accent-primary hover:bg-accent-primary hover:text-bg-primary transition-all duration-300 z-50"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
