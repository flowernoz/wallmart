import "./Cards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cards({ title, category, data, video, img }) {
  return (
    <div className="Carts">
      <div className="card__carousel">
        <div className="carts__title">
          <h1>
            {title}
            <span>{category}</span>
          </h1>
          <Link to={"/"}>View all</Link>
        </div>
        <Swiper
          init="false"
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            1124: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={`/single-page/${item._id}`} className="Cart">
                <div className="img__box">
                  <img
                    className="product__img"
                    src={item.images[0]}
                    alt="product"
                  />
                </div>
                <AiOutlineHeart className="heart__icon" />
                <div className="cart__details">
                  <p className="cart__price">
                    $ {item.price}
                    {/* <s>{item.price}</s> */}
                  </p>
                  <span className="product__description">
                    {item.title.length > 30
                      ? item.title.slice(0, 30) + "..."
                      : item.title}
                  </span>
                  <button className="add__to__cart">Options</button>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="card__media">
        {img ? (
          <img src={img} />
        ) : (
          <video
            className="pro"
            loop={true}
            autoPlay
            // controls
            crossOrigin="anonymous"
            src={video}
          ></video>
        )}
      </div>
    </div>
  );
}

export default Cards;
