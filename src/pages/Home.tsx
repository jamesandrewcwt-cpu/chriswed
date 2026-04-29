import Hero from '../components/sections/Hero';
import OurStory from '../components/sections/OurStory';
import Venue from '../components/sections/Venue';
import FAQ from '../components/sections/FAQ';
import Blessings from '../components/sections/Blessings';
import Footer from '../components/sections/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-10">
        <OurStory />
        <Venue />
        <FAQ />
        <Blessings />
        <Footer />
      </div>
    </>
  );
}
