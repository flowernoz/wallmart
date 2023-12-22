import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import img1 from "../../assets/banner/bannerImg1.jpg";
import img2 from "../../assets/banner/bannerImg2.jpg";
import img3 from "../../assets/banner/bannerImg3.jpg";
import img4 from "../../assets/banner/bannerImg4.jpg";
import img5 from "../../assets/banner/bannerImg5.jpg";
import img6 from "../../assets/banner/bannerImg6.jpg";
import img7 from "../../assets/banner/bannerImg7.jpg";
import img8 from "../../assets/banner/bannerImg8.jpg";
import img9 from "../../assets/banner/bannerImg9.jpg";
import img10 from "../../assets/banner/bannerImg10.jpg";

function Banner() {
  return (
    <div className="grid ">
      <div className="deals item1">
        <img src={img1} alt="img1" />
      </div>
      <div className="deals item2">
        <img src={img2} alt="img2" />
      </div>
      <div className="deals item3">
        <img src={img3} alt="img3" />
      </div>
      <div className="deals item4">
        <img src={img4} alt="img4" />
      </div>
      <div className="deals item5">
        <img src={img7} alt="img7" />
      </div>
      <div className="deals item6">
        <img src={img5} alt="img7" />
      </div>
      <div className="deals item7">
        <img src={img6} alt="img6" />
      </div>
      <div className="deals item8">
        <img src={img10} alt="img10" />
      </div>
      <div className="deals item9">
        <img src={img8} alt="img8" />
      </div>
      <div className="deals item10">
        <img src={img9} alt="img9" />
      </div>
    </div>
  );
}

export default Banner;
