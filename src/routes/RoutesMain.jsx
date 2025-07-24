import { Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage'; // ✅ You missed this
import FounderPage from '../pages/Founder/FounderPage';
import ProductPage from '../pages/Products/ProductsPage';
import ReviewsPage from '../pages/Reviews/ReviewsPage';
import LoginPage from '../pages/Login/LoginPage';
import ProductDetailPage from '../pages/Products/sections/ProductDetailPage';
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
      </Routes>
    </div>
  );
};

export default RoutesMain;
