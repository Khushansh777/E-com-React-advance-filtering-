import React, { act, useState } from "react";
import "./Recommended.css";
const Recommended = ({ handleCategory }) => {
  const [activeBtn, setActiveBtn] = useState('');
  const buttonClick = (param, state) => {
    setActiveBtn(state);
    handleCategory({ target: { value: param } });
  };

  return (
    <div className="recommended">
      <div className="recommended-boxes">
        <h3>Recommended</h3>
        <div className="recon-all-boxes">
          <button onClick={(e) => buttonClick("", 'selected1')}>
            <div className={`recom-boxes ${
              activeBtn === 'selected1' ? "recom-all" : ""
            }`}>ALL Products</div>
          </button>
          <button
            onClick={(e) => buttonClick('Nike', 'selected2')}
          >
            <div
              className={`recom-boxes ${activeBtn === 'selected2' ? "recom-all" : ""}`}
            >
              Nike
            </div>
          </button>
          <button
            onClick={(e) => buttonClick('Adidas', 'selected3')}
          >
            <div className={`recom-boxes ${
              activeBtn === 'selected3' ? 'recom-all' : ""
            }`}>Adidas</div>
          </button>
          <button onClick={() => buttonClick("Puma", 'selected4')}>
            <div className={`recom-boxes ${
              activeBtn === 'selected4' ? 'recom-all' : ''
            }`}>Puma</div>
          </button>
          <button onClick={() => buttonClick('Vans', 'selected5')}>
            <div className={`recom-boxes ${
              activeBtn === 'selected5' ? 'recom-all' : ""
            }`}>Vans</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
