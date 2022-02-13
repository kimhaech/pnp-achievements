import React from 'react';

import { Link } from 'react-router-dom';

import logoimage from '../../static/svg/logo.svg';

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 left-0 bg-white text-gray-700 body-font border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to="/"
        >
          <img alt="logo" src={logoimage} className="w-8 h-8 -mr-1" />
          <span className="ml-3 text-xl text-indigo-500">PASSION</span>
          <span className="ml-1 text-xl text-gray-900">PIONEER</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/about" className="mr-5 hover:text-gray-900">
            ABOUT
          </Link>
          <Link to="/achievements" className="mr-5 hover:text-gray-900">
            ACHIEVEMENTS
          </Link>
          <Link to="/members" className="mr-5 hover:text-gray-900">
            MEMBERS
          </Link>
          <Link to="/recruit" className="mr-5 hover:text-gray-900">
            RECRUIT
          </Link>
          <Link to="/FAQ" className="mr-5 hover:text-gray-900">
            FAQ
          </Link>
          <Link to="/blog" className="mr-5 hover:text-gray-900">
            BLOG
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
