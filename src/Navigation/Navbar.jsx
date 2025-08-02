import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="nav">
      <input
        type="text"
        placeholder="Type shoe name"
        className="input-search"
      />
      <CiHeart className="nav-icons" />
      <IoCartOutline className="nav-icons"/>
      <AiOutlineUserAdd className="nav-icons"/>
    </div>
  );
};

export default Navbar;
