import { Routes, Route, Navigate } from "react-router-dom";


import BookTruck from "./pages/BookTruck";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      {/* Making Routes */}
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booktruck" element={<BookTruck />} />
        {/* <Route path="/booktruckform" element={<OrderPage />} />
        <Route path="/payment" element={<Payment />} /> */}
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/home2" element={<Home2 />} />
      </Routes>
    </div>
  );
}

export default App;
