import React from 'react';
import { CiSearch, CiShoppingBasket, CiUser } from 'react-icons/ci';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  const menuItems = ['Home', 'Websites', 'About', 'Coming Soon...'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 to-teal-900 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-white">
            <i className="fas fa-globe-americas"></i> GlideSphere
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <span
                key={index}
                className="relative text-white px-4 py-2 cursor-pointer group transition-transform transform hover:scale-105">
                <span
                  className="absolute inset-0 bg-gradient-to-r from-green-400 to-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition duration-500 transform -skew-x-12 scale-110"
                  style={{ clipPath: 'ellipse(50% 30% at 50% 50%)' }}
                ></span>
                <span className="relative z-10">{item}</span>
              </span>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {[CiSearch, CiShoppingBasket, CiUser].map((Icon, idx) => (
              <Icon
                key={idx}
                className="text-white text-xl cursor-pointer hover:text-purple-500 transition duration-300"
              />
            ))}
            <a href="https://hexagondigitalservices.com/contact">
              <button className="ml-4 text-sm bg-gradient-to-r from-green-400 to-red-500 text-white px-4 py-2 rounded-full hover:opacity-90 shadow-lg transition duration-300">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
