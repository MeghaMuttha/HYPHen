import ProductCard from "./ProductCard";

const ProductSubcategory = ({ subcategory }) => {
  return (
    <div className="subcategory">
      <h3>{subcategory.name}</h3>
      <div className="product-list">
        {subcategory.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSubcategory;
