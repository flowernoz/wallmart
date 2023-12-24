import React, { useState } from "react";
import "./SinglePage.css";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { GoHeart } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import { AddToCart, DecrementCart } from "../../redux/addtoCart";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";

const SinglePage = () => {
  let dispatch = useDispatch();
  let { id } = useParams();
  console.log(id);
  // const [imgIndex, setImgIndex] = useState(0);
  const [singleData, setSingleData] = useState("");
  const cartData = useSelector((s) => s.addToCart)?.map((i) => i.id);
  let cartId = useSelector((s) => s.addToCart)?.find(
    (i) => i.id.toString() === id
  );
  let quantity = cartId?.quantity;
  function addtocart() {
    dispatch(AddToCart({ product: singleData }));
  }
  useEffect(() => {
    axios
      .get(`http://localhost:5500/product/single-page/${id}`)
      .then((res) => setSingleData(res.data.innerData))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="single_pages container">
      <div className="single_path_container"></div>
      <div className="single_container">
        <div className="single_left_img">
          <div className="single_all_img_container ">
            <div className="img_scroll_bar">
              {singleData?.images?.map((img, index) => (
                <div
                  // onClick={() => setImgIndex(index)}
                  key={index}
                  className="single_all_img"
                >
                  <img src={img} alt={singleData?.title} />
                </div>
              ))}
            </div>
          </div>
          <div className="single_center_img_container">
            <div className="single_center_img">
              {/* <img src={singleData?.images[0]} alt={singleData?.title} /> */}
            </div>
            <div className="single_center_img_icon_container">
              <button>
                <GoHeart />
              </button>
              <button>
                <LiaSearchPlusSolid />
              </button>
            </div>
          </div>
        </div>
        <div className="single_right_all_title">
          <div className="single_right_all_title_header">
            <span>100+ bought since yesterday</span>
          </div>
          <div className="single_right_title_container">
            <div className="single_title_border">
              <span>Best seller</span>
              <span>Popular pick</span>
            </div>
            <Link>{singleData?.brand}</Link>
            <h2>{singleData?.title}</h2>
            <b>${singleData.price}</b>
            <span>Price when purchased online</span>
            {quantity == 0 ? (
              <button onClick={() => addtocart(singleData)}>Add to cart</button>
            ) : (
              <button>
                <FaMinus
                  onClick={() => dispatch(DecrementCart({ id: singleData.id }))}
                />
                <span>{singleData.quantity} added</span>
                <FaPlus
                  onClick={() => {
                    dispatch(AddToCart({ id: singleData.id }));
                  }}
                />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="single_details">
        <small>About this item</small>
        <p>Product details</p>
        <span>{singleData?.description}</span>
        {singleData?.details?.map((item, index) => (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
