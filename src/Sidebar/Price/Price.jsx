import React from "react";
import "../Category/Category.css";
import input from "../../input/input";
const Price = () => {
  return (
    <div>
      {" "}
      <div className="category">
        <h3 className="category-heading">Price</h3>

        <div className="category-boxes">
          <input type="radio" name="check2" />
          <label htmlFor="category-all">All</label>
        </div>
        {input("$0 - $50")}
        {input("$50 -$100")}
        {input("$100 -$150")}
        {input("$150 -$200")}
      </div>
    </div>
  );
};

export default Price;
