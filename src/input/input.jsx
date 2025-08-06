import React from "react";

const input = (title, handleClick , checkName) => {
  return (
    <div className="category-boxes">
      <input
        type="radio"
        className="checkmark sidebar-label-container"
        name="check"
        value={checkName}
        placeholder={title}
        onChange={handleClick}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
};

export default input;
