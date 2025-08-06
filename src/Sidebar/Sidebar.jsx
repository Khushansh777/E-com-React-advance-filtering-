import React from "react";
import './Sidebar.css'
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Color/Colors";
const Sidebar = ({handleCategory}) => {
  return (
    <div className="sidebar">
        <div className="sidebar-icon">
                🛒
        </div>
   
      <Category handleCategory={handleCategory} />
      <Price handleCategory={handleCategory}/>
      <Colors handleCategory={handleCategory}/>
    </div>
  );
};

export default Sidebar;
