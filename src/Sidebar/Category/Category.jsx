import React from "react";
import "./Category.css";
import input from "../../input/input";
const Category = () => {
  return (
    <div className="category">
      <h3 className="category-heading">Category</h3>
      <div className="category-boxes">
        <input type="radio" className="checkmark sidebar-label-container" name="check"/>
        <label htmlFor="category-all">All</label>
      </div>
      {input("Sneakers")}
      {input("Flats")}
      {input("Sandals")}
      {input("Heels")}
    </div>
  );
};

export default Category;
