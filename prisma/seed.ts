import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, ingredients, products } from "./constants";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "user@user.com",
        password: hashSync("123456", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "admin@admin.com",
        password: hashSync("123456", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });
  await prisma.category.createMany({
    data: categories,
  });
  await prisma.ingredient.createMany({
    data: ingredients,
  });
  await prisma.product.createMany({
    data: products,
  });
  await prisma.productItem.createMany({
    data: [
      {
        productId: 1,
        price: 1,
      },
      {
        productId: 2,
        price: 1,
      },
      {
        productId: 3,
        price: 0.6,
      },
      {
        productId: 4,
        price: 0.6,
      },
      {
        productId: 5,
        price: 0.6,
      },
      {
        productId: 6,
        price: 0.6,
      },
      {
        productId: 7,
        price: 0.6,
      },
      {
        productId: 8,
        price: 0.6,
      },
      {
        productId: 9,
        price: 20,
      },
      {
        productId: 10,
        price: 28,
      },
      {
        productId: 11,
        price: 28,
      },
      {
        productId: 12,
        price: 28,
      },
      {
        productId: 13,
        price: 28,
      },
      {
        productId: 14,
        price: 28,
      },
      {
        productId: 15,
        price: 0.6,
      },
      {
        productId: 16,
        price: 0.6,
      },
      {
        productId: 17,
        price: 0.6,
      },
      {
        productId: 18,
        price: 0.6,
      },
      {
        productId: 19,
        price: 0.6,
      },
      {
        productId: 20,
        price: 0.6,
      },
      {
        productId: 21,
        price: 1,
      },
      {
        productId: 22,
        price: 1,
      },
      {
        productId: 23,
        price: 1,
      },
      {
        productId: 24,
        price: 1,
      },
      {
        productId: 25,
        price: 1,
      },
      {
        productId: 26,
        price: 1,
      },
      {
        productId: 27,
        price: 2,
      },
      {
        productId: 28,
        price: 2,
      },
      {
        productId: 29,
        price: 2,
      },
      {
        productId: 30,
        price: 2,
      },
      {
        productId: 31,
        price: 1,
      },
      {
        productId: 32,
        price: 1,
      },
    ],
  });
  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 1,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "222222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 1,
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}
async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
