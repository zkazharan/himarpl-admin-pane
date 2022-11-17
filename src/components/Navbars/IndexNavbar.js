/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full h-20 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-darkPrimary">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-white text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Admin himarpl
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href=""
                  // target="_blank"
                >
                  <i className="text-white fa-solid fa-arrow-right-from-bracket text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Exit</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href=""
                  // target="_blank"
                >
                  <i className="text-white fa-regular fa-circle-user text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">User</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
