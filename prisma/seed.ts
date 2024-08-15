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
  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "123456",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "654321",
      },
    ],
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
