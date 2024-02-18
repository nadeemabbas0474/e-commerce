export const Orders = ({ items, order }) => {
  console.log(items, "items", order, "order")
  return (
    <div className="container mb-5">
      <div className="d-flex flex-row align-items-start">
        <div className="col-11 d-flex flex-column m-2">
          Order Number : {order._id}
          {items.map((item) => (
            <div className="cart-item p-3">
              <div className="d-flex flex-row">
                <img
                  className="col-2 img-fluid"
                  src={`images/${item.image}.jpg`}
                  alt=""
                />
                <div className="col-6 p-2">
                  <h5>{item.name}</h5>
                  <h6>{item.category}</h6>
                  <h5>{item.quantity}</h5>
                  <p>${item.price}</p>
                </div>
                <div
                  data-bs-toggle="modal"
                  data-bs-target="#removeItemModal"
                  className="col-2 d-flex justify-content-end align-items-start close"
                >
                  <i className="bi bi-x-circle"></i>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12">
            <p>
              <strong>Order Total :</strong>{" "}
              {order.total_cost -
                (order.total_cost * order.discount_in_percent) / 100 +
                order.shipping_charges} | <strong>Address :</strong> :{" "}
              {order.shipping_address.first_name +
                " " +
                order.shipping_address.last_name}
              , {order.shipping_address.address1},{" "}
              {order.shipping_address.address2},{" "}
              {order.shipping_address.country}, {order.shipping_address.state},{" "}
              {order.shipping_address.phone}, {order.shipping_address.pin_code}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
