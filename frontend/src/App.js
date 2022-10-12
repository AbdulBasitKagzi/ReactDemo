import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./component/ProtectedRoute";
import BookTruck from "./pages/BookTruck";
import Checkout from "./pages/Checkout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Vehicles from "./pages/Vehicles";
import Products from "./pages/Products";
import Order from "./pages/Order";
import MainHome from "./pages/MainHome";

import "./App.css";
import Error403 from "./pages/Error403";
import EmailPage from "./pages/EmailPage";
function App() {
  console.log({ REACT_APP_URL: process.env.REACT_APP_URL });
  return (
    <div className="App">
      {/* Making Routes */}
      <Routes>
        {/* protected routes */}
        <Route exact path="/user" element={<ProtectedRoute role="user" />}>
          <Route path="/user/booktruck" element={<BookTruck />} />
          <Route path="/user/checkout" element={<Checkout />} />
          <Route path="/user/emailpage" element={<EmailPage />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route exact path="/" element={<MainHome />} />

        {/* error */}
        <Route path="*" element={<Error />} />
        <Route path="/forbidden" element={<Error403 />} />

        {/* Protected Routes */}
        <Route exact path="/admin" element={<ProtectedRoute role="Admin" />}>
          <Route exact path="/admin/vehicles" element={<Vehicles />} />
          <Route exact path="/admin/products" element={<Products />} />
          <Route exact path="/admin/orders" element={<Order />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
