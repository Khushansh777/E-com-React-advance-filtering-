import React from "react";
import "../Category/Category.css";
import input from "../../input/input";
const Price = ({handleCategory}) => {
  return (
    <div>
      {" "}
      <div className="category">
        <h3 className="category-heading">Price</h3>

        <div className="category-boxes">
          <input type="radio" name="Price" onChange={handleCategory} value={'All'}/>
          <label htmlFor="category-all">All</label>
        </div>
        {input("$0 - $50",handleCategory, "Price")}
        {input("$50 -$100",handleCategory, "Price")}
        {input("$100 -$150",handleCategory, "Price")}
        {input("$150 -$200",handleCategory, "Price")}
      </div>
    </div>
  );
};

export default Price;
