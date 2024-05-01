import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { User, useAuth0 } from "@auth0/auth0-react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated, user } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState("false");

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary estimate" },
    { path: "/post-job", title: "Post A Job" },
    { path: "/about", title: "About" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4 shadow-lg ">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx="12.0143"
              cy="12.5143"
              r="12.0143"
              fill="#58B3FC"
              fillOpacity="0.4"
            />
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#0476D0" />
          </svg>
          <p className="text-3xl font-bold text-center">
            <span className="text-yellow-600">JOB</span>{" "}
            <span className="text-orange-400">UPLIFT</span>
          </p>
        </a>
        {/* nav items  for larger devices */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Toggle dark mode */}
        <div onClick={toggleDarkMode}>
          {darkMode ? (
            <MdLightMode className="text-4xl text-slate-900" />
          ) : (
            <MdOutlineLightMode className="text-4xl " />
          )}
        </div>

        {/*Login and logout button*/}
        {isAuthenticated && (
          <div className="hidden lg:flex  ">
            <img src={user.picture} alt={user.name} className="w-6 h-6" />
            <h2 className="px-2 text-slate-900 ">
              Welcome{" "}
              <span className="text-blue font-bold uppercase text-lg">
                {user.name.slice(0, 10)}
              </span>
            </h2>
          </div>
        )}
        {isAuthenticated ? (
          <div className="text-base text-primary font-medium  hidden lg:block">
            {" "}
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="bg-blue text-white py-2 px-5 border rounded-md hover:bg-sky-700"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="text-base text-primary font-medium  hidden lg:block">
            <button
              onClick={() => loginWithRedirect()}
              className="bg-blue text-white py-2 px-5 border rounded-md hover:bg-sky-700"
            >
              {" "}
              Log in
            </button>
          </div>
        )}
        {/* mobile menu */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <>
                <FaXmark className="w-5 h-5 text-primary/75" />{" "}
              </>
            ) : (
              <>
                <FaBarsStaggered className="w-5 h-5 text-primary/75" />{" "}
              </>
            )}
          </button>
        </div>
      </nav>

      {/* nav items  for mobile*/}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                onClick={handleMenuToggler}
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}

          <li className="text-white py-1">
            {" "}
            <button onClick={() => loginWithRedirect()}>Log in</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
