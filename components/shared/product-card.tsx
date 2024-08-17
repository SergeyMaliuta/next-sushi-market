import Image from "next/image";
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { useCartStore } from "@/store";
import { Product } from "@prisma/client";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  imageUrl,
  className,
  price,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `/product/${id}`;
  };

  const addCartItem = useCartStore((state) => state.addCartItem);

  const onAddProduct = () => {
    addCartItem({
      productItemId: id,
    });
  };

  return (
    <div className={className}>
      <Link href={`/product/${id}`} onClick={handleClick}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <Image width={215} height={215} src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Rice, nori, lightly salted salmon, shrimp, mango-chili sauce, tuna
          shavings, cucumber, cream cheese
        </p>
      </Link>
      <div className="flex justify-between items-center mt-4">
        <span className="text-[20px]">
          unit <b>${price}</b>
        </span>

        <Button
          onClick={onAddProduct}
          variant="secondary"
          className="text-base font-bold"
        >
          <Plus size={20} className="mr-1" />
          Add
        </Button>
      </div>
    </div>
  );
};
