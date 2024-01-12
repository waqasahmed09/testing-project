import React from "react";

function Header () {

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My App</div>
        <div className="space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Products
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Header;
