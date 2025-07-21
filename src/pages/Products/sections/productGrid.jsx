import './ProductGrid.css';

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((prod) => (
        <div className="product-card" key={prod.id}>
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
