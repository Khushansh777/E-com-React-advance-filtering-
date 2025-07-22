import Navbar from "./Navigation/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Category from "./Sidebar/Category/Category"
import Colors from "./Sidebar/Color/Colors";

function App() {
  return <div>
    <Navbar />
    <Products />
    <Recommended />
    <Category />
    <Colors />
    <Price />
  </div>;
}

export default App;
