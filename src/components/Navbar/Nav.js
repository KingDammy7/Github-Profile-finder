import React, { useState } from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from './github.png'


const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className="relative flex flex-wrap items-center justify-between pt-5 px-3 py-3 bg-white shadow-2xl bg-blueGray-500">
        <div className="container flex flex-wrap items-center justify-between px-2 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
            >
              <img src={logo}
		    alt='logo'
			className='object-cover pb-3 pl-5  absolute top-0 h-15 w-24'
						/>
            </Link>
            <button
              className="block px-3 py-3 text-xl leading-none text-gray-800 bg-black border border-black border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen ? (
                <i className="fas fa-bars " />
              ) : (
                <i className="fas fa-times" />
              )}
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-1 text-xs font-bold leading-snug text-black uppercase hover:opacity-75"
                  to="/"
                >
                  <i className="text-lg text-black opacity-75 fas fa-home leading-lg"></i>
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-1 text-xs font-bold leading-snug text-black uppercase hover:opacity-75"
                  to="/about"
                >
                  <i className="text-lg text-black fas fa-sign-in-alt leading-lg"></i>
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-1 text-xs font-bold leading-snug text-black uppercase hover:opacity-75"
                  to="/about"
                >
                  <i className="text-lg text-white opacity-75 fas fa-user-alt leading-lg"></i>
                  <span className="ml-2">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

Nav.defaultProps = {
  title: "Github Finder",
  icon: "logo fab fa-github",
};

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Nav;
