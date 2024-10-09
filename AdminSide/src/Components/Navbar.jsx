import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="">
      <Link to={"/"}> Home</Link>
      <Link to={"/menu"}>Menu</Link>
      <Link to={"/profile"}>Profile</Link>
    </div>
  );
}

export default Navbar;
