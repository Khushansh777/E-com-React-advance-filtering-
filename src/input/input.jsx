import React from "react";

const input = (title) => {
  return (
    <div className="category-boxes">
      <input
        type="radio"
        className="checkmark sidebar-label-container"
        name="check"
        value={title}
        placeholder={title}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
};

export default input;
