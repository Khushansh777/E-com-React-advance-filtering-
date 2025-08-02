import Navbar from "./Navigation/Navbar";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Category from "./Sidebar/Category/Category";
import Colors from "./Sidebar/Color/Colors";
import Price from "./Sidebar/Price/Price";
import Sidebar from "./Sidebar/Sidebar";

function App() {
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
