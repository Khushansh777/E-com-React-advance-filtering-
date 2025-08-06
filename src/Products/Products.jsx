import React from "react";
import Cards from "../Component/Cards";
import "./Products.css";
const Products = ({ result }) => {
  return (
    <div className="products">
      {result.map(
        (
          {
            category,
            color,
            title,
            newPrice,
            company,
            prevPrice,
            reviews,
            star,
            img,
          },
          index
        ) => (
          <Cards
            key={`${title}-${index}`}
            title={title}
            color={color}
            category={category}
            company={company}
            newPrice={newPrice}
            prevPrice={prevPrice}
            star={star}
            reviews={reviews}
            img={img}
          />
        )
      )}
    </div>
  );
};

export default Products;
