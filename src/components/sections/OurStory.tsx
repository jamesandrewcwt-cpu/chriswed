import { motion } from 'framer-motion';
import { weddingData } from '../../data/content';

export default function OurStory() {
  return (
    <section className="section-container bg-black min-h-[70vh] flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center md:text-left"
        >
          <span className="text-white/30 uppercase tracking-[0.4em] text-[10px] mb-12 block">
            {weddingData.story.title}
          </span>
          
          <h2 className="text-4xl md:text-6xl font-display text-white mb-16 leading-tight italic">
            "Introduced by family, connected by choice."
          </h2>
          
          <div className="relative">
            <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent hidden md:block" />
            <p className="text-lg md:text-2xl font-light leading-relaxed text-white/50 first-letter:text-white first-letter:font-display">
              {weddingData.story.content}
            </p>
          </div>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 2 }}
            className="h-px bg-white/5 mt-20" 
          />
        </motion.div>
      </div>
    </section>
  );
}
