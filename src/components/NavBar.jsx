import { NavLink, Link } from "react-router-dom";
import LoginBtn from "./Button/LoginBtn";
import SignUpBtn from "./Button/SignUpBtn";
import { useContext } from "react";
import { PageScrollContext } from "../providers/PageScrollProvider";
const NavBar = () => {
  const user = false;
  const { scrollToSection, activeSection } = useContext(PageScrollContext);
  const navMenu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive && "border-b-2 border-black"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `${isActive && "border-b-2 border-black"}`
          }
        >
          Products
        </NavLink>
      </li>
      <li
        onClick={() => scrollToSection("featuredSection")}
        className={`cursor-pointer ${
          activeSection === "featuredSection" && "border-b-2 border-black"
        }`}
      >
        Featured Product
      </li>
    </>
  );
  return (
    <div className="navbar justify-between max-w-[1500px] mx-auto relative z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow font-bold"
          >
            {navMenu}
            {!user && (
              <>
                <li>
                  <LoginBtn />
                </li>
                <li>
                  <SignUpBtn />
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold -mt-4">
          TechDiscover<span className="text-4xl text-orange-600">.</span>
        </Link>
        <div className="hidden lg:flex lg:ps-10">
          <ul className="menu-horizontal px-1 gap-5 font-bold">{navMenu}</ul>
        </div>
      </div>
      <div className="navbar-end flex place-items-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-md"
            >
              <li>
                <Link className="justify-between">User name</Link>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-5">
            <LoginBtn />
            <SignUpBtn />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
