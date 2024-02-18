const db = {
  products: [
    {
      id: 1,
      name: "Sony WX-5",
      price: 100.75,
      category: "Headphones",
      rating: 3,
      size: "S",
      color: "red",
      details: {
        product: "",
        warranty: "",
        merchant: "",
      },
      image: "product-1-square",
      images: ["product-1-2", "product-1-3", "product-1"],
    },
    {
      id: 2,
      name: "Apple Watch 2",
      price: 500.75,
      category: "SmartWatch",
      rating: 4,
      size: "M",
      color: "green",
      details: {
        product: "",
        warranty: "",
        merchant: "",
      },
      image: "product-2-square",
      images: ["product-2-square", "product-2-square", "product-2-square"],
    },
    {
      id: 3,
      name: "Canon WM-5",
      price: 300.75,
      category: "Camera",
      rating: 4,
      size: "L",
      color: "black",
      details: {
        product: "",
        warranty: "",
        merchant: "",
      },
      image: "product-3-square",
      images: ["product-3-square", "product-3-square", "product-3-square"],
    },
  ],
};

export default db;
