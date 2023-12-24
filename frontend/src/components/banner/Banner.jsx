import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner() {
  return (
    <div className="grid ">
      <Link className="deals item1">
        <span>Stocking stuffers under $10</span>
        <button>Shop gifts</button>
      </Link>
      <Link className="deals item2">
        <span>Quick pickup & delivery</span>
        <button>Shop Now</button>
      </Link>
      <Link className="deals item3">
        <span>Gift sets</span>
        <button>Shop now</button>
      </Link>
      <Link className="deals item4">
        <span>On-trend styles they'll love</span>
        <button>Shop gift finder</button>
      </Link>
      <Link className="deals item5">
        <span>Grab an e-gift card</span>
        <button>Shop now</button>
      </Link>
      <Link className="deals item6">
        <span>Most wanted gifts under 25%</span>
        <button>Shop now</button>
      </Link>
      <Link className="deals item7">
        <span>Get up to 65% off</span>
        <button>Shop now</button>
      </Link>
      <Link className="deals item8">
        <span>Snap up tech gifts under $50</span>
        <button>Shop now</button>
      </Link>
      <Link className="deals item9">
        <span>Gifts for a cozy home</span>
        <button>Shop now</button>
      </Link>
      <Link className="deals item10">
        <span>
          Enjoy Walmart+ free for 30 days on us!
          <small>Terms apply.</small>
        </span>
        <button>Join Walmart+</button>
      </Link>
    </div>
  );
}

export default Banner;
