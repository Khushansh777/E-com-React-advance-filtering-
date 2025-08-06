import React from "react";

const input = (title, handleClick , checkName) => {
  return (
    <div className="category-boxes">
      <input
        type="radio"
        className="checkmark sidebar-label-container"
        name={checkName}
        value={title}
        placeholder={title}
        onChange={handleClick}
        title={title}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
};

export default input;
