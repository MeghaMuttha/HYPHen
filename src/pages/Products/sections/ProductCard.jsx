import './ProductGrid.css'

const ProductCard = ({ product }) => {
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductCard;
