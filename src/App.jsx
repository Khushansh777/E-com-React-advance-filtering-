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
                          console.log(e.target.value);
  };

  // filtered items
  const filteredItems = products.filter((products) => {
    return products.title
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
  });

  const filterdata = (products, query, selected) => {
    let data = products;
    if (query) {
      data = filteredItems;
    }
    if (selected) {
      data = data.filter(({ category, newPrice, company, color }) => {
        // Handle different filter types
        if (selected.toLowerCase() === category) return true;
        if (selected.toLowerCase() === color) return true;
        if (selected === company) return true;

        // Handle price ranges
        const price = parseInt(newPrice);
        if(selected === 'All' && price >= 0 && price <=200) return true
        if (selected === "$0 - $50" && price >= 0 && price <= 50) return true;
        if (selected === "$50 -$100" && price > 50 && price <= 100) return true;
        if (selected === "$100 -$150" && price > 100 && price <= 150)
          return true;
        if (selected === "$150 -$200" && price > 150 && price <= 200)
          return true;

        return false;
      });
    }
    return data;
  };

  const result = filterdata(products, query, selCategory);
  console.log(result);

  return (
    <div>
      <Sidebar handleCategory={handleCategory} />
      <Navbar query={query} handleInputChange={handleQuery} />
      <Recommended handleCategory={handleCategory} />
      <Products result={result} />
    </div>
  );
}

export default App;
