import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaPlus, FaBars } from 'react-icons/fa';

const SideBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-gray-900 text-gray-200 min-h-screen p-4 fixed w-72">
        <h2 className="text-2xl font-bold mb-6 text-center">Bookstore</h2>
        <button
          className="md:hidden block text-gray-200 focus:outline-none mb-4"
          onClick={toggleSidebar}
        >
          <FaBars className="w-6 h-6" />
        </button>
        <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className={`flex items-center p-2 rounded-md transition-colors duration-300 ${
                  location.pathname === '/' ? 'bg-gray-700 text-yellow-300' : 'hover:bg-gray-700'
                }`}
              >
                <FaHome className="w-6 h-6 mr-3" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/AddBook"
                className={`flex items-center p-2 rounded-md transition-colors duration-300 ${
                  location.pathname.startsWith('/AddBook') ? 'bg-gray-700 text-yellow-300' : 'hover:bg-gray-700'
                }`}
              >
                <FaPlus className="w-6 h-6 mr-3" />
                Add Book
              </Link>
            </li>
            <li>
              <Link
                to="/Books"
                className={`flex items-center p-2 rounded-md transition-colors duration-300 ${
                  location.pathname.startsWith('/Books') ? 'bg-gray-700 text-yellow-300' : 'hover:bg-gray-700'
                }`}
              >
                <FaBook className="w-6 h-6 mr-3" />
                Books
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="ml-64 p-4">
        {/* Main content goes here */}
      </div>
    </>
  );
};

export default SideBar;
