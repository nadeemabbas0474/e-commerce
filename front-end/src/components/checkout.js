import { useState } from "react";
export const Checkout = ({ order, user, addAddress, setAddressShipt, placeOrder }) => {
  const blabk_address = {
    first_name: "",
    last_name: "",
    phone: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    pin_code: "",
  };
  const [address, setAddress] = useState(blabk_address);

  const validationHandler = (address) => {
    if (
      !address.first_name ||
      !address.last_name ||
      !address.phone ||
      !address.address1 ||
      !address.address2 ||
      !address.country ||
      !address.state ||
      !address.pin_code
    ) {
      alert("Fileds Required");
    } else {
      setAddress(address);
      addAddress(address);
    }
  };
  return (
    <div className="container mb-5">
      <main>
        <div className="py-5 text-center">
          <h2>Checkout</h2>
        </div>

        <div className="row g-3">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge bg-secondary rounded-pill">
                {order.total_items}
              </span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Total</h6>
                  <small className="text-muted">Cart Items</small>
                </div>
                <span className="text-muted">${order.total_cost}</span>
              </li>

              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <small className="text-muted">Shipping Charge</small>
                </div>
                <span className="text-muted">${order.shipping_charges}</span>
              </li>

              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <small className="text-muted">Discount</small>
                </div>
                <span className="text-muted">
                  -${(order.total_cost * order.discount_in_percent) / 100}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>
                  $
                  {order.total_cost -
                    (order.total_cost * order.discount_in_percent) / 100 +
                    order.shipping_charges}
                </strong>
              </li>
            </ul>
            {order.shipping_address ? (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {order.shipping_address.first_name +
                      " " +
                      order.shipping_address.last_name}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted ">
                    {order.shipping_address.address1},{" "}
                    {order.shipping_address.address2},{" "}
                    {order.shipping_address.state},{" "}
                    {order.shipping_address.country},{" "}
                    {order.shipping_address.pin_code}
                  </h6>
                  <p className="card-text">{order.shipping_address.phone}</p>
                </div>
              </div>
            ) : null}
          </div>

          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Shipping address</h4>
            {user.addresses.map((item) => (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {item.first_name + " " + item.last_name}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted ">
                    {item.address1}, {item.address2}, {item.state},{" "}
                    {item.country}, {item.pin_code}
                  </h6>
                  <p className="card-text">{item.phone}</p>
                  <input
                    type="radio"
                    name="address"
                    id=""
                    onClick={(e) => setAddressShipt(item)}
                  />{" "}
                  Use this Address
                </div>
              </div>
            ))}

            <hr className="my-4" />
            <h5>OR</h5>

            <h4 className="mb-3">Add New Address</h4>

            <form
              className="needs-validation"
              novalidate=""
              method=""
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                validationHandler(address);
              }}
            >
              <div className="row g-3">
                <div className="col-sm-6">
                  <label for="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                    value={address.first_name}
                    onChange={(e) =>
                      setAddress({ ...address, first_name: e.target.value })
                    }
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label for="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name"
                    value={address.last_name}
                    onChange={(e) =>
                      setAddress({ ...address, last_name: e.target.value })
                    }
                    required=""
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label for="phone" className="form-label">
                    Phone <span className="text-muted"></span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter Number"
                    value={address.phone}
                    onChange={(e) =>
                      setAddress({ ...address, phone: e.target.value })
                    }
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter a valid phone for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label for="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address1"
                    placeholder="1234 Main St"
                    required="Address1"
                    value={address.address1}
                    onChange={(e) =>
                      setAddress({ ...address, address1: e.target.value })
                    }
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-12">
                  <label for="address2" className="form-label">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                    value={address.address2}
                    onChange={(e) =>
                      setAddress({ ...address, address2: e.target.value })
                    }
                  />
                </div>

                <div className="col-md-5">
                  <label for="country" className="form-label">
                    Country
                  </label>
                  <select
                    className="form-select"
                    id="country"
                    required=""
                    value={address.country}
                    onChange={(e) =>
                      setAddress({ ...address, country: e.target.value })
                    }
                  >
                    <option value="">Choose...</option>
                    <option value="Pakistan">Pakistan</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label for="state" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select"
                    id="state"
                    required=""
                    value={address.state}
                    onChange={(e) =>
                      setAddress({ ...address, state: e.target.value })
                    }
                  >
                    <option value="">Choose...</option>
                    <option value="Gilgit">Gilgit</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Multan">Multan</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label for="zip" className="form-label">
                    Pin Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pin"
                    placeholder="Pin Code"
                    required=""
                    value={address.pin_code}
                    onChange={(e) =>
                      setAddress({ ...address, pin_code: e.target.value })
                    }
                  />
                  <div className="invalid-feedback">Pin code required.</div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="row gy-3">
                <div className="col-md-6">
                  <label for="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-name"
                    placeholder=""
                    required=""
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label for="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-number"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label for="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-expiration"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <h6 className="my-0">Promo code</h6>
                <div className="col-md-3">
                  <label for="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-success btn-lg" type="submit">
                Add Address
              </button>
            </form>
            <button className="w-100 btn btn-primary mt-5 btn-lg" type="submit" onClick={e => placeOrder()}>
              Continue to checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
