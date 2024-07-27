import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    const links=<>
    <li>
      <NavLink 
      to='/'
      className={({ isActive, isPending }) =>
        isActive
          ? "active"
          : isPending
          ? "pending"
          : ""
      }
      >Home</NavLink>
    </li>
    <li>
      <NavLink 
      to='/donation'
      className={({ isActive, isPending }) =>
        isActive
          ? "active bg-red-700"
          : isPending
          ? "pending"
          : ""
      }
      >Donation</NavLink>
    </li>
    <li>
      <NavLink 
      to='/stat'
      className={({ isActive, isPending }) =>
        isActive
          ? "active text-red-800 underline"
          : isPending
          ? "pending"
          : ""
      }
      >Statistics</NavLink>
    </li>
    </>
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu-horizontal px-1 text-black bg-white">
          {
            links
          }
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
