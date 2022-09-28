import { Routes, Route, Navigate } from "react-router-dom";

import BookTruck from "./pages/BookTruck";
import Home from "./pages/Home";
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
      </Routes>
    </div>
  );
}

export default App;
