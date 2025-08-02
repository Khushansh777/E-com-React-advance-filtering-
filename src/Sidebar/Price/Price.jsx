import React from "react";
import "../Category/Category.css";
const Price = () => {
  return (
    <div>
      {" "}
      <div className="category">
        <h3 className="category-heading">Price</h3>

        <div className="category-boxes">
             <input type="radio" name="check2"/>
          <label htmlFor="category-all">All</label>
       
        </div>
        <div className="category-boxes">
          <input type="radio" name="check2" />
          <label htmlFor="category-sneakers">$0 - $50</label>
        </div>
        <div className="category-boxes">
                   <input type="radio" name="check2" />
          <label htmlFor="category-flats">$50 -$100</label>
 
        </div>
        <div className="category-boxes">
           <input type="radio" name="check2"/>
          <label htmlFor="category-sandals">$100 - $150</label>
         
        </div>
        <div className="category-boxes">
             <input type="radio" name="check2"/>
          <label htmlFor="category-heels">$150 - $200</label>
       
        </div>
      </div>
    </div>
  );
};

export default Price;
