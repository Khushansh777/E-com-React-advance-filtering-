import React from "react";
import "./Recommended.css";
const Recommended = () => {
  return (
    <div className="recommended">
      <div className="recommended-boxes">
        <h3>Recommended</h3>
        <div className="recon-all-boxes">
          <button>
            {" "}
            <div className="recom-boxes recom-all">ALL Products</div>
          </button>
          <button>
            {" "}
            <div className="recom-boxes">Nike</div>
          </button>
          <button>
            {" "}
            <div className="recom-boxes">Adidas</div>
          </button>
          <button>
            {" "}
            <div className="recom-boxes">Puma</div>
          </button>
          <button>
            {" "}
            <div className="recom-boxes">Vans</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
