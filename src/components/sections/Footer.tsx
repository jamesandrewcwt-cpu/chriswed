import { weddingData } from '../../data/content';

export default function Footer() {
  return (
    <footer className="bg-black py-40 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Monogram/Initial */}
        <div className="mb-20">
          <span className="text-[12vw] font-display text-white italic select-none">
            {weddingData.couple.groom.charAt(0)}{weddingData.couple.bride.charAt(0)}
          </span>
        </div>
        
        <div className="text-center space-y-12 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-display text-white italic">
            With Love, The Families.
          </h2>
          
          <div className="flex items-center justify-center gap-6 opacity-20">
             <div className="w-12 h-px bg-white" />
             <div className="w-1.5 h-1.5 rounded-full bg-white" />
             <div className="w-12 h-px bg-white" />
          </div>

          <div className="space-y-4">
            <p className="text-white/40 text-sm uppercase tracking-[0.4em] font-light">
               © {weddingData.event.year} Wedding Celebration
            </p>
            <p className="text-white/20 text-xs font-light tracking-widest leading-relaxed italic">
              Help: {weddingData.contact.person} {weddingData.contact.phone}
            </p>
          </div>

          {/* Developer Credit - Signature Style */}
          <div className="mt-24 pt-12 border-t border-white/5 w-full">
            <p className="text-xs uppercase tracking-[0.8em] text-white/20 font-light group transition-all duration-700 hover:text-white/60">
              Designed & Developed with absolute precision by 
              <br className="md:hidden" />
              <a 
                href="https://portfolio-blue-nu-31.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="signature-link italic lowercase tracking-normal text-white text-2xl ml-2"
              >
                James Andrew
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Dark Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </footer>
  );
}
