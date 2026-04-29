import { weddingData } from '../../data/content';

export default function Footer() {
  return (
    <footer className="bg-bg-primary py-40 px-6 border-t border-border-subtle relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Monogram/Initial */}
        <div className="mb-20">
          <span className="text-[12vw] font-display text-accent-primary italic select-none opacity-20 transition-colors duration-500">
            {weddingData.couple.bride.charAt(0)}{weddingData.couple.groom.charAt(0)}
          </span>
        </div>
        
        <div className="text-center space-y-12 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-display text-accent-primary italic transition-colors duration-500">
            With Love, The Families.
          </h2>
          
          <div className="flex items-center justify-center gap-6 opacity-20">
             <div className="w-12 h-px bg-accent-primary" />
             <div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
             <div className="w-12 h-px bg-accent-primary" />
          </div>

          <div className="space-y-4">
            <p className="text-accent-secondary opacity-60 text-sm uppercase tracking-[0.4em] font-light transition-colors duration-500">
               © {weddingData.year} Wedding Celebration
            </p>
            <p className="text-accent-secondary opacity-40 text-xs font-light tracking-widest leading-relaxed italic transition-colors duration-500">
              Help: {weddingData.contact.person} {weddingData.contact.phone}
            </p>
          </div>

          {/* Developer Credit - Signature Style */}
          <div className="mt-24 pt-12 border-t border-border-subtle w-full">
            <p className="text-[10px] uppercase tracking-[0.6em] text-accent-secondary opacity-40 font-light group transition-all duration-700">
              Crafted with absolute precision by 
              <br className="md:hidden" />
              <a 
                href="https://portfolio-blue-nu-31.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="signature-link italic lowercase tracking-normal text-accent-primary text-3xl ml-3 transition-all duration-500 hover:scale-110 hover:opacity-100 hover:text-accent-primary inline-block relative pb-1"
              >
                James Andrew
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Dark Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
    </footer>
  );
}
