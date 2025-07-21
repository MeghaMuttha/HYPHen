import { useState } from 'react';
import './ProductPage.css';
import HeroSlider from './sections/HeroSlider';
import ProductSection from './sections/ProductSection';


const ProductPage = () => {
  return (
    <div className="product-page">
      <HeroSlider />
      <ProductSection/>
    </div>
  );
};

export default ProductPage;
