import React from "react";
import "./Category.css";
import input from "../../input/input";

const Category = ({handleCategory}) => {
  return (
    <div className="category">
      <h3 className="category-heading">Category</h3>
      <div className="category-boxes">
        <input type="radio" className="checkmark sidebar-label-container" name="category" onChange={handleCategory} value={""}/>
        <label htmlFor="category-all">All</label>
      </div>
      {input("Sneakers",handleCategory,'category')}
      {input("Flats",handleCategory,'category')}
      {input("Sandals",handleCategory,'category')}
      {input("Heels",handleCategory,'category')}
    </div>
  );
};

export default Category;
