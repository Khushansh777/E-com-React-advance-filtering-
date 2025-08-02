import React from "react";
import "./Category.css";
const Category = () => {
  return (
    <div className="category">
      <h3 className="category-heading">Category</h3>
      <div className="category-boxes">
        <input type="radio" className="checkmark sidebar-label-container" name="check"/>
        <label htmlFor="category-all">All</label>
      </div>
      <div className="category-boxes">
        <input type="radio" className="checkmark sidebar-label-container"  name="check"/>
        <label htmlFor="category-sneakers">Sneakers</label>
      </div>
      <div className="category-boxes">
        <input type="radio" className="checkmark sidebar-label-container" name="check"/>
        <label htmlFor="category-flats">Flats</label>
      </div>
      <div className="category-boxes">
        <input type="radio" className="checkmark sidebar-label-container" name="check"/>
        <label htmlFor="category-sandals">Sandals</label>
      </div>
      <div className="category-boxes">
        <input type="radio" className="checkmark sidebar-label-container" name="check"/>
        <label htmlFor="category-heels">Heels</label>
      </div>
    </div>
  );
};

export default Category;
