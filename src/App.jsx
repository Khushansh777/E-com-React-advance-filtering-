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
