import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import { ProductDetails } from "../components/product-details";
import { useParams } from "react-router-dom";
import { addToCartAC } from "../action/index.js";
export const ProductDetailsPage = () => {
  const param = useParams()
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);
  const product = useSelector((state) => state.product.products);
  const findById = product.find(item => item.id === parseInt(param.id))

  const addToCard = (product) => {
    dispatch(addToCartAC(product))
    // dispatch({ type: CHANGED_ITEM_IN_CART, payload: item });
  };

  return (
    <>
      <Header cartCount={cartItem.length} />
      <h2>Product Details Page</h2>
      <ProductDetails productDetail= {findById} addToCard={addToCard}/>
      <Footer />
    </>
  );
};
