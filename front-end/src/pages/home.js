import ProductList from "../components/product-list.js";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import Carousel from "../components/carousel.js";
import Footer from "../components/footer";
import { addToCartAC, intializeCartsAC, intializeProductsAC, intializeUserAC } from "../action/index.js";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const addToCard = (product) => {
    dispatch(addToCartAC(product))
  };

  useEffect(() => {
    dispatch(intializeUserAC());
    dispatch(intializeProductsAC());
  
  }, []);
  const products = useSelector((state) => state.product.products);
  const cartItem = useSelector((state) => state.cart.items);
  return (
    <div>
      <Header cartCount={cartItem.length} />
      <Carousel />
      <ProductList products={products} addToCard={addToCard} />
      <Footer />
    </div>
  );
};

export default Home;
