const products = [
  {
    id: 1,
    name: "Pulpa de fruta",
    category: "Jugos",
    price: "2.500",
    stock: 1000,
    description: "Concentrados de fruta sin calorías",
    image: "/img/durazno.jpg",
  },
  {
    id: 2,
    name: "Vinagre y sucedaneos",
    category: "Jugos",
    price: "2.500",
    stock: 1000,
    description: "Concentrados de fruta sin calorías",
    image : "/img/blanco.jpg",
  },
];

export const mFetch = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(id ? products.find((prod) => prod.id === id) : products);
    }, 2000);
  });
};
