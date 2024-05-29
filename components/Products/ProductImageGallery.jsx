import Image from "next/image";

const ProductImageGallery = () => {
  return (
    <div>
      <Image
        src="../assets/images/products/product1.jpg"
        alt="product"
        className="w-full"
      />

      <div className="grid grid-cols-5 gap-4 mt-4">
        <Image
          src="../assets/images/products/product2.jpg"
          alt="product2"
          className="w-full cursor-pointer border border-primary"
        />
        <Image
          src="../assets/images/products/product3.jpg"
          alt="product2"
          className="w-full cursor-pointer border"
        />
        <Image
          src="../assets/images/products/product4.jpg"
          alt="product2"
          className="w-full cursor-pointer border"
        />
        <Image
          src="../assets/images/products/product5.jpg"
          alt="product2"
          className="w-full cursor-pointer border"
        />
        <Image
          src="../assets/images/products/product6.jpg"
          alt="product2"
          className="w-full cursor-pointer border"
        />
      </div>
    </div>
  );
};

export default ProductImageGallery;
