import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { IconContext } from "react-icons";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <IconContext.Provider value={{}}>
      <nav className="relative flex flex-wrap justify-between items-center py-3">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <StaticImage
              src="../assets/images/gatsby-icon.png"
              alt="site logo"
              height={40}
            />
          </Link>
        </div>

        {/* Mobile menu toggler */}
        <button
          onClick={() => setShow(!show)}
          type="button"
          data-collapse-toggle="mobile-menu"
          className="inline-flex items-center p-2 ml-3 text-sm text-var-primary rounded md:hidden border border-transparent hover:border-var-primary focus:outline-none focus:ring-1 focus:ring-var-primary"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {show ? (
            <HiX className="h-8 w-8" />
          ) : (
            <HiMenuAlt3 className="h-8 w-8" />
          )}
        </button>

        {/* Menu */}
        <div
          className={`${
            show ? "block" : "hidden"
          } menu w-full md:block md:w-auto`}
        >
          <ul
            aria-label="menu"
            className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-8 pt-4 md:pt-0"
          >
            <Link
              to="/"
              className="block text-lg font-bold text-var-primary transform transition md:hover:text-var-secondary active:text-var-secondary active:scale-95"
              activeStyle={{ color: "var(--color-secondary)" }}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="block text-lg font-bold text-var-primary transform transition md:hover:text-var-secondary active:text-var-secondary active:scale-95"
              activeStyle={{ color: "var(--color-secondary)" }}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="block text-lg font-bold text-var-primary transform transition md:hover:text-var-secondary active:text-var-secondary active:scale-95"
              activeStyle={{ color: "var(--color-secondary)" }}
            >
              About
            </Link>
            <Link
              onClick={() => {
                if (show) {
                  setShow(!show);
                }
              }}
              to="#contact"
              className="block text-lg font-bold text-var-off-white bg-var-secondary rounded-xl py-1.5 px-3 transform transition md:hover:opacity-80 active:scale-95"
            >
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
}

export default NavBar;
