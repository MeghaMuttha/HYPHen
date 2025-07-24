import { useLocation } from 'react-router-dom';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { state } = useLocation();
  const product = state?.product;

  if (!product) {
    return <div className="product-not-found">Product not found.</div>;
  }

 return (
    <div className="product-detail-container">
      <div className="product-image-section">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info-section">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>

        {product.ingredients && (
          <div className="product-extra-info">
            <h3>Ingredients</h3>
            <p>{product.ingredients}</p>
          </div>
        )}

        {product.benefits && (
          <div className="product-extra-info">
            <h3>Benefits</h3>
            <p>{product.benefits}</p>
          </div>
        )}

        {product.howToUse && (
          <div className="product-extra-info">
            <h3>How to Use</h3>
            <p>{product.howToUse}</p>
          </div>
        )}

        <button className="buy-now-button">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
