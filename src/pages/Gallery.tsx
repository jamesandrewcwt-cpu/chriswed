import { motion } from 'framer-motion';
import Footer from '../components/sections/Footer';

export default function Gallery() {
  return (
    <div className="bg-black pt-32 min-h-screen">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-white/30 uppercase tracking-[0.4em] text-[10px] mb-8 block">
            Captured Moments
          </span>
          <h1 className="text-5xl md:text-8xl font-display text-white italic">
            Gallery.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="aspect-[4/5] bg-white/[0.02] border border-white/5 relative group overflow-hidden"
             >
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity">
                  <span className="font-display italic text-lg">Photo {i}</span>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
