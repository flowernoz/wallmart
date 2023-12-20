import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddToCart, DecrementCart } from "../../redux/addtoCart";

function ProductsItem({ product }) {
  const cart = useSelector((s) => s.AddToCart);
  const dispatch = useDispatch();
  const [inc, setInc] = useState(false);

  function Add_To_Cart(product) {
    setInc(!inc);
    dispatch(AddToCart({ product }));
  }
  return (
    <div className="products__cards__item">
      <Link to={`/single-page/${product._id}`}>
        <figure>
          <img
            src={product?.images[0]}
            alt={product?.title}
            title={product?.title}
          />
        </figure>
      </Link>
      <h4>
        Now ${product?.price}{" "}
        <strike>${Math.floor(product.price + (product.price % 10))}</strike>{" "}
      </h4>
      <p>{product?.title}</p>

      <div className="products__cards__item__addCart">
        {!inc ? (
          <button onClick={() => Add_To_Cart(product)}>
            {" "}
            <FaPlus /> Add
          </button>
        ) : (
          <div className="products__cards__item__addCart__inc">
            <FaMinus
              onClick={() => {
                dispatch(DecrementCart({ id: product.id }));
              }}
            />
            <b>{cart.find((p) => p.id === product.id).quantity}</b>
            <FaPlus
              onClick={() => {
                dispatch(AddToCart({ product }));
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsItem;
