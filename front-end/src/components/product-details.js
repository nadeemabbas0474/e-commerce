export const ProductDetails = ({ productDetail, addToCard }) => {

  return (
    <div className="container mb-5 mt-5">
      <div className="row d-flex flex-row">
        <div className="col-md-5 product-image">
          <img
            className="img-fluid"
            src={`/images/${productDetail.image}.jpg`}
            alt={productDetail.image}
          />
        </div>
        <div className="col-md-2 product-small d-flex flex-md-column justify-content-start order-md-first">
          {productDetail.images.map((item) => (
            <img className="img-fluid" src={`/images/${item}.jpg`} alt={item} />
          ))}
        </div>

        <div className="col-md-5">
          <h6 className="text-uppercase text-secondary">
            {productDetail.name}
          </h6>
          <h2 className="fs-3">{productDetail.category}</h2>
          <h5 className="text-secondary fs-6 fw-bold">
            ${productDetail.price}
          </h5>
          <div className="text-secondary text-small">color :</div>
          <div className="my-2">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
                checked={productDetail.color == 'red'}              />
              <label className="btn btn-danger color-label" for="btnradio1">
                <i className="bi bi-check"></i>
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
                checked={productDetail.color == 'green'}   
              />
              <label className="btn btn-success color-label" for="btnradio2">
                <i className="bi bi-check2"></i>
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
                autocomplete="off"
                checked={productDetail.color == 'black'}   
              />
              <label className="btn btn-dark color-label" for="btnradio3">
                <i className="bi bi-check2"></i>
              </label>
            </div>
          </div>
          <div className="text-secondary text-small">size :</div>
          <div className="my-2">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="size"
                id="btnradio4"
                autocomplete="off"
                checked={productDetail.size== "S"}
              />
              <label className="btn btn-outline-dark" for="btnradio4">
                S
              </label>

              <input
                type="radio"
                className="btn-check"
                name="size"
                id="btnradio5"
                autocomplete="off"
                checked={productDetail.size== "M"}
              />
              <label className="btn btn-outline-dark" for="btnradio5">
                M
              </label>

              <input
                type="radio"
                className="btn-check"
                name="size"
                id="btnradio6"
                autocomplete="off"
                checked={productDetail.size== "L"}
              />
              <label className="btn btn-outline-dark" for="btnradio6">
                L
              </label>
            </div>
          </div>

          <button className="btn btn-dark w-100 my-5" onClick={() => addToCard(productDetail)}>
            <i className="bi bi-cart-plus-fill"></i>
            Add to Cart{" "}
          </button>
          <div>
            <span className="text-secondary text-small">Details :</span>

            <div className="accordion accordion-flush" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
