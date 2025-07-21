import { useState } from 'react';
import ProductGrid from './ProductGrid';

const ProductCategory = ({ categoryName, subcategories = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    subcategories.length > 0 ? subcategories[0].name : ''
  );

  const selectedProducts =
    subcategories.find(
      (sub) => sub.name.toLowerCase() === selectedCategory.toLowerCase()
    )?.products || [];

  return (
    <div className="product-category">
      <h2 className="category-heading">{categoryName}</h2>

      {subcategories.length > 0 ? (
        <>
          <div className="subcategory-tabs">
            {subcategories.map((sub) => (
              <button
                key={sub.name}
                className={`subcategory-tab ${
                  selectedCategory === sub.name ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(sub.name)}
              >
                {sub.name}
              </button>
            ))}
          </div>

          {selectedProducts.length > 0 ? (
            <ProductGrid products={selectedProducts} />
          ) : (
            <p>No products available for {selectedCategory}.</p>
          )}
        </>
      ) : (
        <p>No subcategories available.</p>
      )}
    </div>
  );
};

export default ProductCategory;
