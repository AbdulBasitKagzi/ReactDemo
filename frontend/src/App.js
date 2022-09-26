import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Making Routes */}
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
