import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { IoBag } from "react-icons/io5";
const Cards = ({ category, color, title, newPrice, company, prevPrice }) => {
  return (
    <div> <div className="product-cards">
        <img
          src="https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg"
          alt=""
          className="product-image"
        />
        <p className="product-name">Low Trop Trainers</p>
        <div className="product-ratings">
          <div className="product-stars">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </div>

          <div className="product-reviews">
            <p>(123 reveiws)</p>
          </div>
        </div>

        <div className="product-price">
          <div className="price-fake">$140.000</div>
          <div className="price-real">$100.000</div>
          <IoBag></IoBag>
        </div>
      </div></div>
  )
}

export default Cards