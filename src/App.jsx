import { useState } from "react";
import Navbar from "./Navigation/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data.jsx";

function App() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  // handle query
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  // handle Category
  const handleCategory = (e) => {
    const value = e.target.value;
    console.log("Filter value:", value);

    // Determine filter type and update appropriate state
    if (
      ["sneakers", "flats", "sandals", "heels"].includes(value.toLowerCase())
    ) {
      setSelectedCategory(value.toLowerCase());
    } else if (
      ["blue", "red", "green", "white", "black"].includes(value.toLowerCase())
    ) {
      setSelectedColor(value.toLowerCase());
    } else if (value.includes("$")) {
      setSelectedPrice(value);
    } else if (["Nike", "Adidas", "Puma", "Vans"].includes(value)) {
      setSelectedCompany(value);
    } else if (value === "") {
      // Clear all filters for "ALL Products"
      setSelectedCategory("");
      setSelectedColor("");
      setSelectedPrice("");
      setSelectedCompany("");
    }
  };

  const filterdata = (products, query, category, color, price, company) => {
    let data = products;

    // Apply search query filter
    if (query) {
      data = data.filter((product) => {
        return product.title.toLowerCase().includes(query.toLowerCase());
      });
    }

    // Apply category filter
    if (category) {
      data = data.filter((product) => product.category === category);
    }

    // Apply color filter
    if (color) {
      data = data.filter((product) => product.color === color);
    }

    // Apply company filter
    if (company) {
      data = data.filter((product) => product.company === company);
    }

    // Apply price filter
    if (price) {
      data = data.filter((product) => {
        const productPrice = parseInt(product.newPrice);
        if (price === "$0 - $50")
          return productPrice >= 0 && productPrice <= 50;
        if (price === "$50 -$100")
          return productPrice > 50 && productPrice <= 100;
        if (price === "$100 -$150")
          return productPrice > 100 && productPrice <= 150;
        if (price === "$150 -$200")
          return productPrice > 150 && productPrice <= 200;
        return false;
      });
    }

    return data;
  };

  const result = filterdata(
    products,
    query,
    selectedCategory,
    selectedColor,
    selectedPrice,
    selectedCompany
  );
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
