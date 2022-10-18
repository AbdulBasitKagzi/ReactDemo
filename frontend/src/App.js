import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./component/ProtectedRoute";
// import BookTruck from "./pages/BookTruck";
import Checkout from "./pages/Checkout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
// import Products from "./pages/Products";
// import Order from "./pages/Order";
// import MainHome from "./pages/MainHome";
// import Vehicles from "./pages/Vehicles";

import Error403 from "./pages/Error403";
import EmailPage from "./pages/EmailPage";
import "./App.css";

// impelementing lagzy loading
const LazyMainHome = React.lazy(() => import("./pages/MainHome"));
const LazyBookTruck = React.lazy(() => import("./pages/BookTruck"));
const LazyVehicle = React.lazy(() => import("./pages/Vehicles"));
const LazyProducts = React.lazy(() => import("./pages/Products"));
const LazyOrder = React.lazy(() => import("./pages/Order"));

function App() {
  return (
    <div className="App">
      {/* Making Routes */}
      <Suspense fallback="Loading....">
        <Routes>
          {/* protected routes */}
          <Route exact path="/user" element={<ProtectedRoute role="user" />}>
            <Route path="/user/booktruck" element={<LazyBookTruck />} />
            <Route path="/user/checkout" element={<Checkout />} />
            <Route path="/user/emailpage" element={<EmailPage />} />
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            exact
            path="/"
            element={
              <Suspense fallback="loading">
                <LazyMainHome />
              </Suspense>
            }
          />

          <Route path="*" element={<Error />} />
          <Route path="/forbidden" element={<Error403 />} />

          {/* error */}
          {/* Protected Routes */}
          <Route exact path="/admin" element={<ProtectedRoute role="Admin" />}>
            <Route exact path="/admin/vehicles" element={<LazyVehicle />} />
            <Route exact path="/admin/products" element={<LazyProducts />} />
            <Route exact path="/admin/orders" element={<LazyOrder />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
