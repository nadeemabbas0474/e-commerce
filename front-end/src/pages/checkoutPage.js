import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer.js";
import Header from "../components/header.js";
import { Checkout } from "../components/checkout.js";
import {addAddressAC, emptyCartAC, placeOrderAC, setAddressShiptAC } from "../action/index.js";

export const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);
  const order = useSelector((state) => state.orders);
  const user = useSelector((state) => state.user);

  const addAddress = (address) => {
    dispatch(addAddressAC(address))
  };

  const setAddressShipt = (address) => {
    dispatch(setAddressShiptAC(address))
  };
  const placeOrder = () => {
    if(order.shipping_address) {
      dispatch(placeOrderAC(order))
      dispatch(emptyCartAC())
    } else {
      alert('Choose a Shipping Address')
    }
  };
  return (
    <div>
      <Header cartCount={cartItem.length} />
      <Checkout
        order={order}
        user={user}
        addAddress={addAddress}
        setAddressShipt={setAddressShipt} placeOrder={placeOrder}
      />
      <Footer />
    </div>
  );
};
