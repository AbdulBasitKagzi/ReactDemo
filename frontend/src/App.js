import { Routes, Route, Navigate } from "react-router-dom";

import BookTruck from "./pages/BookTruck";
import Checkout from "./pages/Checkout";
import Home2 from "./pages/Home2";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Vehicles from "./pages/Vehicles";
import Products from "./pages/Products";
import Order from "./pages/Order";
import MainHome from "./pages/MainHome";

function App() {
  const role = localStorage.getItem("role");
  return (
    <div className="App">
      {/* Making Routes */}
      <Routes>
        <Route exact path="/" element={<Navigate to="/home2" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/booktruck" element={<BookTruck />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="*" element={<Error />} />

        <Route path="/admin/vehicles" element={<Vehicles />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/orders" element={<Order />} />
        <Route path="/mainhome" element={<MainHome/>} />
      </Routes>
    </div>
  );
}

export default App;
