import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div>
      Error 404: Nothing to found
      <Link to="/home2">Go to home</Link>
    </div>
  );
}

export default Error;
