import { useState } from "react";
import logo from "../assets/logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function formHandler(e) {
    e.preventDefault();
    // Your form handling logic
  }

  function handleLogoClick() {
    // Redirect to home page or refresh the current page
    window.location.href = "/";
  }

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden bg-gray-900 flex justify-between items-center gap-3 px-3">
        <div className="bg-gray-900 rounded-full">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar Menu for Mobile */}
      <div>
        <div
          className={`${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed lg:hidden top-0 left-0 w-[80%] h-full bg-gray-900 z-50 pt-16 transition-transform ease-in-out duration-300`}
        >
          <div className="flex flex-col items-center">
            <img src={logo} alt="" className="w-36 mb-6" />
            <ul className="text-white">
              <li className="py-2 px-4 hover:bg-gray-800">Home</li>
              <li className="py-2 px-4 hover:bg-gray-800">Movies</li>
              <li className="py-2 px-4 hover:bg-gray-800">TV Shows</li>
              <li className="py-2 px-4 hover:bg-gray-800">My List</li>
              <li className="py-2 px-4 hover:bg-gray-800">Account</li>
              <li className="py-2 px-4 hover:bg-gray-800">Cart</li>
              <li className="py-2 px-4 hover:bg-gray-800">Watch List</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar for Large Screens */}
      <div className="hidden lg:fixed lg:top-0 lg:left-0 lg:z-10 lg:w-full lg:bg-gray-900 lg:text-white lg:shadow-2xl lg:flex lg:justify-between lg:items-center lg:px-3 lg:py-2">
        <div className="text-white">
          <img
            src={logo}
            alt="Hover Logo"
            className="w-36 cursor-pointer transition duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg"
            onClick={handleLogoClick}
          />
        </div>

        <div id="right-side-contect" className="flex gap-x-5 items-center ">
          <button className="text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition duration-300 focus:outline-none">
            Sign Up
          </button>

          <button className="text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition duration-300 focus:outline-none">
            Login
          </button>

          <button className="text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition duration-300 focus:outline-none">
            <FaCartArrowDown className="inline mr-1" /> Cart
          </button>

          <button className="text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition duration-300 focus:outline-none">
            <BsClockHistory className="inline mr-1" /> Watch List
          </button>
        </div>
      </div>
    </>
  );
}
