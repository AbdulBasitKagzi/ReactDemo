import React from "react";
import { Link } from "react-router-dom";

function EmailPage() {
  return (
    <div>
      Your order has been placed
      <Link to="/">Got to Home</Link>
    </div>
  );
}

export default EmailPage;
