import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage'; 
import FounderPage from '../pages/Founder/FounderPage';
import ProductPage from '../pages/Products/ProductsPage';
import ReviewsPage from '../pages/Reviews/ReviewsPage';
import LoginPage from '../pages/Login/LoginPage';
import ProductDetailPage from '../pages/Products/sections/ProductDetailPage';
import SignUpPage from '../pages/Login/SignUpPage';
const RoutesMain = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/founder" element={<FounderPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default RoutesMain;
