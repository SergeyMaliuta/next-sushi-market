export const categories = [
  { name: "Sushi" },
  { name: "Rolls" },
  { name: "Combo" },
  { name: "Baked" },
  { name: "Tempura" },
  { name: "Salads" },
  { name: "Sauces" },
];

export const ingredients = [
  {
    name: "Ginger",
    price: 1,
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_81/64895cd4bb470-450x450.png",
  },
  {
    name: "Wasabi",
    price: 1,
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_83/64896a245cec1-450x450.png",
  },
  {
    name: "Soy sauce",
    price: 1,
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_82/64895c8210ff2-450x450.png",
  },
  {
    name: "Sesame sauce",
    price: 1,
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_79/648a854e71217-450x450.png",
  },
  {
    name: "Sticks",
    price: 1,
    imageUrl: "https://i.ibb.co/QnCTrDd/64895c5e71f83-450x450.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Eel sushi",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_182/64183dc15cd59-450x450.png",
    categoryId: 1,
    price: 1,
  },
  {
    name: "Sushi with salmon",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_183/64183db917bf0-450x450.png",
    categoryId: 1,
    price: 1,
  },
  {
    name: "Philadelphia Light",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_56/64227193c6789-450x450.png",
    categoryId: 2,
    price: 1,
  },
  {
    name: "Philadelphia cucumber",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_58/642272206b959-450x450.png",
    categoryId: 2,
    price: 1,
  },
  {
    name: "Philadelphia",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_55/64227048a53d9-450x450.png",
    categoryId: 2,
    price: 1,
  },
  {
    name: "California",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_46/6422680db5177-450x450.png",
    categoryId: 2,
    price: 1,
  },
  {
    name: "Dragon",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_44/6422627686e73-450x450.png",
    categoryId: 2,
    price: 1,
  },
  {
    name: "Bonito maquis",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_42/642261f21d1ef-450x450.png",
    categoryId: 2,
    price: 1,
  },
  {
    name: "Profitable",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1525/64195a78d8c4f-450x450.png",
    categoryId: 3,
    price: 20,
  },
  {
    name: "Madagascar",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1131/641955d65219f-450x450.png",
    categoryId: 3,
    price: 28,
  },
  {
    name: "La-la-la-land",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1280/643786b18d768-450x450.png",
    categoryId: 3,
    price: 28,
  },
  {
    name: "Nemo",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1522/6419564454294-450x450.png",
    categoryId: 3,
    price: 28,
  },
  {
    name: "Django",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1523/64195adc11307-450x450.png",
    categoryId: 3,
    price: 28,
  },
  {
    name: "Shock",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1524/64195a329d841-450x450.png",
    categoryId: 3,
    price: 28,
  },

  {
    name: "Amazon",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1263/64199a627f7fe-450x450.png",
    categoryId: 4,
    price: 1,
  },
  {
    name: "Hudson",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1264/64199a225ba02-450x450.png",
    categoryId: 4,
    price: 1,
  },
  {
    name: "Bosphorus",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1265/64199a771b141-450x450.png",
    categoryId: 4,
    price: 1,
  },
  {
    name: "Congo",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1266/641999f4d97c9-450x450.png",
    categoryId: 4,
    price: 1,
  },
  {
    name: "Elba",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1267/64199abb65ea9-450x450.png",
    categoryId: 4,
    price: 1,
  },
  {
    name: "La Manche",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1268/64199a9d9ee4a-450x450.png",
    categoryId: 4,
    price: 1,
  },
  {
    name: "Eel tempura",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_2347/6657024f2025b-450x450.png",
    categoryId: 5,
    price: 1,
  },
  {
    name: "Philadelphia tempura",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_2346/66570227047bb-450x450.png",
    categoryId: 5,
    price: 1,
  },
  {
    name: "Costa Rica",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1624/6489935492022-450x450.png",
    categoryId: 5,
    price: 1,
  },
  {
    name: "Cube",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1626/648993743ed1a-450x450.png",
    categoryId: 5,
    price: 1,
  },
  {
    name: "Mexico",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1627/64899391b9386-450x450.png",
    categoryId: 5,
    price: 1,
  },
  {
    name: "Peru",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1628/648993b2a79f7-450x450.png",
    categoryId: 5,
    price: 1,
  },
  {
    name: "Salmon onigiri",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1890/641838637f358-450x450.png",
    categoryId: 6,
    price: 2,
  },
  {
    name: "Onigiri salmon teriyaki",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1891/6418386ad87bf-450x450.png",
    categoryId: 6,
    price: 2,
  },
  {
    name: "Onigiri with shrimp",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1892/6418385426450-450x450.png",
    categoryId: 6,
    price: 2,
  },
  {
    name: "Onigiri with chicken",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_1893/6418385c02ebd-450x450.png",
    categoryId: 6,
    price: 2,
  },
  {
    name: "Soy sauce",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_82/64895c8210ff2-450x450.png",
    categoryId: 7,
    price: 1,
  },
  {
    name: "Sesame sauce",
    imageUrl:
      "https://storage.yandexcloud.net/sushi-market/products/product_79/648a854e71217-450x450.png",
    categoryId: 7,
    price: 1,
  },
];
