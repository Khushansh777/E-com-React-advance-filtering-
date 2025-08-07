import React, { useState } from "react";
import "./Recommended.css";

const Recommended = ({ handleCategory }) => {
  const [activeButton, setActiveButton] = useState("ALL Products");

  const handleButtonClick = (value, buttonName) => {
    setActiveButton(buttonName);
    handleCategory({ target: { value } });
  };

  return (
    <div className="recommended">
      <div className="recommended-boxes">
        <h3>Recommended</h3>
        <div className="recon-all-boxes">
          <button onClick={() => handleButtonClick("", "ALL Products")}>
            <div
              className={`recom-boxes ${
                activeButton === "ALL Products" ? "recom-all" : ""
              }`}
            >
              ALL Products
            </div>
          </button>
          <button onClick={() => handleButtonClick("Nike", "Nike")}>
            <div
              className={`recom-boxes ${
                activeButton === "Nike" ? "recom-all" : ""
              }`}
            >
              Nike
            </div>
          </button>
          <button onClick={() => handleButtonClick("Adidas", "Adidas")}>
            <div
              className={`recom-boxes ${
                activeButton === "Adidas" ? "recom-all" : ""
              }`}
            >
              Adidas
            </div>
          </button>
          <button onClick={() => handleButtonClick("Puma", "Puma")}>
            <div
              className={`recom-boxes ${
                activeButton === "Puma" ? "recom-all" : ""
              }`}
            >
              Puma
            </div>
          </button>
          <button onClick={() => handleButtonClick("Vans", "Vans")}>
            <div
              className={`recom-boxes ${
                activeButton === "Vans" ? "recom-all" : ""
              }`}
            >
              Vans
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
