import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
  imageUrl: string;
}

export const ProductImage: React.FC<Props> = ({ imageUrl, className }) => {
  return (
    <div className={className}>
      <Image
        width={300}
        height={300}
        src={imageUrl}
        alt="product"
        className="relative left-2 top-2 transition-all z-10 duration-300"
      />
    </div>
  );
};
