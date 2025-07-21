import { Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage'; // ✅ You missed this
import FounderPage from '../pages/Founder/FounderPage';
import ProductPage from '../pages/Products/ProductsPage';

const RoutesMain = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/reviews" element={<ReviewsPage />} /> */}
        <Route path="/founder" element={<FounderPage />} />
      </Routes>
    </div>
  );
};

export default RoutesMain;
