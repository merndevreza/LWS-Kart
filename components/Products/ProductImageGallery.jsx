"use client";
import Image from "next/image";
import { useState } from "react";

const ProductImageGallery = ({ gallery, title }) => {
  const [largeImage, setLargeImage] = useState(gallery[0]);
  const handleChangeImage = (imgUrl) => {
    setLargeImage(imgUrl);
  };
  return (
    <div>
      <Image
        src={largeImage}
        alt={title}
        className="w-full"
        width={800}
        height={400}
      />

      <div className="grid grid-cols-5 gap-4 mt-4">
        {gallery.map((imgUrl,index) => (
          <Image
            onClick={() => handleChangeImage(imgUrl)}
            key={imgUrl+index}
            src={imgUrl}
            alt={title}
            width={200}
            height={150}
            className="w-full cursor-pointer border border-primary"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
