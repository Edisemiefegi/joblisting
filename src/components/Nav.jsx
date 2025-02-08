import React from "react";
import Section from "./Ui/Section";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="shadow-md sticky top-0 left-0  bg-white w-full  text-gray-800">
      <Section className="!py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <i className="pi pi-face-smile text-2xl text-red-500"></i>
          <span className="font-bold text-xl">JobPortal</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-base font-medium ${
                isActive ? "text-red-500 underline" : "text-gray-600"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `text-base font-medium ${
                isActive ? "text-red-500 underline" : "text-gray-600"
              }`
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/add-jobs"
            className={({ isActive }) =>
              `text-base font-medium ${
                isActive ? "text-red-500 underline" : "text-gray-600"
              }`
            }
          >
            Add Jobs
          </NavLink>
        </div>

        {/* Mobile Menu Button (Optional for Hamburger Menu) */}
        <button className="block md:hidden text-2xl text-gray-600">
          <i className="pi pi-bars"></i>
        </button>
      </Section>
    </div>
  );
}

export default Nav;
