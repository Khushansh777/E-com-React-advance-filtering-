import React from "react";
import './Sidebar.css'
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Color/Colors";
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-icon">
                🛒
        </div>
   
      <Category />
      <Price />
      <Colors />
    </div>
  );
};

export default Sidebar;
