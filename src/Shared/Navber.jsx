import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router";

const Navber = () => {
  return (
    <div className="bg-[#481E14] md:px-20">
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className=" menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/Home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/Home" >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Menu">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className="hover:text-amber-600 hover:underline"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
