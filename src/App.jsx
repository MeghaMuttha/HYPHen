
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './index.css'
import Navbar from './components/common/Navbar/Navbar';
import Routes from './routes/RoutesMain';
import Footer from './components/common/Footer/Footer';

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger on route change
    const handleRouteChange = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;