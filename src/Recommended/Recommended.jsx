import React from "react";
import "./Recommended.css";
const Recommended = ({ handleCategory }) => {
  return (
    <div className="recommended">
      <div className="recommended-boxes">
        <h3>Recommended</h3>
        <div className="recon-all-boxes">
          <button onClick={(e) => handleCategory({ target: { value: "" } })}>
            <div className="recom-boxes recom-all">ALL Products</div>
          </button>
          <button
            onClick={(e) => handleCategory({ target: { value: "Nike" } })}
          >
            <div className="recom-boxes">Nike</div>
          </button>
          <button
            onClick={(e) => handleCategory({ target: { value: "Adidas" } })}
          >
            <div className="recom-boxes">Adidas</div>
          </button>
          <button
            onClick={(e) => handleCategory({ target: { value: "Puma" } })}
          >
            <div className="recom-boxes">Puma</div>
          </button>
          <button onClick={() => handleCategory({ target: { value: "Vans" } })}>
            <div className="recom-boxes">Vans</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
