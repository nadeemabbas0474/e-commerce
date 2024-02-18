import {
  ADD_ADDRESS,
  CHANGED_ITEM_IN_CART,
  CHANGE_ORDER_CART,
  CHANGE_QUANTITY,
  EMPTY_CART,
  INIT_CART,
  INIT_PRODUCTS,
  INIT_USER,
  PLACE_ORDER,
  REMOVE_ITEM,
  SET_SHIP_ADDRESS,
} from "../action";

const initialState = {
  products: [
    // {
    //   id: 1,
    //   name: "Sony WX-5",
    //   price: 100.75,
    //   category: "Headphones",
    //   rating: 3,
    //   size: "S",
    //   color: "red",
    //   details: {
    //     product: "",
    //     warranty: "",
    //     merchant: "",
    //   },
    //   image: "product-1-square",
    //   images: ["product-1-2", "product-1-3", "product-1"],
    // },
    // {
    //   id: 2,
    //   name: "Apple Watch 2",
    //   price: 500.75,
    //   category: "SmartWatch",
    //   rating: 4,
    //   size: "M",
    //   color: "green",
    //   details: {
    //     product: "",
    //     warranty: "",
    //     merchant: "",
    //   },
    //   image: "product-2-square",
    //   images: ["product-2-2", "product-2-3", "product-2"],
    // },
    // {
    //   id: 3,
    //   name: "Canon WM-5",
    //   price: 300.75,
    //   category: "Camera",
    //   rating: 4,
    //   size: "L",
    //   color: "black",
    //   details: {
    //     product: "",
    //     warranty: "",
    //     merchant: "",
    //   },
    //   image: "product-3-square",
    //   images: ["product-3", "product-3-2", "product-3-3", "product-3"],
    // },
  ],
};

const initialStateCart = {
  items: [],
};

const initialStateOrder = {
  items: [],
  shipping_charges: 50,
  discount_in_percent: 10,
  shipping_address: "",
  total_items: 0,
  total_cost: 0,
};

const initialStateUser = {
  name: "Nadeem Abbas",
  email: "nadeem@gmail.com",
  addresses: [],
  orders: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const cartReducer = (state = initialStateCart, action) => {
  switch (action.type) {
    case CHANGED_ITEM_IN_CART:
      return {
        ...state,
        items: action.payload.items,
      };
    case INIT_CART:
      return {
        ...state,
        items: action.payload.items,
        userId: action.payload.userId,
      };
    // case CHANGE_QUANTITY:
    //   const oldItem = state.items.find((item) => item.id === action.payload.id);
    //   const index = state.items.indexOf(oldItem);
    //   const newItems = [...state.items];
    //   newItems[index] = action.payload;
    //   return { ...state, items: newItems };
    // case REMOVE_ITEM:
    //   const item = action.payload;
    //   const indexToRemove = state.items.findIndex((it) => it.id === item.id);
    //   if (indexToRemove !== -1) {
    //     const updatedItemsArray = [...state.items];
    //     updatedItemsArray.splice(indexToRemove, 1);
    //     return { ...state, items: updatedItemsArray };
    //   }
    case EMPTY_CART:
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const orderReducer = (state = initialStateOrder, action) => {
  switch (action.type) {
    case CHANGE_ORDER_CART:
      const items = action.payload;
      const total_items = items.reduce(
        (total, item) => total + parseInt(item.quantity),
        0
      );
      const total_cost = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      return { ...state, items: action.payload, total_cost, total_items };
    case SET_SHIP_ADDRESS:
      return { ...state, shipping_address: action.payload };
    default:
      return state;
  }
};
export const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return { ...state, addresses: [...state.addresses, action.payload] };
    case PLACE_ORDER:
      return { ...state, orders: [...state.orders, action.payload] };
    case INIT_USER:
      return action.payload ;
    default:
      return state;
  }
};

export const userShiftReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return { ...state, addresses: [...state.addresses, action.payload] };
    default:
      return state;
  }
};
