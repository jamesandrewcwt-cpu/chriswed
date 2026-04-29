import { motion } from 'framer-motion';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { weddingData } from '../../data/content';

export default function Venue() {
  return (
    <section className="section-container bg-black">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        {/* Title Block */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-white/30 uppercase tracking-[0.4em] text-[10px] mb-8 block">
              The Location
            </span>
            <h2 className="text-5xl md:text-7xl font-display text-white mb-12 italic">
              Where we meet.
            </h2>
            <p className="text-white/40 font-light leading-relaxed mb-12 max-w-md">
              A grand setting for a grand occasion. Join us at the heart of the celebration.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
                  <MapPin className="w-4 h-4 text-white/50" />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest mb-2 font-medium">Venue</h4>
                  <p className="text-white/60 font-light text-lg">{weddingData.event.venue}</p>
                  <p className="text-white/40 font-light text-sm mt-2">{weddingData.event.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-colors">
                  <Clock className="w-4 h-4 text-white/50" />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest mb-2 font-medium">Arrival</h4>
                  <p className="text-white/60 font-light text-lg">{weddingData.event.time}</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <a 
                href={weddingData.event.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="signature-link text-sm uppercase tracking-[0.3em] font-medium inline-flex items-center gap-4"
              >
                Open in Maps <ExternalLink className="w-4 h-4 opacity-30" />
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
            className="h-full min-h-[500px] bg-white/[0.02] border border-white/[0.05] relative flex items-center justify-center overflow-hidden group"
          >
            {/* Subtle background pattern/grid */}
            <div className="absolute inset-0 opacity-[0.03]" 
                 style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} 
            />
            
            <div className="relative z-10 text-center">
              <div className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-1000">
                <MapPin className="w-8 h-8 text-white/10" />
              </div>
              <p className="text-white/20 font-display italic text-2xl">{weddingData.event.venue}</p>
            </div>

            {/* Interaction Layer */}
            <a 
              href={weddingData.event.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] cursor-pointer"
            >
               <span className="minimal-button">View Interactive Map</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
