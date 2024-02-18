import { Orders } from "../components/order";

import { useDispatch, useSelector } from "react-redux";
import { CHANGE_ORDER_CART, changeOrderWithCart } from "../action/index.js";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import { useEffect } from "react";
export const OrderPage = () => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cart.items);
  const order = useSelector((state) => state.orders);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(changeOrderWithCart(cartItem));
  }, [cartItem]);

  return (
    <>
      <Header cartCount={cartItem.length} />
      <h2>My Orders</h2>
      {user? user?.orders.map((order) => (
        <Orders items={order.items} order={order} />
      )): null}
      <Footer />
    </>
  );
};
