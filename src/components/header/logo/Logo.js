import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <h1>
      <Link to="/" title="Covid Tracker">Covid Tracker</Link>
    </h1>
  );
}

export default Logo;
