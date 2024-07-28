import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const handleMenu = () => {
    setDropdown(!dropdown);
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "active text-red-600 font-bold underline-offset-1 underline"
              : isPending
              ? "pending"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isActive
              ? "active text-red-600 font-bold underline-offset-1 underline"
              : isPending
              ? "pending"
              : ""
          }
        >
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/stat"
          className={({ isActive, isPending }) =>
            isActive
              ? "active text-red-600 font-bold underline-offset-1 underline"
              : isPending
              ? "pending"
              : ""
          }
        >
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="container mx-auto absolute flex justify-between w-full p-2 flex-row items-center inset-x-0 top-0">
        <div className="">
          <a className="btn btn-ghost min-w-fit min-h-fit sm:h-16">
            <img
              src="https://imagizer.imageshack.com/img924/3084/Azh5q2.png"
              alt=""
              className="w-full h-full"
            />
          </a>
        </div>
        <div className="flex-none hidden md:flex">
          <ul className="flex flex-row gap-6 lg:gap-12 xl:gap-16 font-semibold text-lg px-1 text-black bg-white">{links}</ul>
        </div>
        <div className="md:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                onClick={() => handleMenu()}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
      <ul
        tabIndex={0}
        className={dropdown ? "flex flex-col duration-200 justify-center items-center w-1/2 border rounded-xl shadow-lg top-20 fixed bg-white" : "hidden"}
      >
        {links}
      </ul>
      </div>

    </>
  );
};

Header.propTypes = {};

export default Header;
