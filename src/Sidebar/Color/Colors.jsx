import React from "react";
import input from "../../input/input";
import "../Category/Category.css";
const Colors = () => {
  return (
    <div>
      {" "}
      <div className="category">
        <h3 className="category-heading">Colors</h3>

        <div className="category-boxes">
          <input type="radio" name="check3" />
          <label htmlFor="category-all">All</label>
        </div>
        {input("Blue")}
        {input("Red")}
        {input("Green")}
        {input("White")}
      </div>
    </div>
  );
};

export default Colors;
