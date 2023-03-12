import React from "react";

export default function Product(props) {
  function incrementQuantity(index) {}

  return (
    <div className="row">
      <div className="col-6">
        <h2>
          {props.product.name}{" "}
          <span class="badge badge-secondary">{props.product.price}</span>
        </h2>
      </div>
      <div className="col-4">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary">
            -
          </button>
          <button type="button" class="btn btn-secondary">
            {props.product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={this.incrementQuantity()}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-4">
        {props.product.quantity * props.product.price}
      </div>
    </div>
  );
}
