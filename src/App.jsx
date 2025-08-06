import { useState } from "react";
import Navbar from "./Navigation/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data.jsx";
function App() {
  const [query, setQuery] = useState("");
  const [selCategory, setSelCategory] = useState(null);
  // handle query
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  // handle Category
  const handleCategory = (e) => {
    setSelCategory(e.target.value);
  };

  // filtered items
  const filteredItems = products.filter((products) => {
    return products.title
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
  });

  const filterdata = (query, selected) => {
    let data = products;
    if (query) {
      data = filterdata;
    }
    if (selected) {
      data = data.filter(({ category, title, newPrice, company, color }) => {
        category === selected ||
          title === selected ||
          newPrice === selected ||
          company === selected ||
          color === selected; 
      });
    }
    return data.map(
      ({ category, color, title, newPrice, company, prevPrice }) => {
        return (
          <Products
            key={title}
            title={title}
            color={color}
            category={category}
            company={company}
            newPrice={newPrice}
            prevPrice={prevPrice}
          />
        );
      }
    );
  };

  return (
    <div>
      <Sidebar />
      <Navbar />
      <Recommended />
      <Products />
    </div>
  );
}

export default App;
