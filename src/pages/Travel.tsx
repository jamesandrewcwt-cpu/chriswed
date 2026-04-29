import { motion } from 'framer-motion';
import Footer from '../components/sections/Footer';
import { weddingData } from '../data/content';

export default function Travel() {
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
            Guest Support
          </span>
          <h1 className="text-5xl md:text-8xl font-display text-white italic">
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
              <h3 className="text-2xl font-display text-white mb-4">{hotel.name}</h3>
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
              <h3 className="text-xl font-display text-white border-b border-white/10 pb-4">By Air</h3>
              <div className="space-y-2">
                <p className="text-white font-medium">{weddingData.travel.air.airport}</p>
                <p className="text-white/40 font-light text-sm">{weddingData.travel.air.distance}</p>
                <p className="text-white/40 font-light text-sm mt-4 leading-relaxed">
                  {weddingData.travel.air.description}
                </p>
              </div>
            </div>

            {/* Train */}
            <div className="space-y-6">
              <h3 className="text-xl font-display text-white border-b border-white/10 pb-4">By Train</h3>
              <div className="space-y-2">
                <p className="text-white font-medium">{weddingData.travel.train.station}</p>
                <p className="text-white/40 font-light text-sm leading-relaxed">
                  {weddingData.travel.train.description}
                </p>
              </div>
            </div>

            {/* Road */}
            <div className="space-y-6">
              <h3 className="text-xl font-display text-white border-b border-white/10 pb-4">By Road</h3>
              <div className="space-y-2">
                <p className="text-white/40 font-light text-sm leading-relaxed">
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
