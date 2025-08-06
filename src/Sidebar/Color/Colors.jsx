import React from "react";
import input from "../../input/input";
import "../Category/Category.css";
const Colors = ({handleCategory}) => {
  return (
    <div>
      {" "}
      <div className="category">
        <h3 className="category-heading">Colors</h3>

        <div className="category-boxes">
          <input type="radio" name="Color" onChange={handleCategory} value={''}/>
          <label htmlFor="category-all">All</label>
        </div>
        {input("Blue", handleCategory, "Color")}
        {input("Red", handleCategory, "Color")}
        {input("Green", handleCategory, "Color")}
        {input("White", handleCategory, "Color")}
      </div>
    </div>
  );
};

export default Colors;
