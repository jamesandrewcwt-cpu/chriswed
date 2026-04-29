import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Blessings() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "9585842193"; // Using the coordinator's number provided
    const text = `Blessing from ${name}: ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section className="section-container bg-bg-primary border-t border-border-subtle transition-colors duration-500">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="w-16 h-16 rounded-full border border-border-subtle flex items-center justify-center mx-auto mb-8">
            <Heart className="w-6 h-6 text-accent-secondary" />
          </div>
          <span className="text-accent-secondary uppercase tracking-[0.4em] text-[10px] mb-8 block opacity-70">
            Share Your Love
          </span>
          <h2 className="text-5xl md:text-6xl font-display text-accent-primary italic transition-colors duration-500">
            Blessings.
          </h2>
          <p className="text-accent-secondary font-light mt-6 italic opacity-80">
            Your prayers and wishes mean the world to us.
          </p>
        </motion.div>

        <form onSubmit={handleWhatsAppSubmit} className="space-y-8">
          <div className="relative">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="YOUR NAME"
              className="w-full bg-transparent border-b border-border-subtle py-4 text-accent-primary placeholder:text-accent-secondary/30 focus:outline-none focus:border-accent-primary transition-colors tracking-widest text-xs"
            />
          </div>
          
          <div className="relative">
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="YOUR MESSAGE / PRAYER"
              className="w-full bg-transparent border-b border-border-subtle py-4 text-accent-primary placeholder:text-accent-secondary/30 focus:outline-none focus:border-accent-primary transition-colors tracking-widest text-xs resize-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="minimal-button w-full md:w-auto"
          >
            Send via WhatsApp
          </motion.button>
          
          <p className="text-[10px] uppercase tracking-widest text-accent-secondary opacity-40 pt-4">
             Instant delivery to the family
          </p>
        </form>
      </div>
    </section>
  );
}
