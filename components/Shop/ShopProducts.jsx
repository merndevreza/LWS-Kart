import ProductCard from "../Products/ProductCard";

const ShopProducts = ({ products }) => {
  return (
    <div className="col-span-3">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {products?.map((product) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </div>
    </div>
  );
};

export default ShopProducts;
