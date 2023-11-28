const products = [
  {
    id: "1",
    name: "Pulpa Durazno",
    category: "jugos",
    price: "2.500",
    stock: 50,
    description: "Concentrados de fruta sin calorías",
    image: "/img/durazno.jpg",
  },
  {
    id: "2",
    name: "Vinagre Blanco",
    category: "sucedaneos",
    price: "2.500",
    stock: 50,
    description: "Vinagre de uva blanca",
    image : "/img/blanco.jpg",
  },
  {
    id: "3",
    name: "Pulpa Frambueza",
    category: "jugos",
    price: "2.500",
    stock: 50,
    description: "Concentrados de fruta sin calorías",
    image: "/img/frambueza.jpg",
  },
  {
    id: "4",
    name: "Vinagre Tinto",
    category: "sucedaneos",
    price: "2.500",
    stock: 50,
    description: "Concentrados de uva roja",
    image : "/img/tinto.jpg",
  },
  {
    id: "5",
    name: "Pulpa Piña",
    category: "jugos",
    price: "2.500",
    stock: 50,
    description: "Concentrados de fruta sin calorías",
    image: "/img/pina.jpg",
  },
  {
    id: "6",
    name: "Sucedáneo Limón",
    category: "sucedaneos",
    price: "2.500",
    stock: 50,
    description: "Sucedáneo de limón",
    image : "/img/limon.jpg",
  },
  {
    id: "7",
    name: "Pulpa Frutilla",
    category: "jugos",
    price: "2.500",
    stock: 50,
    description: "Concentrados de fruta sin calorías",
    image: "/img/frambueza.jpg",
  },
  {
    id: "8",
    name: "Sucedáneo Limón",
    category: "sucedaneos",
    price: "2.500",
    stock: 50,
    description: "Sucedáneo de limón",
    image : "/img/limon.jpg",
  }
];

export const mFetch=() => {
  return new Promise ((res, rej) => {
      setTimeout(() =>{
          res(products)
      }, 500)
  })
}

export const mFetchUnique=(id)=> {
  return new Promise((res,rej)=>{
      const p = products.find(prod => prod.id ===id)
      console.log(p)
      setTimeout(() =>{
          res(p)
      },500)
  })
}