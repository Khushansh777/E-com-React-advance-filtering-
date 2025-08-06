import React from "react";
import { IoBag } from "react-icons/io5";
const Cards = ({
  title,
  color,
  company,
  newPrice,
  prevPrice,
  star,
  reviews,
  img,
}) => {
  return (
    <div className="product-cards">
      <img src={img} alt={title} className="product-image" />
      <p className="product-name">{title}</p>
      <p className="product-company">{company}</p>
      <div className="product-ratings">
        <div className="product-stars">
          {star}
          {star}
          {star}
          {star}
        </div>
        <div className="product-reviews">
          <p>{reviews}</p>
        </div>
      </div>
      <div className="product-price">
        <div className="price-fake">{prevPrice}</div>
        <div className="price-real">${newPrice}</div>
        <IoBag className="bag-icon" />
      </div>
    </div>
  );
};

export default Cards;
