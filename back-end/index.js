const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const json = require("body-parser").json;
const server = express();
const port = 8080;
server.use(cors());
server.use(json());

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    // size: "S" | "M" | "L",
    // color: "red" | "green" | "black",
    details: Object,
    image: { type: String, required: true },
    images: { type: [String], required: true },
  },
  { timestamps: true }
);
const Product = new mongoose.model("Product", productSchema);

const cartSchema = new Schema(
  {
    items: { type: [Object], default: [] },
    userId: { type: String, default: 1 },
  },
  { timestamps: true }
);
const Cart = new mongoose.model("Cart", cartSchema);

const userSchema = new Schema(
  {
    name: {type: String},
    email: {type: String},
    addresses: [Object],
    orders: [{type: Schema.Types.ObjectId, ref: "Order"}],
  },
  { timestamps: true }
);
const User = new mongoose.model("User", userSchema)

const orderSchema = {
  items: [Object],
  shipping_charges: Number,
  discount_in_percent: Number,
  shipping_address: Object,
  total_items: Number,
  total_cost: Number,
};

const Order = new mongoose.model("Order", orderSchema)

// db connection

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  console.log("database connected");
}
server.get("/products", async (req, res) => {
  await Product.find({})
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});
// server.get("/createUser", (req, res) => {
//   let user = new User({
//     name: "Nadeem Abbas",
//     email: "demo@gmail.come",
//     orders: [],
//     addresses: []
//   })
//   user.save().then(usr => {
//     res.send(usr)
//   })
// });
server.post("/cart", (req, res) => {
  const userId = "65d24ba788e2783b7047e431"; // this will be solved by sessions
  const item = req.body.item;
  if (!item.quantity) {
    item.quantity = 1;
  }
  Cart.findOne({ userId: userId }).then((result) => {
    if (result) {
      console.log(result, "resultt");
      const itemIndex = result.items.findIndex((it) => it._id == item._id);
      if (itemIndex >= 0) {
        result.items.splice(itemIndex, 1, item);
      } else {
        result.items.push(item);
      }
      result.save().then((success) => {
        res.send(success);
      });
    } else {
      let cart = new Cart();
      cart.userId = userId;
      cart.items = [item];
      cart.save().then((success) => {
        res.send(success);
      });
    }
  });
});
server.get("/cart", (req, res) => {
  const userId = "65d24ba788e2783b7047e431";
  Cart.findOne({ userId: userId }).then((result) => {
    if (result) {
     res.send(result)
    } else ({userId:userId, items:[]})
  });
});
server.post("/removeItem", (req, res) => {
  const userId = "65d24ba788e2783b7047e431";
  const item = req.body.item
  Cart.findOne({ userId: userId }).then((result) => {
    const itemIndex = result.items.findIndex((it) => it._id == item._id);
    console.log(itemIndex, "itemIndexxxx")
    result.items.splice(itemIndex, 1)
    result.save().then((cart) => {
      res.send(cart);
    });
  });
});
server.post("/emptyCart", (req, res) => {
  const userId = "65d24ba788e2783b7047e431";
  const item = req.body.item
  Cart.findOne({ userId: userId }).then((result) => {
    const itemIndex = result.items.findIndex((it) => it._id == item._id);
    console.log(itemIndex, "itemIndexxxx")
    result.items.splice(itemIndex, 1)
    result.save().then((cart) => {
      res.send(cart);
    });
  });
});
server.get("/user", (req, res) => {
  User.findOne({}).populate('orders').then(usr => {
  res.send(usr)
}).catch(err => {
  console.log(err)
})
})
server.post("/updateUserAddress", (req, res) => {
  const userId = "65d24ba788e2783b7047e431";
  const address = req.body.address;
  User.findOneAndUpdate({ userId: userId}).then((user) => {
    user.addresses.push(address);
    user.save().then((user) => {
      res.send(address);
    });
  });
})
server.post("/order", (req, res) => {
  const userId = "65d24ba788e2783b7047e431";
  const order = req.body.order;

  let newOrder = new Order(order)
  newOrder.save().then(savedOrder => {
    User.findOneAndUpdate({ userId: userId}).then((user) => {
      user.orders.push(savedOrder._id);
      user.save().then((user) => {
        res.send(order);
      });
    });
  })
})

server.listen(port, () => {
  console.log(`Example app listening on port : ${port}`);
});
