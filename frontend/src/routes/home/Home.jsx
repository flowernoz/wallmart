import React, { useEffect } from "react";
import Banner from "../../components/banner/Banner";
import Cards from "../../components/cards/Cards";
import Holidays from "../../components/holidays/Holidays";
import Category from "../../components/category/Category";
import Clothes from "../../components/clothes/Clothes";
import Brands from "../../components/brands/Brands";
import img from "../../assets//Screen Shot 2023-11-27 at 7.38.13 PM.png";
// import { products } from "../../static/products";
import Products from "../../components/products/Products";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5500/product/allproducts")
      .then((res) => setProducts(res.data.innerData));
  }, []);
  const tools = products?.filter((i) => i.category === "Tires");
  const cloth = products?.filter((i) => i.category === "fashion");

  // products Data
  let blackFriday = products?.slice(0, 12);
  let season = products?.slice(13, 25);
  let electronic = products?.filter((i) => i.category === "electronic");
  let moreToLove = products?.filter((i) => i.category === "Grocery");
  let fashion = products?.filter((i) => i.category === "fashion");

  return (
    <div>
      <Banner />
      <Products title={"Black Friday Deals"} data={blackFriday} />
      <Cards
        title={"Discover Dyson"}
        category={"Hair tools, fans & more."}
        data={tools}
        img={img}
      />
      <Holidays />
      <Products title={"More for gifting season"} data={season} />
      <Cards
        title={"All they want, for less"}
        category={"Toys, tech, home & more."}
        data={cloth}
        video={
          "https://player.vimeo.com/progressive_redirect/playback/882991418/rendition/1080p/file.mp4?loc=external&signature=34c7e802a82e944a2a288f685d7f7bc145d8be8aeba14e6f65272b5505d8b38d"
        }
      />
      {/* All they want, for less */}
      <Category />
      <Holidays /> {/*  baby */}
      <Products title={"Top gifts? Game on!"} data={electronic} />
      <Cards
        title={"Get what's going viral"}
        category={"Find your favorite looks & more."}
        data={tools}
        video={
          "https://player.vimeo.com/progressive_redirect/playback/879938646/rendition/1080p/file.mp4?loc=external&signature=0f9b28aa2ec29e3b3f0daa202f958f5c170bda7024195b30bf9e92ee062654d9"
        }
      />
      {/* Get what’s going viral */}
      <Clothes />
      <Products title={"More to love"} data={moreToLove} />
      <Brands />
      <Products title={"Cold & flu season"} data={fashion} />
      {/* footer */}
    </div>
  );
}

export default Home;
