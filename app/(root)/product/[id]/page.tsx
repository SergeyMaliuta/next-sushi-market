"use client";
import { Container, ProductImage, Title } from "@/components/shared";
import { Button } from "@/components/ui";
import { prisma } from "@/prisma/prisma-client";
import { useCartStore } from "@/store";
import { notFound } from "next/navigation";
export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage imageUrl={product.imageUrl} />
        <div className="w-[490px] bg-[#FDFDFD] p-7">
          <Title
            text={product.name}
            size="md"
            className="font-extrabold mb-1"
          />
          <Button className="h-[55px] px-10 text-base rounded-[18px] w-full">
            Add to cart for ${product.price}
          </Button>
        </div>
      </div>
    </Container>
  );
}
