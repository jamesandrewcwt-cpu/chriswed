import { motion } from 'framer-motion';
import Footer from '../components/sections/Footer';
import { weddingData } from '../data/content';

export default function Travel() {
  return (
    <div className="bg-bg-primary pt-32 min-h-screen transition-colors duration-500">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-accent-secondary opacity-70 uppercase tracking-[0.4em] text-[10px] mb-8 block transition-colors duration-500">
            Guest Support
          </span>
          <h1 className="text-5xl md:text-8xl font-display text-accent-primary italic transition-colors duration-500">
            Travel & Stay.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {weddingData.accommodation.hotels.map((hotel, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="premium-card"
            >
              <h3 className="text-2xl font-display text-accent-primary mb-4 transition-colors duration-500">{hotel.name}</h3>
              <p className="text-white/40 mb-8 font-light">{hotel.distance}</p>
              <a href={hotel.link} className="minimal-button !px-8 !py-3">Book Stay</a>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 space-y-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {/* Air */}
            <div className="space-y-6">
              <h3 className="text-xl font-display text-accent-primary border-b border-border-subtle pb-4 transition-colors duration-500">By Air</h3>
              <div className="space-y-2">
                <p className="text-accent-primary font-medium transition-colors duration-500">{weddingData.travel.air.airport}</p>
                <p className="text-accent-secondary opacity-60 font-light text-sm transition-colors duration-500">{weddingData.travel.air.distance}</p>
                <p className="text-accent-secondary opacity-60 font-light text-sm mt-4 leading-relaxed transition-colors duration-500">
                  {weddingData.travel.air.description}
                </p>
              </div>
            </div>

            {/* Train */}
            <div className="space-y-6">
              <h3 className="text-xl font-display text-accent-primary border-b border-border-subtle pb-4 transition-colors duration-500">By Train</h3>
              <div className="space-y-2">
                <p className="text-accent-primary font-medium transition-colors duration-500">{weddingData.travel.train.station}</p>
                <p className="text-accent-secondary opacity-60 font-light text-sm leading-relaxed transition-colors duration-500">
                  {weddingData.travel.train.description}
                </p>
              </div>
            </div>

            {/* Road */}
            <div className="space-y-6">
              <h3 className="text-xl font-display text-accent-primary border-b border-border-subtle pb-4 transition-colors duration-500">By Road</h3>
              <div className="space-y-2">
                <p className="text-accent-secondary opacity-60 font-light text-sm leading-relaxed transition-colors duration-500">
                  {weddingData.travel.road.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
