import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { productReducer, cartReducer, orderReducer, userReducer } from "./reducer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { CartPage } from "./pages/cartPage";
import { CheckoutPage } from "./pages/checkoutPage";
import { OrderPage } from "./pages/orderPage";
import { ProductDetailsPage } from "./pages/productDetailsPage";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    orders: orderReducer,
    user: userReducer,
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}></Route>
          <Route index element={<Home/>}></Route>
          <Route path="cart" element={<CartPage/>}></Route>
          <Route path="checkout" element={<CheckoutPage/>}></Route>
          <Route path="myorders" element={<OrderPage/>}></Route>
          <Route path="product/:id" element={<ProductDetailsPage/>}></Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
