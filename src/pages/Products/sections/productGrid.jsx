import './ProductGrid.css';
import { useNavigate } from 'react-router-dom';

const ProductGrid = ({ products }) => {
  const navigate = useNavigate();

  const handleClick = (product) => {
    // This navigates to the product detail page with the product ID
    // and passes the whole product object as route state
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="product-grid">
      {products.map((prod) => (
        <div className="product-card" key={prod.id} onClick={() => handleClick(prod)}>
          <img src={prod.image} alt={prod.name} className="product-img" />
          <h3>{prod.name}</h3>
          <p>{prod.description}</p>
          <p className="price">{prod.price}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
