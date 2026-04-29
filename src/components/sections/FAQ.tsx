import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { weddingData } from '../../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-container bg-bg-primary border-t border-border-subtle transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-accent-secondary uppercase tracking-[0.4em] text-[10px] mb-8 block opacity-70">
            Guest Information
          </span>
          <h2 className="text-5xl md:text-7xl font-display text-accent-primary italic transition-colors duration-500">
            Questions.
          </h2>
        </motion.div>

        <div className="divide-y divide-border-subtle/50">
          {weddingData.faq.map((item, index) => (
            <div key={index} className="py-10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left flex items-center justify-between group"
              >
                <span className="text-xl md:text-2xl font-light text-accent-secondary group-hover:text-accent-primary transition-colors duration-300">
                  {item.question}
                </span>
                <div className="w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center group-hover:border-accent-primary/40 transition-colors">
                  {openIndex === index ? <Minus className="w-3 h-3 text-accent-primary" /> : <Plus className="w-3 h-3 text-accent-secondary group-hover:text-accent-primary" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 text-accent-secondary opacity-60 font-light text-lg leading-relaxed max-w-2xl transition-colors duration-500">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
