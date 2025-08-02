import React from 'react'

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
        <div className="category-boxes">
          <input type="radio" name="check3" />
          <label htmlFor="category-sneakers">Black</label>
        </div>
        <div className="category-boxes">
                   <input type="radio" name="check3" />
          <label htmlFor="category-flats">Blue</label>
 
        </div>
        <div className="category-boxes">
           <input type="radio" name="check3"/>
          <label htmlFor="category-sandals">Red</label>
         
        </div>
        <div className="category-boxes">
             <input type="radio" name="check3"/>
          <label htmlFor="category-heels">Green</label>
       
        </div> 
            <div className="category-boxes">
             <input type="radio" name="check3"/>
          <label htmlFor="category-heels">White</label>
       
        </div>
      </div>
    </div>
  );
};

export default Colors