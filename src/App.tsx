import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SmoothScroll } from './components/layout/SmoothScroll';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';

import Travel from './pages/Travel';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <main className="min-h-screen bg-black">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/travel" element={<Travel />} />
          </Routes>
        </main>
      </SmoothScroll>
    </Router>
  );
}

export default App;
