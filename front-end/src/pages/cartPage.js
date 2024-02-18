import { useDispatch, useSelector } from "react-redux";
import {
  changeOrderWithCart,
  changeQuantityAC,
  removeItemAC,
} from "../action/index.js";
import { Cart } from "../components/cart";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import { useEffect } from "react";

export const CartPage = () => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cart.items);
  const order = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(changeOrderWithCart(cartItem));
  }, [cartItem]);

  const changeQuantity = (quantity, item) => {
    dispatch(changeQuantityAC({ ...item, quantity: parseInt(quantity) }))
  };
  const removeItem = (cart) => {
    dispatch(removeItemAC(cart))
  };
  return (
    <div>
      <Header cartCount={cartItem.length} />
      <Cart
        items={cartItem}
        order={order}
        changeQuantity={changeQuantity}
        removeItem={removeItem}
      />
      <Footer />
    </div>
  );
};
