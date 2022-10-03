import { Routes, Route, Navigate } from "react-router-dom";

import BookTruck from "./pages/BookTruck";
import Checkout from "./pages/Checkout";
import Home2 from "./pages/Home2";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import Error from "./pages/Error";

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
