import { yourEssentials } from './data';
import ProductCategory from './ProductionCategory';
import './ProductSection.css'

const ProductSection = () => {
  return (
    <div className="product-section">
      <ProductCategory
        categoryName="Your Essentials"
        subcategories={yourEssentials} // this is an array of subcategories
      />
    </div>
  );
};

export default ProductSection;
