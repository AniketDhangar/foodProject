import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaCartArrowDown } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { BiSolidDish } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="h-[4rem] w-[75%] ml-56 mt-6 rounded-md text-black bg-gray-500 flex items-center justify-center gap-16 pr-10  pl-10 underline-none">
      {/* <img className="imglogo" src={logo} alt="" /> */}
      <Link to={"/"} className="flex gap-2 items-center">
        <FaHome />
        Home
      </Link>
      <Link to={"/about"} className="flex gap-2 items-center">
        <FcAbout />
        About
      </Link>
      <Link to={"/dishes"} className="flex gap-2 items-center">
        <MdRestaurantMenu />
        Dishes
      </Link>
      <Link to={"/cart"} className="flex gap-2 items-center">
        <FaCartArrowDown />
        Cart
      </Link>
     

      <Link to={"/order"} className="flex gap-2 items-center">
        <BiSolidDish />
       My Order
      </Link>
      <Link to={"/login"} className="flex gap-2 items-center">
        <IoMdLogIn />
        Login
      </Link>
    </div>
  );
};

export default Navbar;
