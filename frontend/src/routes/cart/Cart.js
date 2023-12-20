import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoLockClosedOutline } from "react-icons/io5";
import { AddToCart, DecrementCart, RemoveCart } from "../../redux/addtoCart";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  let dispatch = useDispatch();
  let store = useSelector((s) => s.AddToCart);
  let cartLength = store.reduce((a, b) => a + b.quantity, 0);
  let newDate = Date();
  let newDateItem = newDate.split(" ");
  let totalPrice = Math.ceil(
    store.reduce((a, b) => a + b.price * b.quantity, 0)
  );

  return (
    <div className="cart_page">
      <div className="cart_length">
        <h2>
          Cart <span>({cartLength} items )</span>
        </h2>
      </div>
      {cartLength ? (
        <div className="cart_container">
          <div className="cart_left_container">
            <div className="cart_left_scroll_container">
              <div className="cart_left_buy_car_container">
                <div className="cart_buy_car_img_container">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT4QKryGB7DQx_eTAuQY_E-sNLOAFp1pxsdwHL9Y89KCHzxb3FF"
                    alt=""
                  />
                </div>
                <div className="cart_left_buy_title_container">
                  <h2>
                    Shopping, arrives tommorow, {newDateItem[1]}{" "}
                    {newDateItem[2]}-{newDateItem[0]} {newDateItem[1]}-20
                  </h2>
                  <span>
                    Order within <b>6 hr 46 min</b>
                  </span>
                  <Link to={"/"}>95829</Link>
                  <hr />
                  <div className="cart_left_buy_car_title">
                    <span>
                      Want it as soon as <b>today?</b>
                    </span>
                    <Link>
                      <IoLockClosedOutline />
                      Pickup instead
                    </Link>
                  </div>
                </div>
              </div>
              {store?.map((product, index) => (
                <div key={index} className="cart_left_scroll_item">
                  <div className="cart_left_img_container">
                    <img src={product.images[0]} alt="" />
                  </div>
                  <div className="cart_left_title_container">
                    <div className="cart_left_title_left_container">
                      <h2>{product.title}</h2>
                      <p>${product.price}/ea</p>
                      <span>{product.categoryn}</span>
                    </div>
                    <div className="cart_left_title_btn">
                      <b>{product.price * product.quantity}</b>
                      <div className="cart_left_btn_container">
                        <span
                          onClick={() =>
                            dispatch(RemoveCart({ id: product.id }))
                          }
                        >
                          Remove
                        </span>
                        <span>Save for later</span>
                        <div className="products__cards__item__addCart__inc cart_btn_container">
                          <FaMinus
                            onClick={() => {
                              dispatch(DecrementCart({ id: product.id }));
                            }}
                          />
                          <b>
                            {store.find((p) => p.id === product.id).quantity}
                          </b>
                          <FaPlus
                            onClick={() => {
                              dispatch(AddToCart({ product }));
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart_rigth_container">
            <div className="cart_btn_container_items">
              <button>Continue to checkout</button>
              <span>
                For the best shopping experience, <Link to={"/"}>sign in</Link>
              </span>
            </div>
            <div className="cart_total_pricec_container">
              <div className="cart_subtotal_container">
                <b>
                  Subtotal <span>({cartLength + " items"})</span>
                </b>
                <s>$ 221.99</s>
              </div>
              <div className="cart_sevings_container">
                <b>Savings</b>
                <div className="cart_sevings_prices_container">
                  <b>-$149.74</b>
                  <span>$72.25</span>
                </div>
              </div>
              <hr />
              <div className="cart_shopping_container">
                <p>Shopping</p>
                <span>Free</span>
              </div>
              <div className="cart_taxes_container">
                <b>Taxes</b>
                <span>Calculated at checkout</span>
              </div>
              <hr />
              <div className="cart_estimated_total_container">
                <p>Estimated total</p>
                <b>$72.25</b>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="img_container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3649/3649552.png"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
