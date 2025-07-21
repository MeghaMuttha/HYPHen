
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your configuration
// import './utils/gsapConfig';
// import './styles/globals.css';
// import './styles/responsive.css';

// Import the new Navbar
import Navbar from './components/common/Navbar/Navbar';
import Routes from './routes/RoutesMain';
import Footer from './components/common/Footer/Footer';

// Placeholder components (create these later)

// const AboutPage = () => <div style={{height: '100vh', padding: '100px 20px'}}>About Page</div>;
// const ProductsPage = () => <div style={{height: '100vh', padding: '100px 20px'}}>Products Page</div>;
// const LoginPage = () => <div style={{height: '100vh', padding: '100px 20px'}}>Login Page</div>;
// const ReviewsPage = () => <div style={{height: '100vh', padding: '100px 20px'}}>Reviews Page</div>;
// const FounderPage = () => <div style={{height: '100vh', padding: '100px 20px'}}>Founder Page</div>;

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